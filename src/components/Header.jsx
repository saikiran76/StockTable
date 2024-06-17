import { formatDate } from '../utils/Helper';
import { Button } from "./Button";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa";
import { RiVipFill } from "react-icons/ri";
import { auth } from '../utils/firebase';
import { useState, useEffect } from "react";

const Header = () => {
  const [userName, setUserName] = useState("Guest");

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserName(user.email);
    }
  }, []);
  
  const today = new Date();
  const formatedDate = formatDate(today);

  return (
    <header className="p-4 md:p-[4rem] text-white font-poppin mb-6 md:mb-0 mt-4 md:mt-2">
      <div className="border-gray-600 border-b flex flex-col md:flex-row justify-between items-center pb-6">
        <div>
          <h1 className="text-lg md:text-md font-bold flex items-center gap-2">Hello, {userName} <RiVipFill style={{ color: "blue" }} /></h1>
          <span>{formatedDate}</span>
        </div>
        <nav className="flex space-x-4 justify-between mt-4 md:mt-0">
          <Button name="For you" />
          <Button name="Screener" icon={<AiOutlineFundProjectionScreen />} />
          <Button icon={<CiSearch />} pad="rounded-[90%]" />
          <Button icon={<FaRegBookmark />} add="ml-4" />
        </nav>
      </div>
    </header>
  );
};


export default Header;
