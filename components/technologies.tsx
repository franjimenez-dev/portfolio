import React, {useEffect, useState} from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import SVGS from "@/lib/svgs";
import Window from "@/components/ui/window";
import Link from "next/link";
import {FaExternalLinkAlt} from "react-icons/fa";
import {MdKeyboardReturn} from "react-icons/md";
import {IoReturnDownBackOutline} from "react-icons/io5";

const Technologies = () => {
    const [hover, setHover] = useState(-1);
    const [selectedSVG, setSelectedSVG] = useState(-1);
    const [onHoverSelectedTitle, setOnHoverSelectedTitle] = useState(false);


    const handleSVGClick = (index: number) => {
        setSelectedSVG(index);
    };

    return (
        <Window title={"Tecnologías"}>
            <div className={"grid grid-cols-3 sm:grid-cols-5 p-12 justify-center items-center relative"}>
                {
                    selectedSVG === -1 ? (
                        SVGS.map((svg, index) => (
                            <motion.div
                                key={index}
                                className={"justify-center items-center mb-12 grid grid-cols-1"}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(-1)}
                                initial={{opacity: 1}}
                                animate={{
                                    opacity: selectedSVG !== -1 ? 0 : 1,
                                    scale: selectedSVG === index ? 1.5 : 1
                                }}
                                transition={{duration: 0.3}}
                            >
                                <div onClick={() => handleSVGClick(index)}
                                     className={`flex justify-center ${hover === index && 'animate-sparkle-double-shadow sparkle-double-shadow cursor-pointer'}`}>
                                    <Image src={svg.src} alt={`${svg.name} logo`} width={200} height={200}
                                           className={"w-10 h-10 sm:w-12 sm:h-12"}/>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <>
                            <div className={"absolute top-3 sm:top-10 left-4 sm:left-10 grid justify-center items-center text-[#FDE68A] font-bold font-mono cursor-pointer tech-highlights-purple"}
                                 onClick={() => setSelectedSVG(-1)}
                            >
                                Volver
                                <IoReturnDownBackOutline
                                className={"w-9 h-8 sm:w-12 sm:h-9 "}/>
                            </div>
                            <motion.div
                                className={"col-span-3 flex justify-center"}
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
                                    <span className={" text-sm sm:text-base md:text-lg text-white text-pretty "} dangerouslySetInnerHTML={{ __html: SVGS[selectedSVG].description }} />
                                </div>
                            </motion.div>
                        </>
                    )}
            </div>
        </Window>
    );
};

export default Technologies;
