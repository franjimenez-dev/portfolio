'use client';
import React from 'react';
import {useActiveLinkOnScroll} from "@/hooks/useActiveLinkOnScroll";
import Window from "@/components/ui/window";

const WorksSection = () => {
    const { activeLink, navigateTo } = useActiveLinkOnScroll(['trabajos']);

    return (
        <section id="trabajos" title="Trabajos" className={"my-5 pt-12 w-full"}>

            <div className={"flex justify-center mt-10"}>
                <Window title={"Trabajos.js"}>
                    <div className={"p-12"}>
                        <h2 className={"text-3xl font-semibold font-mono text-[#FDE68A] mb-4"}>
                            Trabajos
                        </h2>
                        <p className={"text-xl font-mono"}>
                            He trabajado en proyectos de desarrollo web, aplicaciones móviles y
                            aplicaciones de escritorio. He trabajado con tecnologías como React, Next.js,
                            TailwindCSS, Node.js, Express.js, MongoDB, MySQL, PostgreSQL, PHP, Laravel, entre
                            otras.

                            <br/>
                            <br/>
                        </p>

                        <p className={"text-xl font-mono"}>
                            Algunos de los proyectos en los que he trabajado son:
                        </p>

                        <ul className={"space-y-4 ml-4 mt-4"}>
                            <li>
                                <a href="https://www.mercurio.com" target={"_blank"}> 🚀 Mercurio </a>
                            </li>
                            <li>
                                <a href="https://www.venus.com" target={"_blank"}> 🌌 Venus </a>
                            </li>
                            <li>
                                <a href="https://www.marte.com" target={"_blank"}> 🛸 Marte </a>
                            </li>
                            <li>
                                <a href="https://www.jupiter.com" target={"_blank"}> 🪐 Júpiter </a>
                            </li>
                            <li>
                                <a href="https://www.saturno.com" target={"_blank"}> 💫 Saturno </a>
                            </li>
                            <li>
                                <a href="https://www.urano.com" target={"_blank"}> 🌠 Urano </a>
                            </li>
                            <li>
                                <a href="https://www.neptuno.com" target={"_blank"}> 🌙 Neptuno </a>
                            </li>
                            <li>
                                <a href="https://www.pluton.com" target={"_blank"}> ☄ Plutón ️</a>
                            </li>
                            <li>
                                <a href="https://www.tierra.com" target={"_blank"}> 🌍 Tierra </a>
                            </li>
                            <li>
                                <a href="https://www.sol.com" target={"_blank"}> ☀ Sol ️</a>
                            </li>

                        </ul>
                    </div>
                </Window>
            </div>
        </section>
    );
};

export default WorksSection;