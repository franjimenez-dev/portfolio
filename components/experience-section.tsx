'use client';
import React from 'react';
import {useActiveLinkOnScroll} from "@/hooks/useActiveLinkOnScroll";
import Window from "@/components/ui/window";
import Portfolio from "@/components/portfolio";
import Image from "next/image";
import {FaExternalLinkAlt} from "react-icons/fa";
import Link from "next/link";
import {PiBooks} from "react-icons/pi";
import {FaBriefcase} from "react-icons/fa6";
import {AiFillStar} from "react-icons/ai";

const ExperienceSection = () => {
    const { activeLink, navigateTo } = useActiveLinkOnScroll(['experiencia']);

    return (
        <section id="experiencia" className={"pt-20 w-full overflow-hidden z-10 min-h-screen flex items-start justify-center"}>
            <div className={"relative w-full"}>
                <div className={"flex justify-center"}>
                    <h2
                        className={"text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-mono font-bold gradient-text w-fit flex items-center z-20"}>
                        <PiBooks className={"w-8 h-8 sm:w-9 sm:h-9 md:w-12 md:h-12 lg:w-14 lg:h-14 text-pastel-violet mr-1"}/>
                        Mi Trayectoria
                        <FaBriefcase className={"w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#FDE68A] ml-2"}/>
                    </h2>
                </div>
                <div className={" w-full flex justify-center mt-10 container"}>
                    <div className={"full-rounded-border-gradient my-bg-image"}>
                        <div className={"px-6 sm:px-12 w-full mt-8 lg:mt-10"}>
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
                                Aquí aprendí desde 0 lenguajes como <a href={"https://php.net/"} target={"_blank"}
                                                                       className={"font-bold gradient-text tech-highlights"}>PHP</a> y <a
                                href={"https://ieslaarboleda.es/"} target={"_blank"}
                                className={"font-bold gradient-text-inverse tech-highlights"}>JavaScript</a>, y utilicé
                                por
                                primera vez frameworks
                                como <a href={"https://laravel.com/"} target={"_blank"}
                                        className={"font-bold gradient-text tech-highlights"}>Laravel</a>.
                            </p>
                            <p className={"text-sm mt-4 sm:text-base lg:text-lg font-mono text-pretty"}>
                                Tuve unos profesores excelentes que me prepararon para el mundo laboral, orientádolo
                                siempre
                                a una metodología de trabajo productiva y eficiente a traves del esfuerzo y la
                                dedicación.
                            </p>
                        </div>
                        <div className={"px-6 sm:px-12 w-full my-8 lg:my-10"}>
                            <div className={"flex items-center mb-4"}>
                                <Link href={"https://agiliacenter.com"}
                                      className={"text-2xl lg:text-3xl font-semibold font-mono text-[#FDE68A] flex items-center text-nowrap tech-highlights"}>
                                    Agilia Center <FaExternalLinkAlt className={"w-5 h-5 ml-2"}/>
                                </Link>
                            </div>
                            <p className={"text-sm sm:text-base lg:text-lg font-mono text-pretty"}>
                                Realicé las <a href={"https://agiliacenter.com/practicas/"} target={"_blank"}
                                               className={"font-bold text-pastel-violet tech-highlights"}>prácticas</a> del
                                grado
                                superior de desarrollo web en <a href={"https://agiliacenter.com/"} target={"_blank"}
                                                                 className={"font-bold text-[#FDE68A] tech-highlights"}>Agilia</a>.
                                En esta empresa utilizé por primera vez un framework de <a
                                href={"https://en.wikipedia.org/wiki/Front-end_web_development"} target={"_blank"}
                                className={"font-bold text-pastel-violet tech-highlights "}>frontend</a> como <a
                                href={"https://angular.io/"} target={"_blank"}
                                className={"font-bold gradient-text tech-highlights"}>Angular</a> y di mis primeros
                                pasos en el <a href={"https://en.wikipedia.org/wiki/Front-end_web_development"}
                                               target={"_blank"}
                                               className={"font-bold text-pastel-violet tech-highlights"}>backend</a> de
                                JavaScript con <a href={"https://nodejs.org/"} target={"_blank"}
                                                  className={"font-bold gradient-text tech-highlights"}>Node.js</a>,
                                <a href={"https://expressjs.com/"} target={"_blank"}
                                   className={"font-bold gradient-text-inverse tech-highlights"}> Express.js</a> y <a
                                href={"https://www.mongodb.com/"} target={"_blank"}
                                className={"font-bold gradient-text tech-highlights"}>MongoDB</a>.

                            </p>

                            <p className={"text-sm sm:text-base lg:text-lg font-mono mt-4 text-pretty"}>
                                Durante mi estancia desarrollé una aplicación utilizando el stack <a
                                href={"https://en.wikipedia.org/wiki/MEAN_(software_bundle)"} target={"_blank"}
                                className={"font-bold text-pastel-violet tech-highlights"}>MEAN</a> (MongoDB,
                                Express.js,
                                Angular, Node.js)
                                que permite asignar tareas en un calendario y facilita la comunicación entre compañeros
                                a
                                través de un chat integrado. Para la funcionalidad de chat utilicé <a
                                href={"https://socket.io/"} target={"_blank"}
                                className={"font-bold  gradient-text-inverse tech-highlights"}>Socket.io</a>, y para la
                                autenticación <a href={"https://jwt.io/"} target={"_blank"}
                                                 className={"font-bold gradient-text-inverse tech-highlights"}>JWT</a> (JSON
                                Web Tokens). </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}


export default ExperienceSection;