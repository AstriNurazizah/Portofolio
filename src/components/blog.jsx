import { MdArrowOutward } from "react-icons/md";
import Project1img from '../assets/project1.jpg';
import Project2img from '../assets/project2.jpg';

export default function Blog() {
  return (
    <>
        <div className="flex p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 items-center w-full ">
            <div className="lg:w-1/2 w-full flex lg:justify-start justify-center lg:items-center ">
            <h1 className="text-5xl">From my blog</h1>
            </div>
            <div className="lg:w-1/2 ssm:w-fit flex justify-end">
                <button className='flex items-center border border-black text-black px-8 py-3 '>View All<MdArrowOutward/></button>
            </div>
        </div>

        <div>
            <div className='grid grid-cols-2 gap-4 p-5 mb-10'>
            <div className="bg-neutral-100 flex items-center space-x-10 
    lg:flex-row ssm:flex-col ssm:space-y-10 mb-12">
            <div className="w-1/2 items-center ssm:w-fit">
                <img src={Project1img} alt="" width={300} height={200}
                    className=""
                />
            </div>
            <div className="lg:w-1/2 ssm:w-fit">
            <h1 className="text-3xl">IKEA – Designing dashboard for supply chain management</h1>
            <hr/>
            </div>
        </div>
        <div className="bg-neutral-100 flex items-center space-x-10 
    lg:flex-row ssm:flex-col ssm:space-y-10 mb-12">
            <div className="w-1/2 items-center ssm:w-fit">
                <img src={Project2img} alt="" width={300} height={200}
                    className=""
                />
            </div>
            <div className="lg:w-1/2 ssm:w-fit">
            <h1 className="text-3xl">IKEA – Designing dashboard for supply chain management</h1>
            <hr/>
            </div>
        </div>
            </div>
            <hr/>
        </div>
    </>
  )
}

