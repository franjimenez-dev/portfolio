import React, {useEffect, useState} from 'react';
import {FaWindowMinimize} from "react-icons/fa";
import {FiMaximize} from "react-icons/fi";
import {IoClose} from "react-icons/io5";
import { motion } from 'framer-motion';
import {AiFillStar} from "react-icons/ai";
import {PiBooks} from "react-icons/pi";
import {FaBriefcase} from "react-icons/fa6";

interface WindowProps {
    children: React.ReactNode;
    title: string;
    className?: string;
    minimizeButton?: boolean;
    maximizeButton?: boolean;
    closeButton?: boolean;
    borders?: boolean;
}
const Window: React.FC<WindowProps> = ({children, title, className = 'text-3xl', minimizeButton = true, maximizeButton = true, closeButton = true, borders= true}) => {

    const contentRef = React.useRef<HTMLDivElement>(null);
    const [onHoverMinimize, setOnHoverMinimize] = useState(false);
    const [onHoverMaximize, setOnHoverMaximize] = useState(false);
    const [onHoverClose, setOnHoverClose] = useState(false);
    const [hoveringIndex, setHoveringIndex] = useState(-1);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isClosed, setIsClosed] = useState(false)
    const [borderVisible, setBorderVisible] = useState(true);
    const [roundedBorder, setRoundedBorder] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (onHoverMinimize) {
            setTimeout(() => {
                setOnHoverMinimize(false);
            }, 350)
        }

        if (onHoverMaximize) {
            setTimeout(() => {
                setOnHoverMaximize(false);
            }, 350)
        }

        if (onHoverClose) {
            setTimeout(() => {
                setOnHoverClose(false)
            }, 350)
        }

    }, [onHoverMinimize, onHoverMaximize, onHoverClose]);

    useEffect(() => {
        if (isAnimating) {
            setTimeout(() => {
                setIsAnimating(false);
            }, 450);
        }
    }, [isAnimating]);

    return (
        <div className={`w-11/12 overflow-hidden ${isClosed ? 'hidden' : ''}`}>
            <div className={"text-[#FDE68A] flex w-full justify-center items-center "}>
                <div
                    className={`mt-12 text-center font-semibold font-mono  ${ borders ? roundedBorder ? 'full-rounded-border-gradient' : 'not-rounded-bottom-border-gradient' : ''} w-full flex justify-between items-stretch ${className}`}>
                    <div style={{width: 'max-content'}}></div>
                    <span className={"flex justify-center items-center gradient-text select-none text-3xl sm:text-4xl md:text-5xl lg:text-5xl p-0 sm:p-1 lg:p-2"}>
                        <PiBooks className={"w-8 h-8 sm:w-9 sm:h-9 md:w-12 md:h-12 text-pastel-violet mr-1"}/>
                        {title}
                        <FaBriefcase className={"w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#FDE68A] ml-2"}/>
                    </span>
                    <div className={" text-3xl flex justify-center items-stretch"}
                         style={{width: 'max-content'}}>
                        {minimizeButton && (
                            <button
                                className={`w-10 border-l-2 border-[#FDE68A] flex items-center justify-center `}
                                onMouseEnter={() => {
                                    setOnHoverMinimize(true)
                                    setHoveringIndex(1);
                                }}
                                onMouseLeave={() => setHoveringIndex(-1)}
                                onClick={() => {
                                    if (isAnimating) return;
                                    if (isMinimized) return;

                                    setIsAnimating(true);
                                    setIsMinimized(true);
                                }}
                            >
                                <FaWindowMinimize
                                    className={`w-3 h-3 ${onHoverMinimize && 'animate-glow-low'} ${hoveringIndex === 1 && ' animate-tech'}`}/>
                            </button>
                        )}
                        {maximizeButton && (
                            <button
                                className={`w-10 border-l-2 border-[#FDE68A]  flex items-center justify-center `}
                                onMouseEnter={() => {
                                    setOnHoverMaximize(true)
                                    setHoveringIndex(2);
                                }}
                                onMouseLeave={() => setHoveringIndex(-1)}
                                onClick={() => {
                                    if (isAnimating) return;
                                    if (!isMinimized) return;

                                    setIsAnimating(true);
                                    setRoundedBorder(false);
                                    setIsMinimized(false);
                                    setBorderVisible(true);
                                }}
                            >
                                <FiMaximize
                                    className={`w-5 h-5  ${onHoverMaximize && 'animate-glow-low'} ${hoveringIndex === 2 && ' animate-tech'}`}/>
                            </button>
                        )}

                        { closeButton && (
                            <button
                                className={`w-10 border-l-2 border-[#FDE68A] flex items-center justify-center `}
                                onMouseEnter={() => {
                                    setOnHoverClose(true)
                                    setHoveringIndex(3);
                                }}
                                onMouseLeave={() => setHoveringIndex(-1)}
                                onClick={() => {
                                    if (isAnimating) return;
                                    if (isClosed) return;

                                    setIsAnimating(true);
                                    setIsClosed(true)
                                    setIsAnimating(false);
                                }}
                            >
                                <IoClose
                                    className={`w-7 h-7 ${onHoverClose && 'animate-glow-low'} ${hoveringIndex === 3 && ' animate-tech'}`}/>
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <motion.div
                className={`p-2 ${ borders && borderVisible ? 'not-rounded-top-border-gradient select-none -mt-[2px]' : ''}`}
                ref={contentRef}
                initial={{height: "auto"}}
                animate={{height: isMinimized ? 0 : "auto"}}
                transition={{duration: 0.5}}
                onAnimationComplete={() => {
                    if (isMinimized) {
                        setBorderVisible(false);
                        setRoundedBorder(true);
                    }
                }}
            >
                {children}
            </motion.div>
        </div>

    );
};

export default Window;