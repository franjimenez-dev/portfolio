'use client';
import React from 'react';
import {useActiveLinkOnScroll} from "@/hooks/useActiveLinkOnScroll";
import NewProject from "@/components/ui/proyect";
import {timewarp} from "@/lib/data";
import {metazoa} from "@/lib/data";

const WorksSection = () => {
    const { activeLink, navigateTo } = useActiveLinkOnScroll(['trabajos']);

    return (
        <section id="trabajos" title="Trabajos" className={"my-5 pt-12 w-full"}>
            <div className={"relative"}>
                <NewProject project={timewarp}/>
            </div>
        </section>
    );
};

export default WorksSection;