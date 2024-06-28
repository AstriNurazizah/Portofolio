import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Project1img from '../assets/project1.jpg';
import Project2img from '../assets/project2.jpg';
import Project3img from '../assets/project3.jpg';
import Project4img from '../assets/project4.jpg';

const ProjectAll = ({ projectId }) => {
  return (
    <>
    <div>
      <h2 className="font-bold text-4xl text-center px-8 py-8">All Projects</h2>
      {/* <input type="text" placeholder="Search..." className="border p-2"/> */}
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
            <div className="">
                <Link to={`/project/${projectId}`} className="flex items-center">
                Project Details <GoArrowRight />
                </Link>
            </div>
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
            <div className="">
                <Link to={`/project/${projectId}`} className="flex items-center">
                Project Details <GoArrowRight />
                </Link>
            </div>
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
            <div className="">
                <Link to={`/project/${projectId}`} className="flex items-center">
                Project Details <GoArrowRight />
                </Link>
            </div>
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
            <div className="">
                <Link to={`/project/${projectId}`} className="flex items-center">
                Project Details <GoArrowRight />
                </Link>
            </div>
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
            <div className="">
                <Link to={`/project/${projectId}`} className="flex items-center">
                Project Details <GoArrowRight />
                </Link>
            </div>
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
            <div className="">
                <Link to={`/project/${projectId}`} className="flex items-center">
                Project Details <GoArrowRight />
                </Link>
            </div>
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
            <div className="">
                <Link to={`/project/${projectId}`} className="flex items-center">
                Project Details <GoArrowRight />
                </Link>
            </div>
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
            <div className="">
                <Link to={`/project/${projectId}`} className="flex items-center">
                Project Details <GoArrowRight />
                </Link>
            </div>
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
            <div className="">
                <Link to={`/project/${projectId}`} className="flex items-center">
                Project Details <GoArrowRight />
                </Link>
            </div>
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
            <div className="">
                <Link to={`/project/${projectId}`} className="flex items-center">
                Project Details <GoArrowRight />
                </Link>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

ProjectAll.propTypes = {
  projectId: PropTypes.string.isRequired, 
};

export default ProjectAll