import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedName = () => {
    const name = "Fran Jiménez";
    const letters = Array.from(name);
    const [hovered, setHovered] = useState(Array(letters.length).fill('none'));
    const [allColored, setAllColored] = useState('none');
    const [purpleCount, setPurpleCount] = useState(0);
    const [yellowCount, setYellowCount] = useState(0);
    const [sparkIndex, setSparkIndex] = useState(-1);
    const [sparkIndexSecondary, setSparkIndexSecondary] = useState(-1);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (purpleCount === letters.length -1) {
            setAllColored('purple');
            setIsAnimating(true);
            setSparkIndex(letters.length);
        }
        if (yellowCount === letters.length -1) {
            setAllColored('yellow');
            setIsAnimating(true);
            setSparkIndex(letters.length);
        }
    }, [purpleCount, yellowCount]);



    const handleHover = (index: number) => {
        if (isAnimating) return;
        if (letters[index] === ' ') return;
        const newHovered = [...hovered];
        if (allColored !== 'none') {
            if (allColored === 'purple' && newHovered[index] === 'purple') {
                newHovered[index] = 'yellow';
                setYellowCount(yellowCount + 1);
                setPurpleCount(purpleCount - 1);
            }
            if (allColored === 'yellow' && newHovered[index] === 'yellow') {
                newHovered[index] = 'purple';
                setPurpleCount(purpleCount + 1);
                setYellowCount(yellowCount - 1);
            }
        } else {
            if (newHovered[index] === 'none') {
                newHovered[index] = 'purple';
                setPurpleCount(purpleCount + 1);
            }
        }

        setHovered(newHovered);

    };

    useEffect(() => {
        if (sparkIndex >= 0) {

            if (letters[sparkIndex] === ' ') {
                setSparkIndex(sparkIndex - 1);
            } else {
                setTimeout(() => {
                    setSparkIndex(sparkIndex - 1);
                    setSparkIndexSecondary(sparkIndexSecondary - 1)
                }, 150);
            }
        }

        if (sparkIndex === 0) {
            setIsAnimating(false);
        }
    }, [sparkIndex]);


    return (
        <h1 className="text-4xl md:text-6xl lg:text-6xl xl:text-7xl select-none text-nowrap">
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    onHoverStart={() => handleHover(index)}
                    className={`font-bold font-mono text-[#FDE68A] 
                    ${hovered[index] === 'purple' ? 'text-[#c084fc] button-spark-violet' : hovered[index] === 'yellow' && 'button-spark'}
                    ${sparkIndex === index ? allColored === 'purple' ? 'button-spark-alt' : 'button-spark-violet' : ''}`}
                >
                    {letter}
                </motion.span>
            ))}
        </h1>
    );
};

export default AnimatedName;