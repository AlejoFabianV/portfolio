import Presentation from './components/pages/presentation';
import AboutMe from './components/pages/aboutMe';
import Projects from './components/pages/projects';
import { data_projects } from './data/data_projects';


function App() {

  const projects = [...data_projects] //duplicado para que sea infinito


  return (
    <section className=' bg-[#494343] min-h-screen'>
      <Presentation />
      <AboutMe />
      
      <div className=' mx-auto my-2 w-[90%]'>
        <h1 className='text-3xl ml-16 my-4'>Proyectos</h1>
        <div>
          <div className='flex flex-wrap justify-center '>
            {projects.map((project, index) => (
              <Projects project={project} key={index} />
              
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
