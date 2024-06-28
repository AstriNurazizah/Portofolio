import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    let { id } = useParams();
  
    return (
      <div>
        <h2 className='font-bold text-4xl justify-center'>Project Details {id}</h2>
      </div>
    );
  };

export default ProjectDetails