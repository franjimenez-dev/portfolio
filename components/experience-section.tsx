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
        <section id="experiencia" className={"my-5 w-full overflow-hidden lg:container z-10"}>
            <div className={"flex justify-center my-10"}>
                <Window title={"Experiencia"} minimizeButton={false} maximizeButton={false} closeButton={false} className={""}>
                    <div className={"p-12 w-full my-bg-image2"}>
                        <div className={"flex items-center mb-4"}>
                            <Link href={"https://agiliacenter.com"}
                                  className={"text-2xl lg:text-3xl font-semibold font-mono text-[#FDE68A] flex items-center text-nowrap"}>
                                Agilia Center <FaExternalLinkAlt className={"w-5 h-5 ml-2"}/>
                            </Link>
                        </div>
                        <p className={"text-sm sm:text-base lg:text-lg font-mono text-pretty"}>
                            Realicé las <span className={"font-bold text-pastel-violet "}>prácticas</span> del grado
                            superior de desarrollo web en <span className={"font-bold text-[#FDE68A]"}>Agilia</span>.
                            En esta empresa utilizé por primera vez un framework de <span
                            className={"font-bold text-pastel-violet "}>frontend</span> como <span
                            className={"font-bold text-[#FDE68A]"}>Angular</span> y di mis primeros
                            pasos en el <span
                            className={"font-bold text-pastel-violet "}>backend</span> de JavaScript con <span
                            className={"font-bold text-[#FDE68A]"}>Node.js</span>,
                            <span
                                className={"font-bold text-[#FDE68A]"}> Express.js</span> y <span
                            className={"font-bold text-[#FDE68A]"}>MongoDB</span>.

                        </p>

                        <p className={"text-sm sm:text-base lg:text-lg font-mono mt-4 text-pretty"}>
                            Durante mi estancia desarrollé una aplicación utilizando el stack <span
                            className={"font-bold text-[#FDE68A]"}>MEAN</span> (MongoDB, Express.js, Angular, Node.js)
                            que permite asignar tareas en un calendario y facilita la comunicación entre compañeros a
                            través de un chat integrado. Para la funcionalidad de chat utilicé <span
                            className={"font-bold text-[#FDE68A]"}>Socket.io</span>, y para la autenticación <span
                            className={"font-bold text-[#FDE68A]"}>JWT</span> (JSON Web Tokens). </p>
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