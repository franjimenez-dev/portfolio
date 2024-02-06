'use client';
import React from 'react';
import {useActiveLinkOnScroll} from "@/hooks/useActiveLinkOnScroll";
import Image from "next/image";

const ProyectsSection = () => {
    const { activeLink, navigateTo } = useActiveLinkOnScroll(['inicio']);

    return (
    <header id="inicio" title="Inicio" className={"my-5 pt-16 sm:pt-36"}>
        <div className=" sm:flex-none mx-2 sm:mx-8">
            <div className="hidden sm:block  bg-[#FDE68A] shadow-2xl shadow-[#FDE68A]"
                 style={{
                     float: 'left',
                     shapeOutside: 'circle(50%)',
                     borderRadius: '50%',
                     marginRight: '3rem',
                     overflow: 'hidden'
                 }}>
                <Image
                    src="/owner.jpg"
                    alt="Avatar"
                    width={900}
                    height={900}
                    className="w-[200px] md:w-[275px] h-[200px] md:h-[275px] rounded-full border-4 bg-[#FDE68A] border-[#FDE68A] "
                />
            </div>
            <div className="">
                <div className={"hidden sm:visible sm:block "}>
                    <h1 className="text-4xl md:text-5xl">
                        <span className="text-[#FDE68A] font-bold font-mono whitespace-nowrap"> Fran Jiménez</span>
                    </h1>
                    <h2 className="flex-shrink text-2xl md:text-3xl my-2 font-semibold font-mono whitespace-nowrap"> 🚀
                        Desarrollador web
                    </h2>
                </div>
                <div className={"visible sm:hidden flex justify-start items-center sm:flex-none"}>
                    <div className="mx-0 sm:mx-16 w-20 h-20">
                        <Image
                            src="/owner.jpg"
                            alt="Avatar"
                            width={75}
                            height={75}
                            className="rounded-full border-4 bg-[#FDE68A] border-[#FDE68A] "
                        />
                    </div>
                    <div className={"visible sm:hidden"}>
                        <h1 className="text-4xl sm:text-5xl">
                            <span className="text-[#FDE68A] font-bold font-mono ml-2 whitespace-nowrap"> Fran Jiménez</span>
                        </h1>
                        <h2 className="flex flex-shrink text-xl sm:text-3xl my-2 font-semibold font-mono whitespace-nowrap"> 🚀
                            Desarrollador web
                        </h2>
                    </div>
                </div>
                <p>
                    {/*<span className={"text-[#FDE68A] font-semibold"}>PHP</span>*/}
                    Inicié mi trayectoria en el <span className={"text-[#FDE68A] font-bold"}>Grado Superior en Desarrollo de Aplicaciones Web</span>.
                    Desde siempre me he caracterizado por un fuerte sentido de la responsabilidad y una gran curiosidad que me guía en busca de nuevos retos. Tengo una base sólida en
                    <span className={"text-[#FDE68A] font-bold"}> PHP </span>(<span className={"text-[#FDE68A] font-bold"}>+Laravel</span>)
                    y buenos conocimientos en <span className={"text-[#FDE68A] font-bold"}>bases de datos relacionales</span> (<span className={"text-[#FDE68A] font-bold"}>MySQL</span>) y <span className={"text-[#FDE68A] font-bold"}>no relacionales</span> (<span className={"text-[#FDE68A] font-bold"}>MongoDB</span>).
                </p>
                <p className={"pt-3"}>
                    Me apasiona el ecosistema de
                    <span className={"text-[#FDE68A] font-bold"}> JavaScript</span>, desde lo mas asentado en el sector
                    como
                    <span className={"text-[#FDE68A] font-bold"}> Node.js</span>, <span
                    className={"text-[#FDE68A] font-bold"}> Express</span> o <span
                    className={"text-[#FDE68A] font-bold"}> React</span> hasta las tecnologías mas modernas como
                    <span className={"text-[#FDE68A] font-bold"}> Next.js</span>. Considero esencial aprovechar toda
                    tecnología que nos ayude a ser más productivos y eficientes,
                    por eso he incorporado a mi stack de trabajo herramientas de <span
                    className={"text-[#FDE68A] font-bold"}> Inteligencia Artificial</span> (<span
                    className={"text-[#FDE68A] font-bold"}>GitHub Copilot</span>,
                    <span className={"text-[#FDE68A] font-bold"}> ChatGPT</span>).
                    <span className={""}> En este mundo
                        tan cambiante siempre hay que
                        estar dispuesto a aprender y a adaptarse a las nuevas tecnologías.
                    </span>
                </p>
            </div>
            <div className="clear-both"></div>
        </div>
        <div>
            <h1 className={"text-4xl text-center mt-12 font-semibold font-mono"}>
                Tecnologías
            </h1>
            <div className={"shadow shadow-[#FDE68A] rounded-2xl p-3"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum esse fugiat, fugit, laboriosam laborum necessitatibus nisi nulla officia placeat quod reiciendis sunt tempore vero voluptate. A assumenda culpa quidem!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum esse fugiat, fugit, laboriosam laborum necessitatibus nisi nulla officia placeat quod reiciendis sunt tempore vero voluptate. A assumenda culpa quidem!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum esse fugiat, fugit, laboriosam laborum necessitatibus nisi nulla officia placeat quod reiciendis sunt tempore vero voluptate. A assumenda culpa quidem!
                Lorem ipsum dol                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum esse fugiat, fugit, laboriosam laborum necessitatibus nisi nulla officia placeat quod reiciendis sunt tempore vero voluptate. A assumenda culpa quidem!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum esse fugiat, fugit, laboriosam laborum necessitatibus nisi nulla officia placeat quod reiciendis sunt tempore vero voluptate. A assumenda culpa quidem!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum esse fugiat, fugit, laboriosam laborum necessitatibus nisi nulla officia placeat quod reiciendis sunt tempore vero voluptate. A assumenda culpa quidem!
                or sit amet, consectetur adipisicing elit. Accusamus earum esse fugiat, fugit, laboriosam laborum necessitatibus nisi nulla officia placeat quod reiciendis sunt tempore vero voluptate. A assumenda culpa quidem!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum esse fugiat, fugit, laboriosam laborum necessitatibus nisi nulla officia placeat quod reiciendis sunt tempore vero voluptate. A assumenda culpa quidem!
            </div>
        </div>
    </header>
    )
        ;
};

export default ProyectsSection;