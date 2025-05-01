import React from "react";

const Projects = ({ project }) => {

    return (
        <section className=" w-[400px] my-2 mx-1 bg-[#181616] flex-shrink-0 cursor-pointer border border-l-cyan-50">
            <div className=" h-[350px] overflow-hidden relative ">
                <a href={project.url} target="blank">
                    <img className=" h-full w-[395px] mx-auto object-cover" src={`/imgs/projects/prueba${project.id}.avif`} alt={project.title} />
                    <span className="absolute top-3 left-4 bg-gray-100 border border-white text-xs rounded-xl px-4 py-2 font-semibold capitalize">
                        {project.title}
                    </span>
                </a>
            </div>
            <div className=" py-1 px-2 flex gap-4 text-white">
                <h3 className="text-lg font-bold whitespace-normal">Tecnologias utilizadas: {project.tecnologies}</h3>
            </div>
        </section>
    )
}

export default Projects;