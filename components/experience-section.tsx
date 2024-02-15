'use client';
import React from 'react';
import {useActiveLinkOnScroll} from "@/hooks/useActiveLinkOnScroll";
import Window from "@/components/ui/window";
import Portfolio from "@/components/portfolio";

const ExperienceSection = () => {
    const { activeLink, navigateTo } = useActiveLinkOnScroll(['experiencia']);

    return (
        <section id="experiencia" title="Experiencia" className={"my-5 pt-12 w-full "}>

            <div className={"flex justify-center mt-10"}>
                <Window title={"Experiencia.php"}>
                    <div className={"p-12"}>
                        <h2 className={"text-3xl font-semibold font-mono text-[#FDE68A] mb-4"}>
                            Experiencia
                        </h2>
                        <p className={"text-xl font-mono"}>
                            He trabajado en proyectos de desarrollo web, aplicaciones móviles y
                            aplicaciones de escritorio. He trabajado con tecnologías como React, Next.js,
                            TailwindCSS, Node.js, Express.js, MongoDB, MySQL, PostgreSQL, PHP, Laravel, entre
                            otras.

                        </p>

                        <p className={"text-xl font-mono mt-4"}>
                            También he trabajado con herramientas de desarrollo como GitHub, AWS S3, GitHub Copilot,
                            ChatGPT, WebStorm, Vercel, entre otras.

                            Me he desempeñado como desarrollador full-stack, desarrollador front-end, desarrollador
                            back-end, desarrollador móvil, desarrollador de software, entre otros roles.
                        </p>
                    </div>

                    <div className={"flex justify-center my-10 w-full"}>
                        <Portfolio/>
                    </div>
                </Window>
            </div>
        </section>
);
}


export default ExperienceSection;