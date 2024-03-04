'use client';
import React, {useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import leftImage from "@/public/bg/left.png";
import rightImage from "@/public/bg/right.png";

const ShadowBg = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <>
            <div aria-hidden="true"
                 className="fixed hidden md:block opacity-50 -bottom-[40%] -left-[20%] z-0 pointer-events-none select-none">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 0.5 : 0 }}
                    transition={{ duration: 0.2 }}
                    src={leftImage.src}
                    className="relative shadow-black/5 shadow-none"
                    alt="left background"/>
            </div>
            <div aria-hidden="true"
                 className="fixed hidden md:block opacity-50 -top-[80%] -right-[60%] 2xl:-top-[60%] 2xl:-right-[45%] z-0 rotate-12 pointer-events-none select-none">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 0.5 : 0 }}
                    transition={{ duration: 0.2 }}
                    src={rightImage.src}
                    className="relative shadow-black/5 shadow-none"
                    alt="docs right background"/>
            </div>
        </>
    );
};

export default ShadowBg;