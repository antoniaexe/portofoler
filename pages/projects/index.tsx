import { Layout } from '../../components/Layout';
import { useEffect, useState } from 'react';
import { ProjectPreview } from '../../components/ProjectPreview';

const Projects = () => {
  const [projects, setProjects] = useState([]); // αυτο θα το βρισκει κανοντας ενα api call στο server στη βαση δεδομενων
  useEffect(() => {
    fetch('https://api.github.com/repos/antoniaexe/moredesignstudio-owner/contents/projects', {
      method: 'GET',
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <Layout>
      {projects.map(p=>{
        return <ProjectPreview name={p.name} />
        })}
    </Layout>


  );
};

export default Projects;


