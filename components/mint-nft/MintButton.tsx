import Button from "./sub/Button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useSwitchChain } from "wagmi";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { getTargetNetworks } from "~~/utils/scaffold-eth";

const allowedNetworks = getTargetNetworks();

const MintButton = ({
  mintNFT,
  isMinting,
  isActive,
}: {
  mintNFT: () => void;
  isMinting: boolean;
  isActive?: boolean;
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
                  <Button onClick={mintNFT} disabled={isMinting || !isActive}>
                    {isMinting ? "Minting..." : "Mint"}
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

export default MintButton;
