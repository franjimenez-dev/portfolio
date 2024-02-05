'use client';
import React from 'react';
import Image from 'next/image';
import {useActiveLinkOnScroll} from "@/hooks/useActiveLinkOnScroll";

const ProyectsSection = () => {
    const { activeLink, navigateTo } = useActiveLinkOnScroll(['estudios']);

    return (
        <section id="estudios" title="Estudios" className="my-5 pt-12">
            <h1> Estudios </h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam atque autem cum dignissimos dolore doloremque dolores id illum incidunt iste iure molestias nihil, obcaecati officia quod repellendus totam vel? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci culpa debitis, dolor, ducimus explicabo fuga fugiat fugit impedit libero nemo nobis quaerat quo recusandae repellendus soluta sunt ut voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam illo libero nobis quas reprehenderit temporibus, veniam. Aliquid amet beatae culpa eveniet facere id maiores, minima nemo ut veritatis? Recusandae.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam atque autem cum dignissimos dolore doloremque dolores id illum incidunt iste iure molestias nihil, obcaecati officia quod repellendus totam vel? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci culpa debitis, dolor, ducimus explicabo fuga fugiat fugit impedit libero nemo nobis quaerat quo recusandae repellendus soluta sunt ut voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam illo libero nobis quas reprehenderit temporibus, veniam. Aliquid amet beatae culpa eveniet facere id maiores, minima nemo ut veritatis? Recusandae.
        </section>
    );
};

export default ProyectsSection;