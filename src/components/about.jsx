import Aboutimg from '../assets/Rectangle 2.png';
import AboutProfilimg from '../assets/girl.webp';
import { BsDownload } from "react-icons/bs";
import Blur1img from '../assets/blurb-001.svg';
import Blur2img from '../assets/blurb-002.svg';
import Blur3img from '../assets/blurb-003.svg';


export default function about() {
    return (
        <div className='bg-neutral-100 ' id='about' >
            <div className=" flex justify-around p-10 mt-4 space-x-10 
        lg:flex-row ssm:flex-col">
            <div className="lg:w-1/2 ssm:w-fit">
            <h1 className="text-5xl mb-20">About me</h1>
            <img src={AboutProfilimg} alt="" width={50} height={50}
                    className="w-20 h-20 rounded-full object-cover mb-10"
                />
            <p className='mb-4'>
            Hi, I’m Astri Nurazizah, a recent graduate in Informatics Engineering with a strong passion for graphic design and programming. 
            I am enthusiastic about blending creativity and logic to deliver innovative and effective digital solutions.</p>
            <p className='mb-4'>During my studies, I worked on various projects involving user interface design, web development, and application programming. 
            These experiences have honed my ability to create products that not only look great but also function seamlessly.</p>
            <p className='mb-4'>I believe that good design is about how something works, not just how it looks. Therefore, I strive to continuously 
            learn and refine my skills in both fields to become a proficient professional in the technology industry.</p>
            <button className='flex justify-end items-center border border-black text-black px-6 py-3 mb-8'>Download CV<BsDownload /></button>
            </div>
            <div className="w-1/3 items-center ssm:w-fit">
                <h1 className="text-5xl mb-10 text-right">Aligning career aspirations with industry demands.</h1>
                <img src={Aboutimg} alt="" width={700} height={320}
                    className="rounded-full ml-auto"
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
                     User Experience Design</a>
                     <p className='mt-2 text-slate-400'>Empathetically designing seamless journeys that delight users and fulfill their needs.</p>
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
                     Frontend Development</a>
                     <p className='mt-2 text-slate-400'>Transforming designs into dynamic, responsive websites with code & creativity.</p>
                    </div>
                </div>
                </div>
            </div>
            <hr/>
        </div>


        {/* <div className='grid m-10'>
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
        </div> */}
        </div>
  )
}

