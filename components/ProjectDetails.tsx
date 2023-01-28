import { useProject } from '../hooks/useProject';

const ProjectDetails = () => {
  const project = useProject();
  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.mainPhoto} />
      {project.secondaryPhotos.map((photoUrl,index)=>{return (<img src={photoUrl} key={index}/>);})}
      <h2>{project.description}</h2>
      <h3>{project.details}</h3>
    </div>
  );
};
export default ProjectDetails;