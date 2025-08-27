import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useSwitchChain } from "wagmi";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { getTargetNetworks } from "~~/utils/scaffold-eth";

const allowedNetworks = getTargetNetworks();

const StakeButton = ({
  handleStake,
  amount,
  isStaking,
  isLoading,
}: {
  handleStake: () => void;
  amount: string;
  isStaking: boolean;
  isLoading?: boolean;
}) => {
  const { targetNetwork } = useTargetNetwork();
  const { switchChain } = useSwitchChain();

  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, mounted }) => {
        const connected = mounted && account && chain;
        return (
          <>
            {(() => {
              if (!connected) {
                return (
                  <button
                    className="btn btn-primary btn-xl text-white text-xl font-bold py-3 px-4 rounded-xl w-full"
                    onClick={openConnectModal}
                    type="button"
                  >
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

              return (
                <>
                  <button
                    onClick={handleStake}
                    disabled={isLoading || parseFloat(amount) <= 0}
                    className={`${parseFloat(amount) > 0 ? "bg-gradient-to-r from-primary to-secondary cursor-pointer" : "bg-gray-700"}  text-white text-xl font-bold py-3 px-4 rounded-xl w-full`}
                  >
                    {isStaking
                      ? parseFloat(amount) > 0
                        ? isLoading
                          ? "Loading..."
                          : "Stake"
                        : "Enter an amount"
                      : parseFloat(amount) > 0
                        ? isLoading
                          ? "Loading..."
                          : "Unstake"
                        : "Enter an amount"}
                  </button>
                </>
              );
            })()}
          </>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default StakeButton;
