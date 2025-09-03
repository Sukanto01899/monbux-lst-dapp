/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useMemo, useState } from "react";
// import TokenSelector from "./TokenSelector";
import { usePriceFetcher } from "../0x/usePriceFetcher";
import {
  AFFILIATE_FEE,
  FEE_RECIPIENT,
  MIN_TRADE_AMOUNT,
  MONAD_TESTNET_TOKENS,
  MONAD_TESTNET_TOKENS_BY_SYMBOL,
} from "../../utils/monbux/constants";
import { ExtendedPriceResponse, PriceRequest, TradeDirection } from "../../utils/monbux/types";
import SwapButton from "../swap/SwapButton";
import FormToken from "../swap/sub/FormToken";
import MiddleSwapBtn from "../swap/sub/MiddleSwapBtn";
import Portfolio from "../swap/sub/Portfolio";
import QuickStats from "../swap/sub/QuickStats";
import Slippage from "../swap/sub/Slippage";
import ToToken from "../swap/sub/ToToken";
import TopTokens from "../swap/sub/TopTokens";
// import { usePrivy, useWallets } from "@privy-io/react-auth";
// import { useSetActiveWallet } from "@privy-io/wagmi";
import { Address, formatUnits, parseUnits } from "viem";
import { useBalance } from "wagmi";
import { AdjustmentsHorizontalIcon, PowerIcon } from "@heroicons/react/24/outline";

interface PriceViewProps {
  price: ExtendedPriceResponse | null;
  taker: Address | undefined;
  setPrice: (price: ExtendedPriceResponse | null) => void;
  setFinalize: (finalize: boolean) => void;
  chainId: number;
}

