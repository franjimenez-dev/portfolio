import React, {useEffect, useState} from 'react';
import {FaWindowMinimize} from "react-icons/fa";
import {FiMaximize} from "react-icons/fi";
import {IoClose} from "react-icons/io5";
import { motion } from 'framer-motion';

interface WindowProps {
    children: React.ReactNode;
    title: string;
}
const Window: React.FC<WindowProps> = ({children, title}) => {

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
        <div className={`w-5/6 overflow-hidden ${isClosed ? 'hidden' : ''}`}>
            <div className={"text-[#FDE68A] flex w-full justify-center items-center "}>
                <div
                    className={` text-3xl text-center mt-12 font-semibold font-mono  ${ roundedBorder ? 'full-rounded-border-gradient' : 'not-rounded-bottom-border-gradient'} w-full flex justify-between items-stretch`}>
                    <div style={{width: 'max-content'}}></div>
                    <span className={"gradient-text "}>
                        {title}
                    </span>
                    <div className={" text-3xl flex justify-center items-stretch"}
                         style={{width: 'max-content'}}>
                        <button
                            className={`w-10 border-l-2 border-[#FDE68A]  flex items-center justify-center `}
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
                            <FaWindowMinimize className={`w-3 h-3 ${onHoverMinimize && 'animate-glow-low'} ${hoveringIndex === 1 && ' animate-tech'}`}/>
                        </button>
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
                            <FiMaximize className={`w-5 h-5  ${onHoverMaximize && 'animate-glow-low'} ${hoveringIndex === 2 && ' animate-tech'}`}/>
                        </button>
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
                            <IoClose className={`w-7 h-7 ${onHoverClose && 'animate-glow-low'} ${hoveringIndex === 3 && ' animate-tech'}`}/>
                        </button>
                    </div>
                </div>
            </div>
            <motion.div
                className={`${borderVisible ? 'not-rounded-top-border-gradient -mt-[2px]' : ''}`}
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