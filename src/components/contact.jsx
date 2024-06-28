import Blur4img from '../assets/blurb-004.png';
import { TfiEmail } from "react-icons/tfi";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

export default function Footer() {
    return (

      <div className='bg-neutral-100 justify-center' id='contact'>
        <div className="flex items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 justify-center">
            <div className="lg:w-1/2 ssm:w-fit flex ">
                <div>
                <img src={Blur4img} alt='' />
                </div>
                <div className='md-8'>
                <h1 className="text-5xl">Let’s Connect</h1>
                <p className='md-6'>
                Contact me today to elevate your brand with intuitive designs that drive meaningful interactions and leave a lasting impact on your users.
                </p>
                </div>
            </div>
        </div>
        <div className='flex ssm:flex-col lg:flex-row justify-center'>
            <div className='relative rounded-xl overflow-auto p-8 hover:animate-pulse'>
                <div className='flex items-center gap-3'>
                    <button className='flex justify-end items-center border border-black
                     text-black px-40 py-3 mb-8'>astrinurazizah501@gmail.com<TfiEmail /></button>
                </div>
            </div>
            <div className='relative rounded-xl overflow-auto p-8 hover:animate-pulse'>
                <div className='flex items-center gap-3'>
                    <button className='flex justify-end items-center border border-black
                     text-black px-40 py-3 mb-8'>Linkedin <CiLinkedin /></button>
                </div>
            </div>
            <div className='relative rounded-xl overflow-auto p-8 hover:animate-pulse'>
                <div className='flex items-center gap-3'>
                    <button className='flex justify-end items-center border border-black
                     text-black px-40 py-3 mb-8'>Github<FiGithub /></button>
                </div>
            </div>
        </div>
    </div>

  )
}
