'use client';
import React from 'react';
import { useActiveLinkOnScroll } from '@/hooks/useActiveLinkOnScroll';
import Window from "@/components/ui/window";
import Image from "next/image";
import {AiFillStar} from "react-icons/ai";
import {MdAlternateEmail} from "react-icons/md";
import {PersonIcon} from "@radix-ui/react-icons";
import {CgUser} from "react-icons/cg";
import {FaUser} from "react-icons/fa";
import Footer from "@/components/footer";

const ContactSection = () => {
    const { activeLink, navigateTo } = useActiveLinkOnScroll(['contacto']);

    return (
        <section id="contacto" className={"my-5  w-full md:container"}>
            <div className={"flex justify-center mt-10 mb-20"}>
                <div className={"px-8 lg:px-0 lg:w-5/6"}>
                    <div className={"flex justify-center"}>
                        <h2 className={"text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-mono font-bold gradient-text w-fit flex items-center"}>
                            <FaUser className={"w-7 h-7 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-pastel-violet mr-2"}/>
                            Sobre mí
                            <MdAlternateEmail className={"w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16  text-[#FDE68A] ml-1"}/>
                        </h2>
                    </div>
                    <div className={"flex flex-col-reverse md:flex-row justify-center mt-10"}>
                        <div className={"w-full md:w-8/12 flex justify-center items-center font-mono text-sm sm:text-base lg:text-lg text-pretty"}>
                            <div>
                                <p>
                                    Inicié mi trayectoria en el <span className={"text-[#FDE68A] font-bold"}>Grado Superior en Desarrollo de Aplicaciones Web</span>.
                                    Desde que encontré mi primer bug y lo solucioné supe que quería dedicarme a esto:
                                    vivir convirtiendo cada problema en un nuevo aprendizaje.
                                </p>
                                <p className={"mt-3"}>
                                    Tengo una base sólida en
                                    <span className={"text-[#FDE68A] font-bold"}> PHP </span>(<span
                                    className={"text-[#FDE68A] font-bold"}>+Laravel</span>)
                                    y buenos conocimientos en <span
                                    className={"text-[#FDE68A] font-bold"}>bases de datos relacionales</span> (<span
                                    className={"text-[#FDE68A] font-bold"}>MySQL</span>) y <span
                                    className={"text-[#FDE68A] font-bold"}>no relacionales</span> (<span
                                    className={"text-[#FDE68A] font-bold"}>MongoDB</span>).
                                    Me apasiona el ecosistema de
                                    <span className={"text-[#FDE68A] font-bold"}> JavaScript</span>, desde lo mas
                                    asentado
                                    en el sector
                                    como
                                    <span className={"text-[#FDE68A] font-bold"}> Node.js</span>, <span
                                    className={"text-[#FDE68A] font-bold"}> Express</span> o <span
                                    className={"text-[#FDE68A] font-bold"}> React</span> hasta las tecnologías mas
                                    modernas
                                    como
                                    <span className={"text-[#FDE68A] font-bold"}> Next.js</span>.
                                </p>

                                <p className={"mt-3 hidden lg:block"}>
                                    Aunque este es mi stack de confianza, siempre estoy dispuesto a aprender nuevas tecnologías y a adaptarme a lo que se necesite.
                                </p>
                            </div>
                        </div>
                        <div className={"w-full ml-0 md:ml-8 lg:ml-0 md:w-4/12 flex justify-center mt-4 mb-8 md:mb-0 md:mt-0"}>
                            <Image src={"/testing.png"}
                                   className={"rounded-xl full-rounded-border-gradient w-5/6 sm:w-2/3 md:w-full lg:w-[250px] lg:h-[307px]"}
                                   alt={"imagen fran jimenez"} width={"250"} height={"368"}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;