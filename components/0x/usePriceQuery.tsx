import { useQuery } from "@tanstack/react-query";
import qs from "qs";
import { ExtendedPriceResponse, PriceRequest } from "~~/utils/monbux/types";

const usePriceQuery = (request: PriceRequest, enabled: boolean) => {
  return useQuery({
    queryKey: ["price", request],
    queryFn: async () => {
      const response = await fetch(`/api/swap/price?${qs.stringify(request)}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ExtendedPriceResponse = await response.json();
      return data;
    },
    refetchInterval: 3000,
    enabled,
  });
};

export default usePriceQuery;
