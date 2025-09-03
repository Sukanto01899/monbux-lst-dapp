import React, { useState } from "react";
import Image from "next/image";
import { Token } from "~~/utils/monbux/types";

const TokenDetails = ({ token }: { token: Token }) => {
  const [price] = useState("0.00");
  //   const chainId = useChainId() || 1;
  //   const parsedSellAmount = parseUnits("1", token.decimals).toString();
  //   const buyTokenObject = MONAD_TESTNET_TOKENS_BY_SYMBOL["usdt"];
  //   const priceRequest: PriceRequest = useMemo(
  //     () => ({
  //       chainId,
  //       sellToken: token.address,
  //       buyToken: buyTokenObject.address,
  //       sellAmount: parsedSellAmount,
  //     }),
  //     [chainId, token.address, parsedSellAmount, buyTokenObject.address],
  //   );

  //   const {
  //     price: fetchedPrice,
  //     isLoading: isPriceLoading,
  //     error: priceError,
  //   } = usePriceFetcher({
  //     enabled: true,
  //     request: priceRequest,
  //   });

  //   useMemo(() => {
  //     if (fetchedPrice) {
  //       console.log(fetchedPrice);
  //       //   setPrice(formatUnits(BigInt(fetchedPrice.buyAmount), buyTokenObject.decimals));
  //     }
  //   }, [fetchedPrice, buyTokenObject.decimals]);
  return (
    <div key={token.symbol} className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
          <Image
            alt={token.logoURI}
            className="h-full w-full rounded-full border border-gray-200 dark:border-gray-600"
            src={token.logoURI}
            width={40}
            height={40}
          />
        </div>
        <div>
          <div className="text-white font-medium">{token.symbol}</div>
          <div className="text-gray-400 text-sm">${price}</div>
        </div>
      </div>
      {/* <div className={`text-sm font-medium ${token.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
              {token.change}
            </div> */}
    </div>
  );
};

export default TokenDetails;
