import { useEffect } from "react";
import { useScaffoldReadContract } from "../scaffold-eth";

const useStakingData = () => {
  const { data: totalStakedMON } = useScaffoldReadContract({
    contractName: "StakingLST",
    functionName: "totalStakedMON",
  });
  const { data: totalUniqueStakers } = useScaffoldReadContract({
    contractName: "StakingLST",
    functionName: "totalUniqueStakers",
  });

  useEffect(() => {
    // You can add any side effects or data fetching logic here
    console.log("Staking data updated:", { totalStakedMON, totalUniqueStakers });
  }, [totalStakedMON, totalUniqueStakers]);

  return { totalStakedMON, totalUniqueStakers };
};

export default useStakingData;
