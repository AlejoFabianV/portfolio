import React from "react";

const Projects = ({ project }) => {

    return (
        <section className=" w-[400px] my-2 mx-1 bg-[#292727] flex-shrink-0 cursor-pointer border border-l-[#c8e2bf]">
            <div className=" h-[300px] overflow-hidden relative ">
                <a href={project.url} target="blank">
                    <img className=" h-full w-[395px] mx-auto object-cover" src={`/imgs/projects/prueba${project.id}.avif`} alt={project.title} 
                    ></img>
                    <span className="absolute top-3 left-4 bg-[#798777] border border-white text-xs text-white rounded-xl px-4 py-2 font-semibold capitalize">
                        {project.title}
                    </span>
                </a>
            </div>
            <div className=" py-1 px-2 gap-4 text-white">
                <h3 className="text-lg font-bold whitespace-normal">Tecnologias utilizadas: {project.tecnologies}</h3>
                <h3 className=" text-lg font-bold whitespace-normal"> 
                    <a href={project.github} target="blank">Codigo GitHub</a> 
                </h3>
            </div>
        </section>
    )
}

export default Projects;