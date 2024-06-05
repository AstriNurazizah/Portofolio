import Blur4img from '../assets/blurb-004.png';

export default function Footer() {
    return (

       <div className='bg-neutral-100 justify-center'>
       <div className="flex  items-center  p-10 space-x-10 
    lg:flex-row ssm:flex-col ssm:space-y-10">
        <div className="lg:w-1/2 ssm:w-fit">
        <img src={Blur4img} alt='' />
        <h1 className="text-5xl md-4">Let’s Connect</h1>
        <hr/>
        <p>
        Contact me today to elevate your brand with intuitive designs that drive meaningful interactions and leave a lasting impact on your users.
        </p>
        </div>
        </div>
        <div className=' flex ssm:flex-col lg:flex-row'>
            <div className='relative rounded-xl overflow-auto 
            p-8 hover:animate-pulse'>
            <div className=' flex items-center gap-3'>
                <button className='bg-white border border-black text-black px-4 py-3 rounded mb-8'>Download CV</button>
            </div>
            </div>
            <div className='relative rounded-xl overflow-auto 
            p-8 hover:animate-pulse'>
            <div className=' flex items-center gap-3'>
                <button className='bg-white border border-black text-black px-4 py-3 rounded mb-8'>Download CV</button>
            </div>
            </div>
            <div className='relative rounded-xl overflow-auto 
            p-8 hover:animate-pulse'>
            <div className=' flex items-center gap-3'>
                <button className='bg-white border border-black text-black px-4 py-3 rounded mb-8'>Download CV</button>
            </div>
            </div>
        </div>
       </div>

  )
}
