import React from "react";

const Presentation = () => {
    return (
        <section className=" mx-auto text-center">
            <h1 className=" pt-[50px] text-5xl text-[#798777]">Verhagen Alejo Fabian</h1>
            <div className=" mt-4 inline-flex justify-center gap-6">
                <div>
                    <a href="https://github.com/AlejoFabianV" target="blank">
                        <img className=" h-6 w-6" src="imgs/icons/gitHubIcon.png" alt="icon Git Hub" />  
                    </a>
                </div>
                <div>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=verhagenalejo@gmail.com" target="blank">
                        <img className=" h-6 w-6" src="imgs/icons/gmailIcon.png" alt="icon Gmail" />  
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/alejo-fabian-verhagen-2a149822b/" target="blank">
                        <img className=" h-6 w-6" src="imgs/icons/linkedinIcon.png" alt="icon linkedin" />
                    </a>
                </div>
                <div>
                    <a href="./Verhagen-Alejo-CV.pdf" target="blank">
                        <img className=" h-6 w-6" src="imgs/icons/cvIcon.png" alt="icon file cv" />    
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Presentation;