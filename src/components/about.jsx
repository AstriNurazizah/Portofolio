import Aboutimg from '../assets/Rectangle 2.png';
import AboutProfilimg from '../assets/girl.webp';
import { BsDownload } from "react-icons/bs";
import Blur1img from '../assets/blurb-001.svg';
import Blur2img from '../assets/blurb-002.svg';
import Blur3img from '../assets/blurb-003.svg';


export default function about() {
    return (
        <div className='bg-neutral-100 '>
            <div className=" flex justify-around p-10 space-x-10 
        lg:flex-row ssm:flex-col">
            <div className="lg:w-1/2 ssm:w-fit">
            <h1 className="text-5xl mb-20">About me</h1>
            <img src={AboutProfilimg} alt="" width={50} height={50}
                    className="w-20 h-20 rounded-full object-cover mb-10"
                />
            <p className='mb-4'>
            Hi, thanks for stopping by. I’m Astri Nurazizah, a UI/UX designer. I love to connect with others and share what I am learning. Working in the software industry for the past 8 years.
            </p>
            <p className='mb-4'>Expert in creating design mockups, wireframes, prototypes, and illustrations, and setting up visual design guidelines. </p>
            <button className='flex justify-end items-center border border-black text-black px-6 py-3 mb-8'>Download CV<BsDownload /></button>
            </div>
            <div className="w-1/3 items-center ssm:w-fit">
                <h1 className="text-5xl mb-10">Aligning business goals with user needs.</h1>
                <img src={Aboutimg} alt="" width={700} height={320}
                    className="rounded-full "
                />
            </div>
        </div>

        <div className='grid m-10'>
            <h1 className='text-3xl mt-10'>My Expertise</h1>
        </div>
        <div>
            <div className='grid grid-cols-3 gap-4 p-5'>
                <div className='max-w-md mx-auto bg-white rounded-1 
                shadow-md oberflow-hidden md-max-w-2xl hover:animate-pulse'>
                <div className='md:flex'>
                    <div className='p-8'>
                    <div>
                    <img src={Blur1img} alt='' />
                    </div>
                    <a href='#' className='uppercase tracking-wide text-sm
                     to-slate-300 font-semibold'>
                     User Interface Design</a>
                     <p className='mt-2 text-slate-400'>Crafting intuitive digital experiences through visual aesthetics and interaction design.</p>
                    </div>
                </div>
                </div>
                <div className='max-w-md mx-auto bg-white rounded-1 
                shadow-md oberflow-hidden md-max-w-2xl hover:animate-pulse'>
                <div className='md:flex'>
                    <div className='p-8'>
                    <div>
                    <img src={Blur2img} alt='' />
                    </div>
                    <a href='#' className='uppercase tracking-wide text-sm
                     to-slate-300 font-semibold'>
                     User Interface Design</a>
                     <p className='mt-2 text-slate-400'>Crafting intuitive digital experiences through visual aesthetics and interaction design.</p>
                    </div>
                </div>
                </div>
                <div className='max-w-md mx-auto bg-white rounded-1 
                shadow-md oberflow-hidden md-max-w-2xl hover:animate-pulse'>
                <div className='md:flex'>
                    <div className='p-8'>
                    <div>
                    <img src={Blur3img} alt='' />
                    </div>
                    <a href='#' className='uppercase tracking-wide text-sm
                     to-slate-300 font-semibold'>
                     User Interface Design</a>
                     <p className='mt-2 text-slate-400'>Crafting intuitive digital experiences through visual aesthetics and interaction design.</p>
                    </div>
                </div>
                </div>
            </div>
            <hr/>
        </div>


        <div className='grid m-10'>
            <h1 className='text-3xl mt-10'>My Expertise</h1>
        </div>
        <div className=' flex ssm:flex-col lg:flex-row'>
            <div className='relative rounded-xl overflow-auto 
            p-8 hover:animate-pulse'>
            <div className='overflow-hidden relative max-w-md mx-auto
            bg-white shadow-lg flex 
            items-center gap-6'>
                <img src={Blur1img} alt='' />
            </div>
            </div>
            <div className='relative rounded-xl overflow-auto 
            p-8 hover:animate-pulse'>
            <div className='overflow-hidden relative max-w-md mx-auto
            bg-white shadow-lg flex 
            items-center gap-6'>
                <img src={Blur1img} alt='' />
            </div>
            </div>
            <div className='relative rounded-xl overflow-auto 
            p-8 hover:animate-pulse'>
            <div className='overflow-hidden relative max-w-md mx-auto
            bg-white shadow-lg flex 
            items-center gap-6'>
                <img src={Blur1img} alt='' />
            </div>
            </div>
            <div className='relative rounded-xl overflow-auto 
            p-8 hover:animate-pulse'>
            <div className='overflow-hidden relative max-w-md mx-auto
            bg-white shadow-lg flex 
            items-center gap-6'>
                <img src={Blur1img} alt='' />
            </div>
            </div>
            <div className='relative rounded-xl overflow-auto 
            p-8 hover:animate-pulse'>
            <div className='overflow-hidden relative max-w-md mx-auto
            bg-white shadow-lg flex 
            items-center gap-6'>
                <img src={Blur1img} alt='' />
            </div>
            </div>
            <div className='relative rounded-xl overflow-auto 
            p-8 hover:animate-pulse'>
            <div className='overflow-hidden relative max-w-md mx-auto
            bg-white shadow-lg flex 
            items-center gap-6'>
                <img src={Blur1img} alt='' />
            </div>
            </div>
            <div className='relative rounded-xl overflow-auto 
            p-8 hover:animate-pulse'>
            <div className='overflow-hidden relative max-w-md mx-auto
            bg-white shadow-lg flex 
            items-center gap-6'>
                <img src={Blur1img} alt='' />
            </div>
            </div>
        </div>
        </div>
  )
}

