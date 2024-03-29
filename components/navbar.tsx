'use client';
import React, {useEffect, useRef, useState} from "react";
import { useActiveLinkOnScroll } from "@/hooks/useActiveLinkOnScroll";
import {FaBriefcase, FaStar} from "react-icons/fa6";
import {MdAlternateEmail} from "react-icons/md";
import {HiMiniHome} from "react-icons/hi2";

const Navbar = () => {
    const { activeLink, navigateTo } = useActiveLinkOnScroll(['inicio', 'trabajos', 'experiencia', 'contacto']);
    const [clicked, setClicked] = useState(false);
    const [clickedLink, setClickedLink] = useState('');
    const [isJobClicked, setIsJobClicked] = useState(false);
    const [isHomeClicked, setIsHomeClicked] = useState(false);
    const [isExperienceClicked, setIsExperienceClicked] = useState(false);
    const [isContactClicked, setIsContactClicked] = useState(false);
    const linkRefs: { [ key: string]: React.MutableRefObject<null>} = {
        inicio: useRef(null),
        trabajos: useRef(null),
        experiencia: useRef(null),
        contacto: useRef(null),
    };

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
        e.preventDefault();

        if (activeLink === link) {
            return;
        }

        setClicked(true);
        setClickedLink(link);
        navigateTo(link);

        if (link === 'trabajos') {
            setIsJobClicked(true);
        }
        if (link === 'inicio') {
            setIsHomeClicked(true);
        }
        if (link === 'experiencia') {
            setIsExperienceClicked(true);
        }
        if (link === 'contacto') {
            setIsContactClicked(true);
        }

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
        if (isHomeClicked) {
            setTimeout(() => {
                setIsHomeClicked(false);
            }, 1000);
        }
    }, [isHomeClicked]);

    useEffect(() => {
        if (isJobClicked) {
            setTimeout(() => {
                setIsJobClicked(false);
            }, 1000);
        }
    }, [isJobClicked]);

    useEffect(() => {
        if (isExperienceClicked) {
            setTimeout(() => {
                setIsExperienceClicked(false);
            }, 1000);
        }
    }, [isExperienceClicked]);

    useEffect(() => {
        if (isContactClicked) {
            setTimeout(() => {
                setIsContactClicked(false);
            }, 1000);
        }
    }, [isContactClicked]);

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

        if (activeLink === 'trabajos') {
            setIsJobClicked(true);
        }

        if (activeLink === 'inicio') {
            setIsHomeClicked(true);
        }

        if (activeLink === 'experiencia') {
            setIsExperienceClicked(true);
        }
        if (activeLink === 'contacto') {
            setIsContactClicked(true);
        }

        return () => {
            window.removeEventListener('scroll', handleActiveLinkChange);
            window.removeEventListener('resize', handleActiveLinkChange);
        };
    }, [activeLink]);

    return (
        <div className="flex justify-center sticky top-0 sm:text-xl text-white rounded-full z-40">
            <nav
                className="rounded-none w-full border-b flex h-[3rem] py-6 sm:py-0 z-40 items-center justify-center backdrop-blur-lg bg-black/90 backdrop-saturate-150 p-6 absolute top-0 lg:space-x-6">

                <div className="line"></div>
                <a href="/" onClick={(e) => handleLinkClick(e, 'inicio')}
                   ref={linkRefs.inicio}
                   className={`font-semibold flex justify-start items-center ${clickedLink !== '' ? (clickedLink === 'inicio' ? 'text-[#FDE68A]' : '') : (activeLink === 'inicio' ? 'text-[#FDE68A]' : '')} ${isHomeClicked ? 'active text-[#FDE68A]' : ''}`}
                >
                    <HiMiniHome className={`hidden sm:block w-5 h-5 mb-[0.15rem] mr-[0.1rem] ${isHomeClicked ? 'home-animation' : ''}`} />
                    Inicio
                </a>
                <a href="#trabajos" onClick={(e) => handleLinkClick(e, 'trabajos')}
                   ref={linkRefs.trabajos}
                   className={`font-semibold ml-4 md:ml-6 lg:ml-4 flex justify-start items-center ${clickedLink !== '' ? (clickedLink === 'trabajos' ? 'text-[#FDE68A]' : '') : (activeLink === 'trabajos' ? 'text-[#FDE68A]' : '')} ${isJobClicked ? 'active text-[#FDE68A]' : ''}`}
                >
                    <FaStar className={`hidden sm:block w-[1.175rem] h-[1.175rem] mb-[0.15rem] mr-[0.1rem] ${isJobClicked ? 'job-animation' : ''}`} />
                    Proyectos
                </a>

                <a href="#experiencia" onClick={(e) => handleLinkClick(e, 'experiencia')}
                   ref={linkRefs.experiencia}
                   className={`font-semibold ml-4 md:ml-6 lg:ml-4 flex justify-start items-center ${clickedLink !== '' ? (clickedLink === 'experiencia' ? 'text-[#FDE68A]' : '') : (activeLink === 'experiencia' ? 'text-[#FDE68A]' : '')} ${isExperienceClicked ? 'active text-[#FDE68A]' : ''}`}
                >
                    <FaBriefcase className={`hidden sm:block w-[1.15rem] h-[1.15rem] mb-[0.15rem] mr-[0.275rem] ${isExperienceClicked ? 'experience-animation' : ''}`} />

                    Trayectoria
                </a>
                <a href="#contacto" onClick={(e) => handleLinkClick(e, 'contacto')}
                   ref={linkRefs.contacto}
                   className={`font-semibold ml-4 md:ml-6 lg:ml-4 flex justify-start items-center ${clickedLink !== '' ? (clickedLink === 'contacto' ? 'text-[#FDE68A]' : '') : (activeLink === 'contacto' ? 'text-[#FDE68A]' : '')} ${isContactClicked ? 'active text-[#FDE68A]' : ''}`}
                >
                    <MdAlternateEmail className={`hidden sm:block w-5 h-5 mb-[0.15rem] mr-[0.1rem] ${isContactClicked ? 'contact-animation' : ''}`}/>

                    Sobre mí
                </a>
            </nav>
        </div>
    )
}

export default Navbar;