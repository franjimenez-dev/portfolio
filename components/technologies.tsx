import React, {useEffect, useRef, useState} from 'react';
import Image from "next/image";
import gsap from "gsap";
import SVGS from "@/lib/svgs";
import {motion} from "framer-motion";
import Window from "@/components/ui/window";
import Link from "next/link";
import {FaExternalLinkAlt} from "react-icons/fa";
import {MdKeyboardReturn} from "react-icons/md";
import {IoReturnDownBackOutline} from "react-icons/io5";
import {BiPointer} from "react-icons/bi";
import {FaArrowDown, FaHandPointUp} from "react-icons/fa";
import {PiArrowElbowLeftDownBold, PiArrowFatDownFill, PiHandPointingDuotone} from "react-icons/pi";
import {FaAngleDown} from "react-icons/fa6";

interface TechnologiesProps {
    navigation?: (index: string) => void;
}
const Technologies: React.FC<TechnologiesProps> = ({navigation = () => {}}) => {
    const [hover, setHover] = useState(-1);
    const [selectedSVG, setSelectedSVG] = useState(-1);
    const [onHoverSelectedTitle, setOnHoverSelectedTitle] = useState(false);

    const handleSVGClick = (index: number) => {
        setSelectedSVG(index);
    };

    return (
        <>
            <div className={"flex justify-center mt-10"}>
                <div className={"w-full flex justify-center"}>
                    <div className={"w-5/6 md:w-4/6"}>
                        <div className="container scroller">
                            <div className={`scroller__inner `}>
                                {
                                    SVGS.map((element, index) => (
                                        <div key={index}
                                             className={`${hover === index && 'animate-glow-low-purple animate-tech-purple'}`}
                                             onMouseEnter={() => setHover(index)}
                                             onMouseLeave={() => setHover(-1)}
                                             onClick={() => handleSVGClick(index)}
                                        >
                                            <Image src={element.src} priority={true}
                                                   className={`w-12 h-12 cursor-pointer ${hover === index ? '' : ' opacity-70 grayscale'}`}
                                                   alt={element.name}
                                                   width={20} height={20}/>
                                        </div>
                                    ))

                                }
                                {

                                    SVGS.map((element, index) => (
                                        <div key={index}
                                             className={`${hover === index && 'animate-glow-low-purple animate-tech-purple'}`}
                                             onMouseEnter={() => setHover(index)}
                                             onMouseLeave={() => setHover(-1)}
                                             onClick={() => handleSVGClick(index)}
                                        >
                                            <Image src={element.src} priority={true}
                                                   className={`w-12 h-12 cursor-pointer ${hover === index ? '' : ' opacity-70 grayscale'}`}
                                                   alt={element.name}
                                                   width={20} height={20}/>
                                        </div>
                                    ))

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"flex justify-center"}>

                {selectedSVG !== -1 ?
                    (
                        <div className={"full-rounded-border-gradient w-5/6 my-bg-image z-10 mt-5"}>
                            <div
                                className={"grid grid-cols-3 sm:grid-cols-5 p-12 justify-center items-center relative"}>
                                <div
                                    className={"absolute top-3 sm:top-10 left-4 sm:left-10 grid justify-center items-center text-[#FDE68A] font-bold font-mono cursor-pointer tech-highlights-purple"}
                                    onClick={() => setSelectedSVG(-1)}
                                >
                                    Volver
                                    <IoReturnDownBackOutline
                                        className={"w-9 h-8 sm:w-12 sm:h-9 "}/>
                                </div>
                                <motion.div
                                    className={"col-span-3 sm:col-span-2 flex justify-center"}
                                    initial={{opacity: 0, x: 100}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{duration: 0.3}}
                                >
                                    <div className={"max-w-lg flex justify-center"}>
                                        <Image src={SVGS[selectedSVG].src} alt={`${SVGS[selectedSVG].name} logo`}
                                               width={200}
                                               height={200}/>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className={"col-span-3 h-full grid-cols-1 text-2xl font-mono text-[#FDE68A] grid justify-center items-start "}
                                    initial={{opacity: 0, x: 100}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{duration: 0.3}}
                                >
                                    <Link href={SVGS[selectedSVG].url}
                                          className={`flex mt-3 sm:mt-0 justify-center items-center w-full text-4xl text-bold mb-4 ${onHoverSelectedTitle && 'animate-glow-low-purple animate-tech-purple'}`}
                                          onMouseEnter={() => setOnHoverSelectedTitle(true)}
                                          onMouseLeave={() => setOnHoverSelectedTitle(false)}
                                    >

                                        {SVGS[selectedSVG].name}
                                        <FaExternalLinkAlt className={"w-6 h-6 ml-3"}/>
                                    </Link>
                                    <div className={"flex justify-center"}>
                                    <span className={" text-sm sm:text-base md:text-lg text-white text-pretty "}
                                          dangerouslySetInnerHTML={{__html: SVGS[selectedSVG].description}}/>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ) : (
                        <div className={"flex flex-col justify-center mt-8 w-full"}>
                            <div className={"flex justify-center"}>

                                <svg stroke="currentColor" fill="url(#grad1)" strokeWidth="0" viewBox="0 0 256 256"
                                     className="w-10 h-10 animate-bounce mb-8" height="1em" width="1em"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style={{stopColor: '#c084fc', stopOpacity: 1}}/>
                                            <stop offset="100%" style={{stopColor: '#FDE68A', stopOpacity: 1}}/>
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M208,116v36a80,80,0,0,1-80,80c-44.18,0-55.81-24-93.32-90a20,20,0,0,1,34.64-20L88,152V44a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0v16a20,20,0,0,1,40,0Z"
                                        opacity="0"></path>
                                    <path
                                        d="M188,88a27.86,27.86,0,0,0-13.35,3.39A28,28,0,0,0,136,74.7V44a28,28,0,0,0-56,0v80l-3.82-6.13A28,28,0,0,0,27.73,146l4.67,8.23C66.81,214.89,81.05,240,128,240a88.1,88.1,0,0,0,88-88V116A28,28,0,0,0,188,88Zm12,64a72.08,72.08,0,0,1-72,72c-37.63,0-47.84-18-81.68-77.68l-4.69-8.27,0-.05A12,12,0,0,1,46,121.61a11.88,11.88,0,0,1,6-1.6,12,12,0,0,1,10.41,6,1.76,1.76,0,0,0,.14.23l18.67,30A8,8,0,0,0,96,152V44a12,12,0,0,1,24,0v68a8,8,0,0,0,16,0V100a12,12,0,0,1,24,0v20a8,8,0,0,0,16,0v-4a12,12,0,0,1,24,0Z"></path>
                                </svg>
                            </div>
                            <div className={"w-full flex justify-center items-center"}>
                                <span className={"text-lg sm:text-2xl gradient-text font-bold w-fit font-mono"}>
                                    Haz click en alguna tecnología
                                </span>
                            </div>
                            <div className={"w-full flex justify-center items-center"}>
                                <span className={"text-lg sm:text-2xl gradient-text font-bold w-fit font-mono"}>
                                    para ver mas detalles
                                </span>
                            </div>
                            <div className={"w-full flex justify-center items-center mt-32"}>
                                <button
                                    type={"button"}
                                    onClick={() => navigation('trabajos')}
                                    className={"px-3 text-xl sm:text-3xl gradient-text gradient-text-animation-tech font-bold font-mono flex hover:scale-110 transition-all duration-300 p-2 items-center justify-center full-rounded-border-gradient w-fit"}>
                                    <FaArrowDown className={"w-4 h-4 sm:w-6 sm:h-6 mr-2 text-pastel-violet mt-0.5"}/>

                                    Ver proyectos
                                </button>
                            </div>
                            {/*<div className={"w-full flex justify-center items-center mt-32"}>*/}
                            {/*    <button*/}
                            {/*        type={"button"}*/}
                            {/*        onClick={() => navigation('trabajos')}*/}
                            {/*        className={"text-xl sm:text-3xl gradient-text gradient-text-animation-tech font-bold font-mono flex hover:scale-110 transition-all duration-300 p-2 items-center justify-center full-rounded-border-gradient w-fit"}>*/}
                            {/*        Ver proyectos*/}
                            {/*    </button>*/}
                            {/*</div>*/}
                            {/*<div className={"w-full flex justify-center items-center"}>*/}
                            {/*    <svg stroke="currentColor" fill="url(#grad1)" stroke-width="0" viewBox="0 0 448 512"*/}
                            {/*         className="w-6 h-6 sm:w-10 sm:h-10 mr-2 mt-1 text-pastel-violet" height="1em" width="1em"*/}
                            {/*         xmlns="http://www.w3.org/2000/svg">*/}

                            {/*        <defs>*/}
                            {/*            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">*/}
                            {/*                <stop offset="0%" style={{stopColor: '#c084fc', stopOpacity: 1}}/>*/}
                            {/*                <stop offset="100%" style={{stopColor: '#FDE68A', stopOpacity: 1}}/>*/}
                            {/*            </linearGradient>*/}
                            {/*        </defs>*/}
                            {/*        <path*/}
                            {/*            d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>*/}
                            {/*    </svg>*/}
                            {/*</div>*/}
                        </div>
                    )
                }
            </div>
        </>


    )
};

export default Technologies;
