import { MdArrowOutward } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import { projectdata } from './projectdata';

const Project = () => {
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
        {projectdata.slice(0, 3).map((projectdata) => (
          <div key={projectdata.id} className="bg-neutral-100 flex items-center space-x-10 lg:flex-row 
          ssm:flex-col ssm:space-y-10 mb-10">
            <div className="w-1/2 items-center ssm:w-fit">
              <img src={projectdata.img} alt="" width={600} height={200} className="" />
            </div>
            <div className="lg:w-1/2 ssm:w-fit">
              <h1 className="text-4xl mb-6 font-semibold">{projectdata.nama}</h1>
              <hr/>
              <p className="mb-2">{projectdata.teknologi.join(' ')}</p>
              <p className="truncate w-100 mb-2">{projectdata.deskripsi}</p>
              <p className="mb-2">{projectdata.demolink}</p>
              <div className="mb-2">
                <Link to={`/project/${projectdata.id}`} className="flex items-center">
                  Project Details <GoArrowRight />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Project;

