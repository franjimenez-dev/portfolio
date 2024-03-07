'use client';
import React from 'react';
import {useActiveLinkOnScroll} from "@/hooks/useActiveLinkOnScroll";
import Window from "@/components/ui/window";
import Portfolio from "@/components/portfolio";
import Image from "next/image";
import {FaExternalLinkAlt} from "react-icons/fa";
import Link from "next/link";

const ExperienceSection = () => {
    const { activeLink, navigateTo } = useActiveLinkOnScroll(['experiencia']);

    return (
        <section id="experiencia" className={"my-5 w-full overflow-hidden lg:container z-10 min-h-screen flex items-center justify-center"}>
            <div className={"flex justify-center my-10"}>
                <Window title={"Estudios y experiencia"} minimizeButton={false} maximizeButton={false}
                        closeButton={false} className={""}>
                    <div className={"px-6 sm:px-12 w-full my-bg-image2 mt-6"}>
                        <div className={"flex items-center mb-4"}>
                            <Link
                                href={"https://www.juntadeandalucia.es/educacion/portals/web/formacion-profesional-andaluza/fp-grado-superior/detalle-titulo?idTitulo=56"}
                                className={"text-2xl lg:text-3xl font-semibold font-mono text-[#FDE68A] flex items-center text-pretty  tech-highlights "}>
                                Técnico superior en Desarrollo de Aplicaciones Web
                            </Link>
                        </div>
                        <p className={"text-sm sm:text-base lg:text-lg font-mono text-pretty"}>
                            Cursé el grado superior de <a
                            href={"https://www.juntadeandalucia.es/educacion/portals/web/formacion-profesional-andaluza/fp-grado-superior/detalle-titulo?idTitulo=56"}
                            target={"_blank"}
                            className={"font-bold text-pastel-violet tech-highlights"}>D.A.W.</a> en <a
                            href={"https://ieslaarboleda.es/"} target={"_blank"}
                            className={"font-bold text-[#FDE68A] tech-highlights"}>I.E.S. La Arboleda</a>.
                            Aquí aprendí desde 0 lenguajes como <a href={"https://php.net/"} target={"_blank"} className={"font-bold gradient-text tech-highlights"}>PHP</a> y <a href={"https://ieslaarboleda.es/"} target={"_blank"} className={"font-bold gradient-text-inverse tech-highlights"}>JavaScript</a>, y utilicé por primera vez frameworks
                            como <a href={"https://laravel.com/"} target={"_blank"} className={"font-bold gradient-text tech-highlights"}>Laravel</a>.
                        </p>
                        <p className={"text-sm mt-4 sm:text-base lg:text-lg font-mono text-pretty"}>
                        Tuve unos profesores excelentes que me prepararon para el mundo laboral, orientádolo siempre a una metodología de trabajo productiva y eficiente a traves del esfuerzo y la dedicación.
                        </p>
                    </div>
                    <div className={"px-6 sm:px-12 w-full my-bg-image2 my-6"}>
                        <div className={"flex items-center mb-4"}>
                            <Link href={"https://agiliacenter.com"}
                                  className={"text-2xl lg:text-3xl font-semibold font-mono text-[#FDE68A] flex items-center text-nowrap tech-highlights"}>
                                Agilia Center <FaExternalLinkAlt className={"w-5 h-5 ml-2"}/>
                            </Link>
                        </div>
                        <p className={"text-sm sm:text-base lg:text-lg font-mono text-pretty"}>
                        Realicé las <a href={"https://agiliacenter.com/practicas/"} target={"_blank"} className={"font-bold text-pastel-violet tech-highlights"}>prácticas</a> del grado
                            superior de desarrollo web en <a href={"https://agiliacenter.com/"} target={"_blank"} className={"font-bold text-[#FDE68A] tech-highlights"}>Agilia</a>.
                            En esta empresa utilizé por primera vez un framework de <a href={"https://en.wikipedia.org/wiki/Front-end_web_development"} target={"_blank"}
                            className={"font-bold text-pastel-violet tech-highlights "}>frontend</a> como <a href={"https://angular.io/"} target={"_blank"}
                            className={"font-bold gradient-text tech-highlights"}>Angular</a> y di mis primeros
                            pasos en el <a href={"https://en.wikipedia.org/wiki/Front-end_web_development"} target={"_blank"}
                            className={"font-bold text-pastel-violet tech-highlights"}>backend</a> de JavaScript con <a href={"https://nodejs.org/"} target={"_blank"}
                            className={"font-bold gradient-text tech-highlights"}>Node.js</a>,
                            <a href={"https://expressjs.com/"} target={"_blank"}
                                className={"font-bold gradient-text-inverse tech-highlights"}> Express.js</a> y <a href={"https://www.mongodb.com/"} target={"_blank"}
                            className={"font-bold gradient-text tech-highlights"}>MongoDB</a>.

                        </p>

                        <p className={"text-sm sm:text-base lg:text-lg font-mono mt-4 text-pretty"}>
                            Durante mi estancia desarrollé una aplicación utilizando el stack <a href={"https://en.wikipedia.org/wiki/MEAN_(software_bundle)"} target={"_blank"}
                            className={"font-bold text-pastel-violet tech-highlights"}>MEAN</a> (MongoDB, Express.js, Angular, Node.js)
                            que permite asignar tareas en un calendario y facilita la comunicación entre compañeros a
                            través de un chat integrado. Para la funcionalidad de chat utilicé <a href={"https://socket.io/"} target={"_blank"}
                            className={"font-bold  gradient-text-inverse tech-highlights"}>Socket.io</a>, y para la autenticación <a href={"https://jwt.io/"} target={"_blank"}
                            className={"font-bold gradient-text-inverse tech-highlights"}>JWT</a> (JSON Web Tokens). </p>
                    </div>

                </Window>
            </div>
            {/*<div className={"flex justify-center my-10 w-full"}>*/}
            {/*    <Portfolio/>*/}
            {/*</div>*/}
        </section>
    );
}


export default ExperienceSection;