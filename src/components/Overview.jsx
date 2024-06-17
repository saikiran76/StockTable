import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY_FMP } from "../utils/constants";
import { transformPercentageToFloat } from "../utils/Helper";
import { useDispatch } from "react-redux";
import { changeSymbol } from "../utils/stockSlice";

const Overview = () => {
    const [markets, setMarkets] = useState([]);
    const [error, setError] = useState(null);

    const dispatch = useDispatch();
    // const symbol = 

    const fetchMarketData = async () => {
        try {
            const stocksEndpoint = `https://financialmodelingprep.com/api/v3/quote/AAPL,MSFT,AMZN,GOOGL,FB?apikey=${API_KEY_FMP}`;
            const assetsEndpoint = `https://financialmodelingprep.com/api/v3/quote/CLUSD,GCUSD,SIUSD,BTCUSD?apikey=${API_KEY_FMP}`;

            console.log("Fetching stock data from:", stocksEndpoint);
            console.log("Fetching asset data from:", assetsEndpoint);

            const [stocksResponse, assetsResponse] = await Promise.all([
                axios.get(stocksEndpoint),
                axios.get(assetsEndpoint),
            ]);

            console.log("Stocks Response:", stocksResponse.data);
            console.log("Assets Response:", assetsResponse.data);

            if (stocksResponse.status !== 200 || assetsResponse.status !== 200) {
                throw new Error("Failed to fetch data");
            }

            const stocks = stocksResponse.data.map((stock, i) => ({
                id: i + 1,
                symbol:stock.symbol,
                name: stock.name,
                currentValue: stock.price,
                dailyChange: `${stock.change.toFixed(2)}`,
                percentageChange: `${stock.changesPercentage.toFixed(2)}%`
            }));

            const assets = assetsResponse.data.map((asset, i) => ({
                id: stocks.length + i + 1,
                symbol: asset.symbol,
                name: asset.name,
                currentValue: asset.price,
                dailyChange: `${asset.change.toFixed(2)}`,
                percentageChange: `${asset.changesPercentage.toFixed(2)}%`
            }));

            setMarkets([...stocks, ...assets]);
        } catch (error) {
            console.error("Error fetching market data:", error);
            setError(`Failed to load market data: ${error.message}, API rate-limit has been reached`);
        }
    };

    const getChangeColor = (change) => {
        return parseFloat(change) < 0 ? 'text-red-400' : 'text-green-400';
    };

    const getBackgroud = (percent) =>{
        return transformPercentageToFloat(percent) < 0 ? 'bg-[#28191E]' : 'bg-[#1E2D2D]';
    }

    const percentColor = (percent) =>{
        return transformPercentageToFloat(percent) < 0 ? 'text-red-400' : 'text-green-400';
    }

    useEffect(() => {
        fetchMarketData();
    }, []);

    return (
        <div className="bg-[#0F0F14] p-5 pr-6 md:p-4 text-zinc-200 font-poppin">
            {error ? (
                <p className="p-2">{error}</p>
            ) : (
                markets.map((item) => (
                    <div
                        className="p-3 grid grid-cols-3 gap-[2rem] items-center text-xs hover:bg-[#19191E] rounded-md duration-200"
                        key={item.id}
                        onClick={()=>dispatch(changeSymbol(item.symbol))}
                    >
                        <p className="font-semibold">{item.name}</p>
                        <div className="grid grid-cols-3 items-center float-right w-[210%] ml-[5em]">
                            <p className="font-base text-[0.6rem] w-fit">{item.currentValue}</p>
                            <p className={`font-base text-[0.6rem] ${getChangeColor(item.dailyChange)}`}>{item.dailyChange}</p>
                            <p className={`font-base text-[0.6rem] ${getBackgroud(item.percentageChange)} max-w-fit p-1 rounded ${percentColor(item.percentageChange)}`}>{item.percentageChange}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Overview;
