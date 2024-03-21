'use client';
import React from 'react';
import { useActiveLinkOnScroll } from '@/hooks/useActiveLinkOnScroll';
import Image from "next/image";
import {MdAlternateEmail} from "react-icons/md";
import {FaUser} from "react-icons/fa";

const ContactSection = () => {
    const { activeLink, navigateTo } = useActiveLinkOnScroll(['contacto']);

    return (
        <section id="contacto" className={"pt-20 pb-14 w-full md:container select-none flex items-start justify-center"}>
            <div className={"flex justify-center mb-20"}>
                <div className={"px-9 lg:px-0 lg:w-5/6"}>
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
                                    Soy <a href={"https://www.linkedin.com/in/franjimenez-dev/"} target={"_blank"} className={"rainbow-gradient font-bold"}>Fran Jiménez</a>, <a href={"https://www.juntadeandalucia.es/educacion/portals/web/formacion-profesional-andaluza/fp-grado-superior/detalle-titulo?idTitulo=56"} target={"_blank"}
                                    className={"text-[#FDE68A] font-bold tech-highlights"}>Técnico Superior en Desarrollo de Aplicaciones Web</a>.
                                    Desde que encontré mi primer bug y lo solucioné supe que quería dedicarme a esto:
                                    vivir convirtiendo cada problema en un nuevo aprendizaje.
                                </p>
                                <p className={"mt-3"}>
                                    Tengo una base sólida en
                                    <a href={"https://www.php.net/"} target={"_blank"}
                                       className={"gradient-text font-bold tech-highlights"}> PHP </a>(+<a href={"https://laravel.com/"} target={"_blank"}
                                    className={"gradient-text-inverse font-bold tech-highlights"}>Laravel</a>)
                                    y buenos conocimientos en <a href={"https://es.wikipedia.org/wiki/Base_de_datos_relacional"} target={"_blank"}
                                    className={"text-[#c084fc] font-bold tech-highlights"}>bases de datos relacionales</a> (<a href={"https://www.mysql.com/"} target={"_blank"}
                                    className={"gradient-text font-bold tech-highlights"}>MySQL</a>) y <a href={"https://www.ibm.com/es-es/topics/nosql-databases"} target={"_blank"}
                                    className={"text-[#c084fc] font-bold tech-highlights"}>no relacionales</a> (<a href={"https://www.mongodb.com/"} target={"_blank"}
                                    className={"gradient-text font-bold tech-highlights"}>MongoDB</a>).
                                    Me apasiona el ecosistema de
                                    <a  href={"https://developer.mozilla.org/es/docs/Web/JavaScript"} target={"_blank"}
                                        className={"gradient-text font-bold tech-highlights"}> JavaScript</a>, desde lo mas
                                    asentado
                                    en el sector
                                    como
                                    <a href={"https://nodejs.org/"} target={"_blank"}
                                        className={"gradient-text-inverse tech-highlights font-bold"}> Node.js</a>, <a href={"https://expressjs.com/"} target={"_blank"}
                                    className={"gradient-text tech-highlights font-bold"}> Express</a> o <a href={"https://reactjs.org/"} target={"_blank"}
                                    className={"gradient-text-inverse tech-highlights font-bold"}> React</a> hasta las tecnologías mas
                                    modernas
                                    como
                                    <a href={"https://nextjs.org/"} target={"_blank"}
                                        className={"gradient-text tech-highlights font-bold"}> Next.js</a>.
                                </p>

                                <p className={"mt-3 hidden lg:block"}>
                                    Aunque este es mi stack de confianza, siempre estoy dispuesto a aprender nuevas tecnologías y a adaptarme a lo que se necesite.
                                </p>
                            </div>
                        </div>
                        <div className={"w-full ml-0 md:ml-8 lg:ml-0 md:w-4/12 flex justify-center mt-4 mb-8 md:mb-0 md:mt-0"}>
                            <Image src={"/testing.png"}
                                   className={"rounded-xl full-rounded-border-gradient w-5/6 sm:w-auto sm:h-full lg:w-[250px] lg:h-[307px]"}
                                   alt={"imagen fran jimenez"} width={"250"} height={"368"}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;