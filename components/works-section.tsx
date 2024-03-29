'use client';
import React from 'react';
import {useActiveLinkOnScroll} from "@/hooks/useActiveLinkOnScroll";
import NewProject from "@/components/ui/project";
import {timewarp} from "@/lib/data";
import {metazoa} from "@/lib/data";
import {AiFillStar} from "react-icons/ai";

const WorksSection = () => {
    const { activeLink, navigateTo } = useActiveLinkOnScroll(['trabajos']);

    return (
        <section id="trabajos"  className={"py-20 w-full z-20 relative min-h-screen flex justify-center items-start select-none"}>
            <div className={"relative w-full"}>
                <div className={"flex justify-center"}>
                    <h2 className={"text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-mono font-bold gradient-text w-fit flex items-center z-20 "}>
                        <AiFillStar className={"w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-pastel-violet mr-2"}/>
                        Mis proyectos
                        <AiFillStar className={"w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-[#FDE68A] ml-2"}/>
                    </h2>
                </div>
                <div className={"relative"}>
                    <NewProject project={timewarp} type={1}/>
                </div>
                <div className={"relative"}>
                    <NewProject project={metazoa} type={2}/>
                </div>
            </div>
        </section>
    );

};

export default WorksSection;