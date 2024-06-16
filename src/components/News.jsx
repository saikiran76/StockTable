import { Button } from "./Button"
import { MdOutlineArrowOutward } from "react-icons/md";

const News = () => {
    return (
      <div className="rounded-md bg-[#050F0F] text-white p-8 m-4 ml-4 md:ml-16 font-poppin">
        <div className="flex gap-2">
          <Button name={<p>The markets are <span style={{ color: "green" }}>bullish</span></p>} icon={<span className="hidden" />} p="p-[0.5em]" />
          <Button icon={<MdOutlineArrowOutward />} />
        </div>
        <h1 className="mt-[9em] ml-1 text-gray-600">What do you need to know?</h1>
        <h1 className="font-bold mt-2">Jan Inflation Surges, Squeezing Budgets; S&P 500 Rallies as Markets Face 'Bumpy' 2% Path</h1>
      </div>
    );
  };
  

export default News;