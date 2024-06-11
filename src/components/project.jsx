import { MdArrowOutward } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import Project1img from '../assets/project1.jpg';
import Project2img from '../assets/project2.jpg';
import Project3img from '../assets/project3.jpg';
import Project4img from '../assets/project4.jpg';

export default function project() {
  return (
    <>
        <div className="flex p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 items-center w-full" id="project">
            <div className="lg:w-1/2 w-full flex lg:justify-start justify-center lg:items-center">
            <h1 className="text-5xl">Featured Projects</h1>
            </div>
            <div className="lg:w-1/2 ssm:w-fit flex justify-end">
                <button className='flex items-center border border-black text-black px-8 py-3 '>
                <Link to="/projectall" className="flex items-center">
                    View All
                    <MdArrowOutward/>
                </Link>
                </button>
            </div>
        </div>

        <div className='gap-1 p-10'>
        <div className="bg-neutral-100 flex items-center space-x-10 
    lg:flex-row ssm:flex-col ssm:space-y-10 mb-10">
            <div className="w-1/2 items-center ssm:w-fit">
                <img src={Project1img} alt="" width={600} height={200}
                    className=""
                />
            </div>
            <div className="lg:w-1/2 ssm:w-fit">
            <h1 className="text-4xl">IKEA – Designing dashboard for supply chain management</h1>
            <hr/>
            <p>
            In a world driven by constant change and innovation, the concept of lifelong learning has become more critical than ever. As someone committed…
            </p>
            <a href='#' className="flex items-center ">Project Details <GoArrowRight /></a>
            </div>
        </div>
        <div className="bg-neutral-100 flex items-center space-x-10 
    lg:flex-row ssm:flex-col ssm:space-y-10 mb-10">
            <div className="w-1/2 items-center ssm:w-fit">
                <img src={Project2img} alt="" width={600} height={200}
                    className=""
                />
            </div>
            <div className="lg:w-1/2 ssm:w-fit">
            <h1 className="text-4xl">IKEA – Designing dashboard for supply chain management</h1>
            <hr/>
            <p>
            In a world driven by constant change and innovation, the concept of lifelong learning has become more critical than ever. As someone committed…
            </p>
            <a href='#' className="flex items-center ">Project Details <GoArrowRight /></a>
            </div>
        </div>
        <div className="bg-neutral-100 flex items-center space-x-10 
    lg:flex-row ssm:flex-col ssm:space-y-10 mb-10">
            <div className="w-1/2 items-center ssm:w-fit">
                <img src={Project3img} alt="" width={600} height={200}
                    className=""
                />
            </div>
            <div className="lg:w-1/2 ssm:w-fit">
            <h1 className="text-4xl">IKEA – Designing dashboard for supply chain management</h1>
            <hr/>
            <p>
            In a world driven by constant change and innovation, the concept of lifelong learning has become more critical than ever. As someone committed…
            </p>
            <a href='#' className="flex items-center ">Project Details <GoArrowRight /></a>
            </div>
        </div>
        <div className="bg-neutral-100 flex items-center space-x-10 
    lg:flex-row ssm:flex-col ssm:space-y-10 mb-10">
            <div className="w-1/2 items-center ssm:w-fit">
                <img src={Project4img} alt="" width={600} height={200}
                    className=""
                />
            </div>
            <div className="lg:w-1/2 ssm:w-fit">
            <h1 className="text-4xl">IKEA – Designing dashboard for supply chain management</h1>
            <hr/>
            <p>
            In a world driven by constant change and innovation, the concept of lifelong learning has become more critical than ever. As someone committed…
            </p>
            <a href='#' className="flex items-center ">Project Details <GoArrowRight /></a>
            </div>
        </div>
        </div>
    </>
  )
}

