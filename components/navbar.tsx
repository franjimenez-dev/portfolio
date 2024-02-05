'use client';
import React, {useEffect, useRef, useState} from "react";
import { useActiveLinkOnScroll } from "@/hooks/useActiveLinkOnScroll";
import {FaBriefcase, FaStar} from "react-icons/fa6";
import {MdAlternateEmail} from "react-icons/md";

const Navbar = () => {
    const { activeLink, navigateTo } = useActiveLinkOnScroll(['inicio', 'trabajos', 'experiencia', 'contacto']);
    const [clicked, setClicked] = useState(false);
    const [clickedLink, setClickedLink] = useState('');
    const linkRefs: { [ key: string]: React.MutableRefObject<null>} = {
        inicio: useRef(null),
        trabajos: useRef(null),
        experiencia: useRef(null),
        // estudios: useRef(null),
        contacto: useRef(null),
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
        <div className="flex justify-center sticky top-0 md:top-12 sm:text-xl text-white rounded-full">
            <nav
                className="rounded-none w-full md:w-fit md:rounded-full border flex h-[3rem] py-6 sm:py-0 z-40 items-center justify-center backdrop-blur-lg backdrop-saturate-150 p-6 absolute top-0 right-0 md:right-20">

                <div className="line"></div>

                <a href="/" onClick={(e) => handleLinkClick(e, 'inicio')}
                   ref={linkRefs.inicio}
                   className={`font-semibold flex justify-start items-center ${clickedLink !== '' ? (clickedLink === 'inicio' ? 'text-yellow-200' : '') : (activeLink === 'inicio' ? 'text-yellow-200' : '')}`}
                >

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="hidden sm:block w-5 h-5 mb-[0.15rem] mr-[0.1rem]">
                        <path fillRule="evenodd"
                              d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                              clipRule="evenodd"/>
                    </svg>
                    Inicio
                </a>
                <a href="#trabajos" onClick={(e) => handleLinkClick(e, 'trabajos')}
                   ref={linkRefs.trabajos}
                   className={`font-semibold ml-4 md:ml-6 lg:ml-4 flex justify-start items-center ${clickedLink !== '' ? (clickedLink === 'trabajos' ? 'text-yellow-200' : '') : (activeLink === 'trabajos' ? 'text-yellow-200' : '')}`}
                >
                    <FaStar className={"hidden sm:block w-[1.175rem] h-[1.175rem] mb-[0.15rem] mr-[0.1rem]"} />

                    Trabajos
                </a>

                <a href="#experiencia" onClick={(e) => handleLinkClick(e, 'experiencia')}
                   ref={linkRefs.experiencia}
                   className={`font-semibold ml-4 md:ml-6 lg:ml-4 flex justify-start items-center ${clickedLink !== '' ? (clickedLink === 'experiencia' ? 'text-yellow-200' : '') : (activeLink === 'experiencia' ? 'text-yellow-200' : '')}`}
                >
                    <FaBriefcase className={"hidden sm:block w-[1.15rem] h-[1.15rem] mb-[0.15rem] mr-[0.275rem]"} />

                    Experiencia
                </a>

                {/*<a href="#estudios" onClick={(e) => handleLinkClick(e, 'estudios')}*/}
                {/*   ref={linkRefs.estudios}*/}
                {/*   className={clickedLink !== '' ? (clickedLink === 'estudios' ? 'rainbow-gradient font-semibold ml-3 ' : '  ml-3 font-semibold') : (activeLink === 'estudios' ? 'rainbow-gradient font-semibold ml-3 ' : '  ml-3 font-semibold')}>Estudios</a>*/}

                <a href="#contacto" onClick={(e) => handleLinkClick(e, 'contacto')}
                   ref={linkRefs.contacto}
                   className={`font-semibold ml-4 md:ml-6 lg:ml-4 flex justify-start items-center ${clickedLink !== '' ? (clickedLink === 'contacto' ? 'text-yellow-200' : '') : (activeLink === 'contacto' ? 'text-yellow-200' : '')}`}
                >
                    <MdAlternateEmail className={"hidden sm:block w-5 h-5 mb-[0.15rem] mr-[0.1rem]"}/>

                    Contacto
                </a>
            </nav>
        </div>
    )
}

export default Navbar;