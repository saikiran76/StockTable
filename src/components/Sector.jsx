import { useEffect, useState } from "react";
import { transformPercentageToFloat } from "../utils/Helper";
import { API_KEY_FMP } from "../utils/constants";

const Sector = ({ color = "bg-[#1E2D2D]" }) => {
    const [sum, setSum] = useState(0);
    const [sectors, setSectors] = useState([]);

    const fetchSectors = async () => {
        const response = await fetch(`https://financialmodelingprep.com/api/v3/sectors-performance?apikey=${API_KEY_FMP}`);
        const data = await response.json();
        console.log(data);
        setSectors(data);

        const aggregatePerformance = data.reduce((acc, obj) => {
            const sum = transformPercentageToFloat(obj.changesPercentage);
            return acc + sum;
        }, 0);

        setSum(parseFloat(aggregatePerformance.toFixed(2)));
    };

    useEffect(() => {
        fetchSectors();
    }, []);

    return (
        <div className="rounded-md bg-[#0F0F14] text-white p-6 m-4 ml-5 font-poppin overflow-hidden">
            <h2 className="text-white text-sm mb-3 flex justify-between items-center">Sector Performance
            <p className="text-gray-500 text-xs">% price change</p></h2>
            <div className="grid grid-cols-2 gap-1 flex-wrap items-center">
                {
                    sectors.map((sec, index) => {
                        const changePercentage = transformPercentageToFloat(sec.changesPercentage);
                        const sectorColor = changePercentage < 0 ? "bg-[#28191E]" : color;
                        return (
                            <div className="flex gap-1 justify-between p-2 bg-[#27272A] rounded hover:bg-gray-500 duration-200" key={index}>
                                <p className="text-xs text-white">{sec.sector}</p>
                                <p className={`text-xs ${sectorColor==="bg-[#28191E]"?"text-red-500":"text-green-400"} ${sectorColor} p-1 rounded`}>{changePercentage<0?changePercentage:"+"+changePercentage}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Sector;
