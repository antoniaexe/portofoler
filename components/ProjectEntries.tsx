import { useProjects } from '../hooks/useProjects';
import ProjectEntry from './ProjectEntry';

export const ProjectEntries = () => {
  const projects = useProjects(); 
  return projects.map((project)=>{
    return (
      <ProjectEntry
        href={`/projects/${project.id}`}
        photo={project.mainPhoto}
        title={project.title}
        key={project.id}/>
    );
  });};
