export const ProjectEntry = ({href,title,photo}:{href: string, title: string, photo:string}) => {
  return (
    <a href={href}>{title}
      <img src={photo}/>
    </a>
  );
};
export default ProjectEntry;