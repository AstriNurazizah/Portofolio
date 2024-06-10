import { GiArrowFlights } from "react-icons/gi";
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
                <a href="/hero" className=" text-3xl 
                tracking-wider flex item-center">AN<GiArrowFlights /></a>
            </div>
            <div className="space-x-4">
                <div className="ssm:hidden lg:block space-x-2">
                <a href="#project" className="hover:text-neutral-300
                rounded-full px-5 py-2 text-xl">Portofolio</a>
                <a href="#about" className="hover:text-neutral-300
                rounded-full px-5 py-2 text-xl">About Me</a>
                <a href="#blog" className="hover:text-neutral-300
                rounded-full px-5 py-2 text-xl">Blog</a>
                <a href="#contact" className="hover:text-neutral-300
                rounded-full px-5 py-2 text-xl">Contact</a>
                </div>
                
                <div className="ssm:block lg:hidden">
                {toggle ? (
                    <AiOutlineClose onClick={closeMenu} size={30} 
                    className="cursor-pointer hover:text-neutral-300"/>
                ):(<HiMenuAlt1 size={30} onClick={openMenu} className=""/>
                )}
                
                </div>
            </div>
        </div>

        <div className="ssm:block lg:hidden">
            {toggle ? (
                <div className="flex justify-between ml-10">
                <ul>
                    <li className="text-xl mb-2 cursor-pointer hover:text-neutral-300">Project</li>
                    <li className="text-xl mb-2 cursor-pointer hover:text-neutral-300">Play</li>
                    <li className="text-xl mb-2 cursor-pointer hover:text-neutral-300">Blog</li>
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