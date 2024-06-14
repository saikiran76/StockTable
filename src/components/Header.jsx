// import { HiHome, HiSearch, HiUser } from 'react-icons/hi';
import { formatDate } from '../utils/Helper';
import { Button } from "./Button";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa";
import { RiVipFill } from "react-icons/ri";

const Header = ({ userName = "Jane" }) => {
  const today = new Date().toLocaleDateString();
  const formatedDate = formatDate(today)

  return (
    <header className="flex justify-between items-center p-[4rem] bg-zinc-900 text-white border-b font-poppin">
      <div>
        <h1 className="text-xl font-bold flex items-center gap-2">Hello, {userName} <RiVipFill style={{color:"blue"}}/></h1>
        <span>{formatedDate}</span>
      </div>
      <nav className="flex space-x-4 justify-between">
        <Button name="For you"/>
        <Button name="Screener" icon={<AiOutlineFundProjectionScreen/>}/>
        <Button icon={<CiSearch/>} pad="rounded-[90%]"/>
        <Button icon={<FaRegBookmark/>} add="ml-4"/>

      </nav>
    </header>
  );
};

export default Header;
