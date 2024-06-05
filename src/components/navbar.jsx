import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {

const [toggle, setToggle] = useState(false);

function openMenu(){
    setToggle(true);
}

function closeMenu(){
    setToggle(false);
}
  return (
    <>
        <div className="flex items-center justify-between p-10 lg:flex-row
        ">
            <div>
                <a href="#" className="font-syne text-3xl 
                tracking-wider flex item-center">AN <CgNametag/></a>
            </div>
            <div className="space-x-4">
                <div className="ssm:hidden lg:block space-x-2">
                <a href="#" className="hover:bg-slate-600
                rounded-full px-5 py-2 text-xl">Project</a>
                <a href="#" className="hover:bg-slate-600
                rounded-full px-5 py-2 text-xl">Play</a>
                <a href="#" className="hover:bg-slate-600
                rounded-full px-5 py-2 text-xl">Blog</a>
                </div>
                <div className="ssm:block lg:hidden">
                {toggle ? (
                    <AiOutlineClose onClick={closeMenu} size={30} 
                    className="cursor-pointer"/>
                ):(<HiMenuAlt1 size={30} onClick={openMenu} className=""/>
                )}
                
                </div>
            </div>
        </div>

        <div className="ssm:block lg:hidden">
            {toggle ? (
                <div className="flex justify-between ml-10">
                <ul>
                    <li className="text-xl mb-2 cursor-pointer">Project</li>
                    <li className="text-xl mb-2 cursor-pointer">Play</li>
                    <li className="text-xl mb-2 cursor-pointer">Blog</li>
                </ul>
            </div>
            ): (
                <div></div>

            )}
            
        </div>
    </>
  )
}

export default Navbar