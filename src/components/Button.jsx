import { FaRegCompass } from "react-icons/fa6";

export const Button = ({name, icon, pad="rounded-[2em]", add, p="p-2"})=>{
    return(
        <button className={`bg-zinc-800 ${p} text-sm text-gray-300 flex gap-2 items-center ${pad} ${add}
        hover:bg-[#141419] duration-200`}>
            {!icon ? <FaRegCompass style={{color:"gray"}}/> : icon}
            {name}
        </button>
    )
}