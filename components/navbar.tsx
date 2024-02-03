'use client';
import React, {useEffect, useRef, useState} from "react";
import { useActiveLinkOnScroll } from "@/hooks/useActiveLinkOnScroll";

const Navbar = () => {
    const { activeLink, navigateTo } = useActiveLinkOnScroll(['inicio', 'trabajos', 'experiencia', 'estudios', 'sobreMi']);
    const [clicked, setClicked] = useState(false);
    const [clickedLink, setClickedLink] = useState('');
    const linkRefs: { [ key: string]: React.MutableRefObject<null>} = {
        inicio: useRef(null),
        trabajos: useRef(null),
        experiencia: useRef(null),
        estudios: useRef(null),
        sobreMi: useRef(null),
    };

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
        e.preventDefault();
        setClicked(true);
        setClickedLink(link);
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
            if (activeLink === clickedLink) {
                setClicked(false);
                setClickedLink('');
            } else {
                return;
            }
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
                className="rounded-none w-full sm:w-fit sm:rounded-full border flex h-[3rem] py-6 sm:py-0 z-40 items-center justify-around backdrop-blur-lg backdrop-saturate-150 p-6 absolute top-0 right-0 sm:right-20">
                <div className="line"></div>
                <a href="/" onClick={(e) => handleLinkClick(e, 'inicio')}
                   ref={linkRefs.inicio}
                   className={clickedLink !== '' ? (clickedLink === 'inicio' ? 'rainbow-gradient font-semibold' : 'font-semibold') : (activeLink === 'inicio' ? 'rainbow-gradient font-semibold' : 'font-semibold')}>Inicio</a>
                <a href="#trabajos" onClick={(e) => handleLinkClick(e, 'trabajos')}
                   ref={linkRefs.trabajos}
                   className={clickedLink !== '' ? (clickedLink === 'trabajos' ? 'rainbow-gradient font-semibold ml-3 ' : '  ml-3 font-semibold') : (activeLink === 'trabajos' ? 'rainbow-gradient font-semibold ml-3 ' : '  ml-3 font-semibold')}>Trabajos</a>
                <a href="#experiencia" onClick={(e) => handleLinkClick(e, 'experiencia')}
                   ref={linkRefs.experiencia}
                   className={clickedLink !== '' ? (clickedLink === 'experiencia' ? 'rainbow-gradient font-semibold ml-3 ' : '  ml-3 font-semibold') : (activeLink === 'experiencia' ? 'rainbow-gradient font-semibold ml-3 ' : '  ml-3 font-semibold')}>Experiencia</a>
                <a href="#estudios" onClick={(e) => handleLinkClick(e, 'estudios')}
                   ref={linkRefs.estudios}
                   className={clickedLink !== '' ? (clickedLink === 'estudios' ? 'rainbow-gradient font-semibold ml-3 ' : '  ml-3 font-semibold') : (activeLink === 'estudios' ? 'rainbow-gradient font-semibold ml-3 ' : '  ml-3 font-semibold')}>Estudios</a>
                <a href="#sobreMi" onClick={(e) => handleLinkClick(e, 'sobreMi')}
                   ref={linkRefs.sobreMi}
                   className={clickedLink !== '' ? (clickedLink === 'sobreMi' ? 'rainbow-gradient font-semibold ml-3' : 'font-semibold ml-3') : (activeLink === 'sobreMi' ? 'rainbow-gradient font-semibold ml-3' : 'font-semibold ml-3')}>Sobre
                    mí</a>
            </nav>
        </div>
    )
}

export default Navbar;