import React, {useEffect, useState} from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimatedTextRocket = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const controls = useAnimation();
    const containerControls = useAnimation();
    const rocketControls = useAnimation();
    const [sparkIndex, setSparkIndex] = useState(0);

    useEffect(() => {
        if (sparkIndex >= 0 && sparkIndex < textArray.length) {
            const timeoutId = setTimeout(() => {
                setSparkIndex(sparkIndex + 1);
            }, 100);
        }
        if (sparkIndex === textArray.length) {
            setIsAnimating(false);
        }
    }, [sparkIndex]);
    const handleMouseEnter = () => {
        if (isAnimating) return;

        setIsAnimating(true);
        rocketControls.start({ rotate: 45, transition: { duration: 0.4 } }).then( () => {
            controls.start(i => ({
                opacity: 0,
                x: 50,
                transition: { delay: (textArray.length - i) * 0.05 }
            }))

            setTimeout(() => {
                rocketControls.start({ opacity: 0, transition: { duration: 0.3 } });
            }, 1000);

            containerControls.start({ x: 400, transition: { duration: 2 } }).then( () => {

                    rocketControls.start({ rotate: -135, transition: { duration: 0.4 } }).then(() => {
                        rocketControls.start({ opacity: 1, transition: { duration: 0.1 } });
                    });
                }
            );

            setTimeout(() => {
                controls.start(i => ({
                    opacity: 1,
                    x: 0,
                    transition: { delay: i * 0.05 }
                }));
                containerControls.start({ x: 0, transition: { duration: 1.5 } }).then(() => {
                    rocketControls.start({ rotate: 0, transition: { duration: 0.3 } }).then(() => {

                        setSparkIndex(0);
                    });
                });
            }, 2500);


        });


    };

    const text = "Desarrollador Web";
    const textArray = text.split('');

    return (
        <motion.h2
            className="flex flex-shrink text-xl sm:text-3xl my-2 font-semibold font-mono select-none w-fit h-fit"
            onMouseEnter={handleMouseEnter}
            animate={containerControls}
        >
            <motion.span
                className="inline-block mr-1"
                animate={rocketControls}
            >
                🚀
            </motion.span>
            {textArray.map((char, i) => (
                <motion.span key={i} custom={i} animate={controls} className={`${i < sparkIndex ? 'button-spark' : ''}`}>
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </motion.h2>
    );
};

export default AnimatedTextRocket;