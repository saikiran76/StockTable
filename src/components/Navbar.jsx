import { HiHome, HiSearch, HiUser, HiBookOpen } from 'react-icons/hi';
import { GiMoebiusTriangle } from "react-icons/gi";
export const NavBar = () =>{
    return(
        <div className="border-gray-600 border-r h-[200%] p-2 bg-[#141419]">
            <GiMoebiusTriangle style={{margin:"1em", color:"white"}}/>
            <div className="p-4 flex flex-col gap-5 justify-center items-center mt-[10em]">
                <div className='text-gray-400 text-xl cursor-pointer hover:text-blue-400 duration-300'><HiHome /></div>
                <div className='text-gray-400 text-xl cursor-pointer hover:text-blue-400 duration-300'><HiSearch /></div>
                <div className='text-gray-400 text-xl cursor-pointer hover:text-blue-400 duration-300'><HiUser /></div>
                <div className='text-gray-400 text-xl cursor-pointer hover:text-blue-400 duration-300'><HiBookOpen /></div>

            </div>
        </div>
    )
}