import { Layout } from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      {<div className='container text-justify'>
        <p>
          <span className='text-sm	font-sans tracking-normal'>
MORE Design Studio is an architecture and interior design office established in 2022 in Athens.
          </span>
        </p>
        <br/>
        <p>
          <span className='text-sm	font-sans tracking-normal'>
Our expertise combines various scales of residential and hospitality projects from conceptual design to permitting and construction documentation.
          </span>
        </p>
        <br/>
        <p>
          <span className='text-sm	font-sans tracking-normal'>
We are fond of exploring every project though a comprehensive design and aesthetic approach to its locality, needs and aspirations,  aiming to create unique spatial experiences.
          </span>
        </p>
      </div>}
    </Layout>
  );
}
