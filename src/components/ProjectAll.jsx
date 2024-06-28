import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import { projectdata } from './projectdata';

const ProjectAll = () => {
  return (
    <>
    <div>
      <h2 className="font-bold text-4xl text-center px-8 py-8">All Projects</h2>
      {/* <input type="text" placeholder="Search..." className="border p-2"/> */}
    </div>

    <div className='gap-1 p-10'>
        {projectdata.map((projectdata) => (
          <div key={projectdata.id} className="bg-neutral-100 flex items-center space-x-10 lg:flex-row 
          ssm:flex-col ssm:space-y-10 mb-10">
            <div className="w-1/2 items-center ssm:w-fit">
              <img src={projectdata.img} alt="" width={600} height={200} className="" />
            </div>
            <div className="lg:w-1/2 ssm:w-fit">
              <h1 className="text-4xl mb-6 font-semibold">{projectdata.nama}</h1>
              <hr/>
              <p className="mb-2">{projectdata.teknologi.join(', ')}</p>
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


export default ProjectAll