import { HiHome, HiSearch, HiUser, HiBookOpen } from 'react-icons/hi';
import { GiMoebiusTriangle } from "react-icons/gi";

export const NavBar = ({ onUserIconClick }) => {
    return (
      <div className="border-gray-600 border-r h-full p-4 md:p-2 bg-[#141419]">
        <div className='m-3 md:ml-7 md:mt-8 text-white'><GiMoebiusTriangle /></div>
        <div className="p-4 flex flex-col gap-5 justify-center items-center mt-[10em]">
          <div className="text-gray-400 text-xl cursor-pointer hover:text-blue-400 duration-300"><HiHome /></div>
          <div className="text-gray-400 text-xl cursor-pointer hover:text-blue-400 duration-300"><HiSearch /></div>
          <div onClick={() => onUserIconClick()} className="text-gray-400 text-xl cursor-pointer hover:text-blue-400 duration-300"><HiUser /></div>
          <div className="text-gray-400 text-xl cursor-pointer hover:text-blue-400 duration-300"><HiBookOpen /></div>
        </div>
      </div>
    );
  };
  