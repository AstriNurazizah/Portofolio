import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    let { id } = useParams();
  
    return (
      <div>
        <h2 className='font-bold text-4xl text-center px-4 py-4'>Project Details {id}</h2>
      </div>
    );
  };

export default ProjectDetails