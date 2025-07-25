import React from "react";


const Technologies = () => {
    return (
        <section className=" max-w-[82%] mx-auto">
            <h1 className="text-3xl text-left my-4 text-[#798777]">Tecnologias</h1>
            <div className="flex flex-wrap px-18 justify-around"> 
                <div className="p-1">
                    <h2 className="pb-3 text-[#798777]">Lenguajes de programacion: </h2>
                    <p>
                        <img src="https://skillicons.dev/icons?i=cs,js,ts,react,nodejs,express,nestjs" />
                    </p>
                </div>
                <div className="p-1">
                    <h2 className="pb-3 text-[#798777]">Bases de datos: </h2> 
                    <p>
                        <img src="https://skillicons.dev/icons?i=mysql,mongodb,supabase" />
                    </p>
                </div>
                <div className="p-1">
                    <h2 className="pb-3 text-[#798777]">Control de versiones: </h2>
                    <p>
                        <img src="https://skillicons.dev/icons?i=git,github" />
                    </p>
                </div>
                <div className="p-1">
                    <h2 className="pb-3 text-[#798777]">Herramientas de pruebas: </h2>
                    <p>
                        <img src="https://skillicons.dev/icons?i=postman" />
                    </p>
                </div>
                <div className="p-1">
                    <h2 className="pb-3 text-[#798777]">Hojas de estilo: </h2>
                    <p>
                        <img src="https://skillicons.dev/icons?i=css,tailwind,bootstrap" />
                    </p>
                </div>
            </div>
            
            {/* <p align="center">
                <img className="w-[700px]" src="https://skillicons.dev/icons?i=git,github,html,css,tailwind,cs,js,nodejs,ts,react,nestjs,nextjs,mysql,mongodb,postgres,supabase,postman&perline=9" />
            </p> */}
        </section>
    )
}

export default Technologies;