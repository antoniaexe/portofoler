import { Layout } from '../../components/Layout';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]); // αυτο θα το βρισκει κανοντας ενα api call στο server στη βαση δεδομενων
  useEffect(() => {
    fetch('/api/projects', {
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
      <div>
        <h1>Τα στουντιό σας:</h1>
        {projects.length !== 0 ? (
          <ul>
            {projects.map((project) => {
              return (
                <div>
                  <li>
                    
                    <Link href={`/projects/${project.name}`}>
                      {project.name}
                    </Link>
                  </li>
                </div>
              );
            })}
          </ul>
        ) : (
          <p>Δεν εχετε studio. Πατηστε το κουμπι `δημιουργια νεου studio`</p>
        )}
      </div>
    </Layout>
  );
};

export default Projects;
