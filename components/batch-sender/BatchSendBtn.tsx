import Button from "../mint-nft/sub/Button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useSwitchChain } from "wagmi";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { getTargetNetworks } from "~~/utils/scaffold-eth";

const allowedNetworks = getTargetNetworks();

const BatchSendButton = ({
  sendBatchTransaction,
  isWriting,
  isConfirming,
  IsRecipientsAvailable,
}: {
  sendBatchTransaction: () => void;
  isWriting: boolean;
  isConfirming?: boolean;
  IsRecipientsAvailable?: boolean;
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
                  <Button onClick={openConnectModal} type="button">
                    Connect Wallet
                  </Button>
                );
              }

              if (chain.unsupported || chain.id !== targetNetwork.id) {
                return (
                  <Button onClick={() => switchChain?.({ chainId: allowedNetworks[0].id })} type="button">
                    Wrong network
                  </Button>
                );
              }

              return (
                <>
                  <Button onClick={sendBatchTransaction} disabled={isWriting || isConfirming || IsRecipientsAvailable}>
                    <ArrowRightIcon className="w-6 h-6" />
                    {isWriting ? "Sending..." : isConfirming ? "Confirming..." : "Send Batch Transaction"}
                  </Button>
                </>
              );
            })()}
          </>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default BatchSendButton;
