import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const COLORS = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
]
const AnimatedNameAlt = () => {
    const name = "Fran Jiménez";
    const letters = Array.from(name);
    const [hovered, setHovered] = useState(Array(letters.length).fill('none'));
    const [allColored, setAllColored] = useState('none');
    const [redCount, setRedCount] = useState(0);
    const [orangeCount, setOrangeCount] = useState(0);
    const [yellowCount, setYellowCount] = useState(0);
    const [greenCount, setGreenCount] = useState(0);
    const [blueCount, setBlueCount] = useState(0);
    const [indigoCount, setIndigoCount] = useState(0);
    const [violetCount, setVioletCount] = useState(0);
    const [sparkIndex, setSparkIndex] = useState(-1);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (redCount === letters.length -1) {
            setAllColored('red');
            setIsAnimating(true);
            setSparkIndex(letters.length);
        }
        if (orangeCount === letters.length -1) {
            setAllColored('orange');
            setIsAnimating(true);
            setSparkIndex(letters.length);
        }
        if (yellowCount === letters.length -1) {
            setAllColored('yellow');
            setIsAnimating(true);
            setSparkIndex(letters.length);
        }
        if (greenCount === letters.length -1) {
            setAllColored('green');
            setIsAnimating(true);
            setSparkIndex(letters.length);
        }

        if (blueCount === letters.length -1) {
            setAllColored('blue');
            setIsAnimating(true);
            setSparkIndex(letters.length);
        }

        if (indigoCount === letters.length -1) {
            setAllColored('indigo');
            setIsAnimating(true);
            setSparkIndex(letters.length);
        }

        if (violetCount === letters.length -1) {
            setAllColored('violet');
            setIsAnimating(true);
            setSparkIndex(letters.length);
        }
    }, [redCount, orangeCount, yellowCount, greenCount, blueCount, indigoCount, violetCount]);


    useEffect(() => {
        console.log(allColored);
    }, [allColored]);

    const handleHover = (index: number) => {
        if (isAnimating) return;
        if (letters[index] === ' ') return;

        const newHovered = [...hovered];

        if (allColored === 'none') {
            let randomColor = Math.floor(Math.random() * 7);
            while (COLORS[randomColor] === newHovered[index]) {
                randomColor = Math.floor(Math.random() * 7);
            }
            const oldColor = newHovered[index];
            newHovered[index] = COLORS[randomColor];

            switch (COLORS[randomColor]) {
                case 'red':
                    setRedCount(redCount + 1);
                    break;
                case 'orange':
                    setOrangeCount(orangeCount + 1);
                    break;
                case 'yellow':
                    setYellowCount(yellowCount + 1);
                    break;
                case 'green':
                    setGreenCount(greenCount + 1);
                    break;
                case 'blue':
                    setBlueCount(blueCount + 1);
                    break;
                case 'indigo':
                    setIndigoCount(indigoCount + 1);
                    break;
                case 'violet':
                    setVioletCount(violetCount + 1);
                    break;
            }

            if (oldColor !== 'none') {
                switch (oldColor) {
                    case 'red':
                        setRedCount(redCount - 1);
                        break;
                    case 'orange':
                        setOrangeCount(orangeCount - 1);
                        break;
                    case 'yellow':
                        setYellowCount(yellowCount - 1);
                        break;
                    case 'green':
                        setGreenCount(greenCount - 1);
                        break;
                    case 'blue':
                        setBlueCount(blueCount - 1);
                        break;
                    case 'indigo':
                        setIndigoCount(indigoCount - 1);
                        break;
                    case 'violet':
                        setVioletCount(violetCount - 1);
                        break;
                }
            }
        } else {
            //
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
                }, 150);
            }
        }

        if (sparkIndex === 0) {
            setIsAnimating(false);
        }
    }, [sparkIndex, letters]);


    return (
        <h1 className="text-4xl md:text-6xl lg:text-6xl xl:text-7xl select-none">
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    onHoverStart={() => handleHover(index)}
                    className={`font-bold font-mono text-[#FDE68A] 
                    ${hovered[index] === 'red' ? allColored === 'red' ? 'text-[#FF809F]' : 'text-[#FF809F] animate-sparkle-pastel-red' : ''}
                    ${hovered[index] === 'orange' ? allColored === 'orange' ? 'text-[#FF9380]' : 'text-[#FF9380] animate-sparkle-pastel-orange' : ''}
                    ${hovered[index] === 'yellow' ? allColored === 'yellow' ? 'text-[#FFD280]' : 'text-[#FFD280] animate-sparkle-pastel-yellow' : ''}
                    ${hovered[index] === 'green' ? allColored === 'green' ? 'text-[#C1FF80]' : 'text-[#C1FF80] animate-sparkle-pastel-green' : ''}
                    ${hovered[index] === 'blue' ? allColored === 'blue' ? 'text-[#66FFFF]' : 'text-[#66FFFF] animate-sparkle-pastel-blue' : ''}
                    ${hovered[index] === 'indigo' ? allColored === 'indigo' ? 'text-[#666BFF]' : 'text-[#666BFF] animate-sparkle-pastel-indigo' : ''}
                    ${hovered[index] === 'violet' ? allColored === 'violet' ? 'text-[#c084fc]' : 'text-[#c084fc] animate-sparkle-pastel-violet' : ''}
                    ${sparkIndex === index && allColored === 'red' ? 'animate-sparkle-pastel-red' : ''}
                    ${sparkIndex === index && allColored === 'orange' ? 'animate-sparkle-pastel-orange' : ''}
                    ${sparkIndex === index && allColored === 'yellow' ? 'animate-sparkle-pastel-yellow' : ''}
                    ${sparkIndex === index && allColored === 'green' ? 'animate-sparkle-pastel-green' : ''}
                    ${sparkIndex === index && allColored === 'blue' ? 'animate-sparkle-pastel-blue' : ''}
                    ${sparkIndex === index && allColored === 'indigo' ? 'animate-sparkle-pastel-indigo' : ''}
                    ${sparkIndex === index && allColored === 'violet' ? 'animate-sparkle-pastel-violet' : ''}
                    `}
                >
                    {letter}
                </motion.span>
            ))}
        </h1>
    );
};

export default AnimatedNameAlt;