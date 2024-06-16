import { useEffect } from "react"
import { API_KEY_FMP } from "../utils/constants"

const Overview = () =>{
    const Markets = [
        {
            id: "1", name: "S&P 500",
            currentValue:"498.06",
            dailyChange: "+0.94%"
        },
        {
            id: "2", name: "S&P 500",
            currentValue:"498.06",
            dailyChange: "+0.94%"
        },
        {
            id: "3", name: "S&P 500",
            currentValue:"498.06",
            dailyChange: "+0.94%"
        },
        {
            id: "4", name: "S&P 500",
            currentValue:"498.06",
            dailyChange: "+0.94%"
        },
        {
            id: "5", name: "S&P 500",
            currentValue:"498.06",
            dailyChange: "+0.94%"
        },
        {
            id: "6", name: "S&P 500",
            currentValue:"498.06",
            dailyChange: "+0.94%"
        },{
            id: "7", name: "S&P 500",
            currentValue:"498.06",
            dailyChange: "+0.94%"
        },
        {
            id: "8", name: "S&P 500",
            currentValue:"498.06",
            dailyChange: "+0.94%"
        },
        {
            id: "9", name: "S&P 500",
            currentValue:"498.06",
            dailyChange: "+0.94%"
        },
        {
            id: "10", name: "S&P 500",
            currentValue:"498.06",
            dailyChange: "+0.94%"
        }
    ]

    // const keySymbols = ['S&P 500', 'Nasdaq', 'Small Cap 2000', 'S&P 500 VIX', 'Dow Jones', 'Nifty 50', 'BSE Sensex', 'Nifty Bank', 'India VIX', 'DAX']

    const fetchIndex = async() =>{
        const response = await fetch(`https://financialmodelingprep.com/api/v3/quote/AAPL?apikey=${API_KEY_FMP}`)
        const data = await response.json();
        console.log(data);
    }

    useEffect(()=>{
        fetchIndex()

    }, [])

    return(
        <div className="bg-[#0F0F14] p-4 text-zinc-200 font-poppin">
            {
                Markets.map((item)=>(
                    <div className="p-3 flex justify-between items-center text-xs hover:bg-[#19191E] rounded-md duration-200" key={item.id}>
                        <p className="font-semibold texxt-white">{item.name}</p>
                        <div className="flex gap-4 items-center">
                            <p className="font-base text-xs">{item.currentValue}</p>
                            <p className="font-base text-xs">{item.dailyChange}</p>
                            {/* <p className="font-base text-sm">{item.perce</p> */}
                        </div>
                    </div>
                ))
            }


        </div>
    )
}

export default Overview;