export default function PriceView({ taker, setPrice, setFinalize, chainId }: PriceViewProps) {
  const [sellToken, setSellToken] = useState("mon");
  const [buyToken, setBuyToken] = useState("usdc");
  const [sellAmount, setSellAmount] = useState("");
  const [buyAmount, setBuyAmount] = useState("");
  const [slippage, setSlippage] = useState(100);
  const [showSettings, setShowSettings] = useState(false);
  const [tradeDirection, setTradeDirection] = useState<TradeDirection>("sell");
  const [previousTokenPair, setPreviousTokenPair] = useState(`${sellToken}-${buyToken}`);
  // const [buyTokenTax, setBuyTokenTax] = useState<TokenTax>({
  //   buyTaxBps: "0",
  //   sellTaxBps: "0",
  // });
  // const [sellTokenTax, setSellTokenTax] = useState<TokenTax>({
  //   buyTaxBps: "0",
  //   sellTaxBps: "0",
  // });

  const handleSellTokenChange = useCallback(
    (e: string) => {
      if (buyToken === e) {
        setSellToken(e);
        setBuyToken(sellToken);
      } else {
        setSellToken(e);
      }

      setSellAmount("");
      setBuyAmount("");
      setPrice(null);
      setPreviousTokenPair(`${sellToken}-${buyToken}`);
    },
    [buyToken, sellToken, setPrice],
  );

  const handleBuyTokenChange = useCallback(
    (e: string) => {
      if (sellToken === e) {
        setBuyToken(e);
        setSellToken(buyToken);
      } else {
        setBuyToken(e);
      }
      setSellAmount("");
      setBuyAmount("");
      setPrice(null);
      setPreviousTokenPair(`${sellToken}-${buyToken}`);
    },
    [buyToken, sellToken, setPrice],
  );

  const handleSellAmountChange = useCallback((e: string) => {
    setTradeDirection("sell");
    setSellAmount(e);
  }, []);

  const handleBuyAmountChange = useCallback((e: string) => {
    setTradeDirection("buy");
    setBuyAmount(e);
  }, []);

  const tokensByChain = useMemo(() => {
    if (chainId === 1) {
      return MONAD_TESTNET_TOKENS_BY_SYMBOL;
    }
    return MONAD_TESTNET_TOKENS_BY_SYMBOL;
  }, [chainId]);

  const sellTokenObject = tokensByChain[sellToken];
  const buyTokenObject = tokensByChain[buyToken];

  const parsedSellAmount = useMemo(() => {
    return sellAmount && tradeDirection === "sell"
      ? parseUnits(sellAmount, sellTokenObject.decimals).toString()
      : undefined;
  }, [sellAmount, tradeDirection, sellTokenObject.decimals]);

  const parsedBuyAmount = useMemo(() => {
    return buyAmount && tradeDirection === "buy"
      ? parseUnits(buyAmount, buyTokenObject.decimals).toString()
      : undefined;
  }, [buyAmount, tradeDirection, buyTokenObject.decimals]);

  const priceRequest: PriceRequest = useMemo(
    () => ({
      chainId,
      sellToken: sellTokenObject.address,
      buyToken: buyTokenObject.address,
      sellAmount: parsedSellAmount,
      buyAmount: parsedBuyAmount,
      taker,
      swapFeeRecipient: FEE_RECIPIENT,
      swapFeeBps: AFFILIATE_FEE,
      swapFeeToken: buyTokenObject.address,
      tradeSurplusRecipient: FEE_RECIPIENT,
      slippageBps: slippage,
    }),
    [chainId, sellTokenObject.address, buyTokenObject.address, parsedSellAmount, parsedBuyAmount, taker, slippage],
  );

  const {
    price: fetchedPrice,
    isLoading: isPriceLoading,
    error: priceError,
    validationErrors,
  } = usePriceFetcher({
    enabled: sellAmount !== "" && parseFloat(sellAmount) >= parseFloat(MIN_TRADE_AMOUNT),
    request: priceRequest,
  });

  useEffect(() => {
    if (!fetchedPrice || isPriceLoading) return;

    if (sellAmount === "" || parseFloat(sellAmount) <= 0) {
      setBuyAmount("");
      setPrice(null);
      return;
    }
    const currentTokenPair = `${sellToken}-${buyToken}`;
    console.log({ currentTokenPair, previousTokenPair });
    if (previousTokenPair !== currentTokenPair) {
      return setPreviousTokenPair(currentTokenPair);
    }

    setPrice(fetchedPrice);

    if (fetchedPrice.buyAmount) {
      const newBuyAmount = formatUnits(BigInt(fetchedPrice.buyAmount), buyTokenObject.decimals);
      setBuyAmount(newBuyAmount);
    }
    // if (fetchedPrice.tokenMetadata && !isPriceLoading) {
    //   setBuyTokenTax(fetchedPrice.tokenMetadata.buyToken);
    //   setSellTokenTax(fetchedPrice.tokenMetadata.sellToken);
    // }
  }, [fetchedPrice, buyTokenObject.decimals, isPriceLoading, sellAmount, setPrice, sellToken, buyToken]);

  const { data: sellTokenBalance } = useBalance({
    address: taker,
    token: sellTokenObject.address,
  });

  const insufficientBalance = useMemo(() => {
    if (!sellTokenBalance || !sellAmount || sellAmount === "") return false;
    try {
      return parseUnits(sellAmount, sellTokenObject.decimals) > sellTokenBalance.value;
    } catch {
      return true;
    }
  }, [sellTokenBalance, sellAmount, sellTokenObject.decimals]);

  const hasValidAmount = !!(sellAmount && sellAmount !== "" && parseFloat(sellAmount) > 0);

  // const formatTax = (taxBps: string) => (parseFloat(taxBps) / 100).toFixed(2);

  return (
    <div className="max-w-6xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl overflow-hidden p-4 lg:p-8 border border-gray-700/50 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <PowerIcon className="w-8 h-8 text-purple-400 mr-2" />
                Swap
              </h2>
              <button
                onClick={() => setShowSettings(prev => !prev)}
                className="p-2 bg-gray-700 hover:bg-gray-600 rounded-xl transition-colors"
              >
                <AdjustmentsHorizontalIcon className="w-5 h-5 text-gray-300" />
              </button>
            </div>

            {showSettings && <Slippage slippage={slippage} setSlippage={setSlippage} />}

            {priceError && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-2 mb-2">
                <p className="text-red-800 dark:text-red-200 font-medium">Error fetching price:</p>
                <p className="text-red-700 dark:text-red-300 text-sm">{priceError}</p>
              </div>
            )}

            {validationErrors.length > 0 && (
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mb-4">
                <p className="text-yellow-800 dark:text-yellow-200 font-medium mb-2">Validation Issues:</p>
                <ul className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1">
                  {validationErrors.map((error, index) => (
                    <li key={index}>• {error.reason}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="space-y-4 mb-6">
              {/* Selling token selector */}
              <FormToken
                fromAmount={sellAmount}
                setFromAmount={handleSellAmountChange}
                fromToken={sellToken}
                setFromToken={handleSellTokenChange}
                tokens={MONAD_TESTNET_TOKENS}
              />

              {/* Token swap icon */}
              <MiddleSwapBtn
                fromToken={sellToken}
                toToken={buyToken}
                setFromToken={handleSellTokenChange}
                setToToken={handleBuyTokenChange}
                setFromAmount={handleSellAmountChange}
                setToAmount={handleBuyAmountChange}
              />

              {/* Buying token selector */}
              <ToToken
                toAmount={buyAmount}
                setToAmount={handleBuyAmountChange}
                toToken={buyToken}
                setToToken={handleBuyTokenChange}
                tokens={MONAD_TESTNET_TOKENS}
                isPriceLoading={isPriceLoading}
              />
            </div>

            {isPriceLoading && sellAmount && (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 mb-6 space-y-2">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                  <div className="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
                  <span className="text-sm">Fetching latest price...</span>
                </div>
              </div>
            )}

            {fetchedPrice && !isPriceLoading && buyAmount && fetchedPrice.fees?.integratorFee?.amount && (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 mb-6 space-y-2">
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  <span className="font-medium">Fee:</span>{" "}
                  {Number(formatUnits(BigInt(fetchedPrice.fees.integratorFee.amount), buyTokenObject.decimals)).toFixed(
                    6,
                  )}{" "}
                  {buyTokenObject.symbol}
                </div>
              </div>
            )}

            <div className="space-y-4">
              <SwapButton
                taker={taker!}
                onClick={() => setFinalize(true)}
                sellTokenAddress={sellTokenObject.address}
                disabled={!hasValidAmount || insufficientBalance || !fetchedPrice || !buyAmount}
                price={fetchedPrice}
                hasValidAmount={hasValidAmount}
                insufficientBalance={insufficientBalance}
              />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Portfolio */}
          <Portfolio />

          <TopTokens />

          {/* Quick Stats */}
          <QuickStats />
        </div>
      </div>
    </div>
  );
}
