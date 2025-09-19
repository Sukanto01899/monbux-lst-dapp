import { useEffect } from "react";
import Button from "../common/Button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Address, erc20Abi } from "viem";
import {
  useReadContract,
  useSimulateContract,
  useSwitchChain,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { MAX_ALLOWANCE } from "~~/utils/monbux/constants";
import { ExtendedPriceResponse } from "~~/utils/monbux/types";
import { getTargetNetworks } from "~~/utils/scaffold-eth";

const allowedNetworks = getTargetNetworks();

interface ApproveButtonProps {
  taker: Address;
  onClick: () => void;
  sellTokenAddress: Address;
  disabled?: boolean;
  price: ExtendedPriceResponse | undefined;
  hasValidAmount?: boolean;
  insufficientBalance?: boolean;
}

const SwapButton = ({
  taker,
  onClick,
  sellTokenAddress,
  disabled,
  price,
  hasValidAmount,
  insufficientBalance,
}: ApproveButtonProps) => {
  const { targetNetwork } = useTargetNetwork();
  const { switchChain } = useSwitchChain();
  const spender = price?.issues?.allowance?.spender;
  const needsApproval = price?.issues?.allowance != null;

  // Always call hooks at the top level
  const { data: allowance, refetch } = useReadContract({
    address: sellTokenAddress,
    abi: erc20Abi,
    functionName: "allowance",
    args: spender ? [taker, spender] : undefined,
    query: { enabled: needsApproval && !!spender },
  });

  const { data: simulateData } = useSimulateContract({
    address: sellTokenAddress,
    abi: erc20Abi,
    functionName: "approve",
    args: spender ? [spender, MAX_ALLOWANCE] : undefined,
    query: { enabled: needsApproval && !!spender },
  });

  const { data: writeContractResult, writeContractAsync: writeContract, error, isPending } = useWriteContract();

  const { isLoading: isApproving } = useWaitForTransactionReceipt({
    hash: writeContractResult,
  });

  useEffect(() => {
    if (simulateData) {
      refetch();
    }
  }, [simulateData, refetch]);

  const getButtonText = () => {
    if (!hasValidAmount) return "Enter Amount";
    if (insufficientBalance) return "Insufficient Balance";
    return "Review Trade";
  };

  const getAriaLabel = () => {
    if (!hasValidAmount) return "Enter an amount to continue";
    if (insufficientBalance) return "Insufficient balance to complete trade";
    return "Review trade details";
  };

  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, mounted }) => {
        const connected = mounted && account && chain;
        return (
          <>
            {(() => {
              if (!connected) {
                return (
                  <button className="btn btn-xl rounded-xl w-full" onClick={openConnectModal} type="button">
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported || chain.id !== targetNetwork.id) {
                return (
                  <button
                    onClick={() => switchChain?.({ chainId: allowedNetworks[0].id })}
                    className="btn btn-warning btn-xl text-white text-xl font-bold py-3 px-4 rounded-xl w-full"
                    type="button"
                  >
                    Wrong network
                  </button>
                );
              }

              // If needs approval
              if (!needsApproval) {
                return (
                  <Button
                    type="button"
                    disabled={disabled}
                    onClick={() => {
                      onClick();
                    }}
                    aria-label={getAriaLabel()}
                  >
                    {getButtonText()}
                  </Button>
                );
              }

              // If error
              if (error) {
                return (
                  <div className="w-full p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg">
                    <p className="text-red-800 dark:text-red-200 text-sm">Approval failed.</p>
                  </div>
                );
              }

              // allownce
              if (allowance === BigInt(0) || !allowance) {
                const getButtonTextForAllowance = () => {
                  if (isPending || isApproving) {
                    return (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        {isApproving ? "Approving..." : "Confirming..."}
                      </span>
                    );
                  }
                  if (insufficientBalance) return "Insufficient Balance";
                  if (!spender) return "No Spender Available";
                  return "Approve";
                };

                const getAriaLabelForAllowance = () => {
                  if (insufficientBalance) return "Insufficient balance to complete trade";
                  if (!spender) return "No spender available";
                  return "Approve token spending";
                };

                return (
                  <Button
                    type="button"
                    disabled={isPending || isApproving || !spender || insufficientBalance}
                    onClick={async () => {
                      if (!spender) {
                        return;
                      }
                      try {
                        await writeContract({
                          abi: erc20Abi,
                          address: sellTokenAddress,
                          functionName: "approve",
                          args: [spender, MAX_ALLOWANCE],
                        });
                        refetch();
                      } catch {
                        // Silent error handling
                      }
                    }}
                    aria-label={getAriaLabelForAllowance()}
                  >
                    {getButtonTextForAllowance()}
                  </Button>
                );
              }

              return (
                <Button
                  type="button"
                  disabled={disabled}
                  onClick={() => {
                    onClick();
                  }}
                  aria-label={disabled ? "Insufficient balance to complete trade" : "Review trade details"}
                >
                  {disabled ? "Insufficient Balance" : "Review Trade"}
                </Button>
              );
            })()}
          </>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default SwapButton;
