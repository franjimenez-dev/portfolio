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

        if (linkRefs[link]) {
            const lineElement = document.querySelector('.line') as HTMLElement;
            const linkElement = linkRefs[link].current as unknown as HTMLElement;
            const parentElement = linkElement?.parentElement as HTMLElement;

            if (linkElement && parentElement) {
                const linkRect = linkElement.getBoundingClientRect();
                const parentRect = parentElement.getBoundingClientRect();
                const linePosition = linkRect.left - parentRect.left;
                const lineWidth = linkRect.width;

                lineElement.style.setProperty('left', `${linePosition}px`);
                lineElement.style.setProperty('width', `${lineWidth}px`);
            }
        }
    };

    useEffect(() => {
        if (clicked) {
            setClicked(false);
            return;
        }

        const lineElement = document.querySelector('.line') as HTMLElement;
        const handleActiveLinkChange = () => {
            if (linkRefs[activeLink]) {
                const activeLinkRef = linkRefs[activeLink].current as unknown as HTMLElement;
                const parentElement = activeLinkRef?.parentElement as HTMLElement;

                if (activeLinkRef && parentElement) {
                    const linkRect = activeLinkRef.getBoundingClientRect();
                    const parentRect = parentElement.getBoundingClientRect();
                    const linePosition = linkRect.left - parentRect.left;
                    const lineWidth = linkRect.width;

                    lineElement.style.setProperty('left', `${linePosition}px`);
                    lineElement.style.setProperty('width', `${lineWidth}px`);
                }
            }
        };

        handleActiveLinkChange();
        window.addEventListener('resize', handleActiveLinkChange);

        return () => {
            window.removeEventListener('scroll', handleActiveLinkChange);
            window.removeEventListener('resize', handleActiveLinkChange);
        };
    }, [activeLink]);

    return (
        <div className="flex justify-center sm:justify-end sticky top-0 sm:top-12 text-xl text-white rounded-full">
            <nav
                className="rounded-none w-full sm:w-fit sm:rounded-full border flex h-[3rem] py-3 sm:py-0 z-40 items-center justify-center sm:justify-end backdrop-blur-lg backdrop-saturate-150 space-x-6 p-4 absolute top-0 right-0 sm:right-20">
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