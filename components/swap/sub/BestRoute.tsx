import React from "react";
import { formatUnits } from "viem";
import { SLIPPAGE_OPTIONS } from "~~/utils/monbux/constants";
import { ExtendedPriceResponse, Token } from "~~/utils/monbux/types";

const BestRoute = ({
  priceDetails,
  buyTokenObject,
  slippage,
}: {
  priceDetails: ExtendedPriceResponse;
  buyTokenObject: Token;
  slippage: number;
}) => {
  return (
    <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
      <input type="checkbox" />
      <div className="collapse-title  font-semibold">
        Best route from{" "}
        <span className="font-bold"> {priceDetails?.route?.fills[0] && priceDetails?.route?.fills[0]?.source}</span>
      </div>
      <div className="collapse-content text-sm space-y-2">
        {/* Network fee */}
        {priceDetails?.totalNetworkFee && (
          <div className="flex justify-between">
            <h5 className="font-semibold">Network cost</h5>

            <h6>{Number(formatUnits(BigInt(priceDetails.totalNetworkFee), 18)).toFixed(6)} MON</h6>
          </div>
        )}

        {/* Fees amount */}
        <div className="flex justify-between">
          <h5 className="font-semibold">Fee</h5>

          <h6>
            {priceDetails?.fees?.integratorFee?.amount
              ? Number(formatUnits(BigInt(priceDetails.fees.integratorFee?.amount), buyTokenObject.decimals)).toFixed(
                  6,
                ) +
                " " +
                buyTokenObject.symbol
              : "0%"}
          </h6>
        </div>

        <div className="flex justify-between">
          <h5 className="font-semibold">Max. slippage</h5>
          <h6>{SLIPPAGE_OPTIONS.find(s => s.value === slippage)?.label}</h6>
        </div>
      </div>
    </div>
  );
};

export default BestRoute;
