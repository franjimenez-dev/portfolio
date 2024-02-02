'use client';
import React, {useEffect, useRef, useState} from "react";
import { useActiveLinkOnScroll } from "@/hooks/useActiveLinkOnScroll";

const Navbar = () => {
    const { activeLink, navigateTo } = useActiveLinkOnScroll(['sobreMi', 'experiencia', 'proyectos']);
    const [clicked, setClicked] = useState(false)
    const linkRefs: { [ key: string]: React.MutableRefObject<null>} = {
        sobreMi: useRef(null),
        experiencia: useRef(null),
        proyectos: useRef(null),
    };

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
        e.preventDefault();
        setClicked(true);
        navigateTo(link);

        const lineElement = document.querySelector('.line') as HTMLElement;
        const linkElement = linkRefs[link].current as unknown as HTMLElement;

        if (linkElement) {
            const linePosition = linkElement.offsetLeft;
            const lineWidth = linkElement.offsetWidth;

            lineElement.style.setProperty('left', `${linePosition}px`);
            lineElement.style.setProperty('width', `${lineWidth}px`);
        }
    };

    useEffect(() => {
        if (clicked) {
            setClicked(false);
            return;
        }

        const lineElement = document.querySelector('.line') as HTMLElement;
        const handleActiveLinkChange = () => {
            const activeLinkRef = linkRefs[activeLink].current as unknown as HTMLElement;

            if (activeLinkRef) {
                const linePosition = activeLinkRef.offsetLeft;
                const lineWidth = activeLinkRef.offsetWidth;

                lineElement.style.setProperty('left', `${linePosition}px`);
                lineElement.style.setProperty('width', `${lineWidth}px`);
            }
        };

        handleActiveLinkChange();

        return () => {
            window.removeEventListener('scroll', handleActiveLinkChange);
        };
    }, [activeLink]);

    return (
        <div className="flex justify-end sticky top-12 inset-x-0 text-xl text-white rounded-full">
            <nav
                className="rounded-full border flex h-[3rem] z-40 w-fit items-center justify-end backdrop-blur-lg backdrop-saturate-150 space-x-8 p-4 absolute top-0 right-20">
                <div className="line"></div>
                <a href="#sobreMi" onClick={(e) => handleLinkClick(e, 'sobreMi')}
                   ref={linkRefs.sobreMi}
                   className={activeLink === 'sobreMi' ? 'active' : ''}>Sobre mí</a>
                <a href="#experiencia" onClick={(e) => handleLinkClick(e, 'experiencia')}
                   ref={linkRefs.experiencia}
                   className={activeLink === 'experiencia' ? 'active' : ''}>Experiencia</a>
                <a href="#proyectos" onClick={(e) => handleLinkClick(e, 'proyectos')}
                   ref={linkRefs.proyectos}
                   className={activeLink === 'proyectos' ? 'active' : ''}>Proyectos</a>
            </nav>
        </div>
    )
}

export default Navbar;