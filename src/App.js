import Presentation from './components/pages/presentation';
import AboutMe from './components/pages/aboutMe';
import Projects from './components/pages/projects';
import Technologies from './components/pages/technologies';
import { data_projects } from './data/data_projects';


function App() {

  const projects = [...data_projects]

  return (
    <section className='  bg-[#F8EDE3] min-h-screen p-2'>
      <div className=' bg-[#BDD2B6] border-2 border-[#A2B29F] max-w-[95%] mx-auto' >
        <Presentation />
        <AboutMe />
        <Technologies />

        <div className=' mx-auto my-2 w-[90%]'>
          <h1 className='text-3xl ml-16 my-4 text-[#798777]'>Proyectos</h1>
          <div>
            <div className='flex flex-wrap justify-center '>
              {projects.map((project, index) => (
                <Projects project={project} key={index} />

              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default App;
// bg-[#494343]