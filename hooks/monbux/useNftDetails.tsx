import { useEffect, useState } from "react";
import { useScaffoldReadContract } from "../scaffold-eth";

const useNftDetails = () => {
  const [nftData, setNftData] = useState<null | {
    name: string;
    symbol: string;
    maxSupply: number;
    totalMinted: string;
    isActive: boolean;
  }>(null);
  const {
    data,
    isLoading: isLoadingNftData,
    isError: isErrorNftData,
  } = useScaffoldReadContract({
    contractName: "MonBuxPioneerNFT",
    functionName: "getContractInfo",
  });

  useEffect(() => {
    if (data) {
      const structure = {
        name: data[0],
        symbol: data[1],
        maxSupply: parseInt(data[3].toString()),
        totalMinted: parseInt(data[6].toString()).toString(),
        isActive: data[5],
        mintPrice: parseInt(data[4].toString()).toString(),
      };
      setNftData(structure);
    }
  }, [data]);

  return { nftData, isLoadingNftData, isErrorNftData };
};

export default useNftDetails;
