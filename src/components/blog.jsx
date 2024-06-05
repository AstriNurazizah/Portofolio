import Project1img from '../assets/project1.jpg';
import Project2img from '../assets/project2.jpg';
import Project3img from '../assets/project3.jpg';

export default function Blog() {
  return (
    <>
        <div className="flex p-10 space-x-10 
    lg:flex-row ssm:flex-col ssm:space-y-10">
            <div className="lg:w-1/2 ssm:w-fit">
            <h1 className="text-5xl">From my blog</h1>
            </div>
            <div className="w-1/2 items-center ssm:w-fit">
                <button className='border border-black text-black px-4 py-3 rounded '>View All</button>
            </div>
        </div>

        <div>
            <div className='grid grid-cols-3 gap-4 p-5'>
                <div className='max-w-md mx-auto bg-neutral-100 rounded-1 
                shadow-md oberflow-hidden md-max-w-2xl hover:animate-pulse'>
                <div className='md:flex'>
                    <div className='p-8'>
                    <div>
                    <img src={Project2img} alt='' />
                    </div>
                    <a href='#' className='text-3xl text-center'>
                     User Interface Design</a>
                    </div>
                </div>
                </div>
                <div className='max-w-md mx-auto bg-neutral-100 rounded-1 
                shadow-md oberflow-hidden md-max-w-2xl hover:animate-pulse'>
                <div className='md:flex'>
                    <div className='p-8'>
                    <div>
                    <img src={Project1img} alt='' />
                    </div>
                    <a href='#' className='text-3xl text-center '>
                     User Interface Design</a>
                    </div>
                </div>
                </div>
                <div className='max-w-md mx-auto bg-neutral-100 rounded-1 
                shadow-md oberflow-hidden md-max-w-2xl hover:animate-pulse'>
                <div className='md:flex'>
                    <div className='p-8'>
                    <div>
                    <img src={Project3img} alt='' />
                    </div>
                    <a href='#' className='text-3xl text-center '>
                     User Interface Design</a>
                    </div>
                </div>
                </div>
            </div>
            <hr/>
        </div>
    </>
  )


}

