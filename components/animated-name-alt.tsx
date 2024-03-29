import React, { useEffect, useRef, useCallback, useState } from 'react';
import { motion } from 'framer-motion';

type Color = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet';

const COLORS: Color[] = [
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
    const [colorCounts, setColorCounts] = useState<Record<Color, number>>({
        red: 0,
        orange: 0,
        yellow: 0,
        green: 0,
        blue: 0,
        indigo: 0,
        violet: 0,
    });

    const [sparkIndex, setSparkIndex] = useState(-3);
    const isAnimating = useRef(false);

    useEffect(() => {
        const maxColor = (Object.keys(colorCounts) as Color[]).reduce((a: Color, b: Color) => colorCounts[a] > colorCounts[b] ? a : b);
        if (colorCounts[maxColor] === letters.length - 1) {
            setAllColored(maxColor);
            isAnimating.current = true;
            setSparkIndex(letters.length);
        }
    }, [colorCounts]);

    const handleHover = useCallback((index: number) => {
        if (isAnimating.current || letters[index] === ' ') return;

        let randomColor = Math.floor(Math.random() * COLORS.length);
        while (COLORS[randomColor] === hovered[index]) {
            randomColor = Math.floor(Math.random() * COLORS.length);
        }

        const oldColor = hovered[index];

        hovered[index] = COLORS[randomColor];
        setHovered([...hovered]);

        colorCounts[COLORS[randomColor]] += 1;
        if (oldColor !== 'none') {
            colorCounts[oldColor as Color] -= 1;
        }
        setColorCounts({ ...colorCounts });
    }, [hovered, colorCounts]);

    useEffect(() => {
        if (sparkIndex >= -1){
            if (letters[sparkIndex] === ' ') {
                setSparkIndex(sparkIndex - 1);
            } else {
                setTimeout(() => {
                    setSparkIndex(sparkIndex - 1);
                }, 150);
            }
        }

        if (sparkIndex === -2) {
            isAnimating.current = false;
            setAllColored('none');
        }
    }, [sparkIndex, letters]);

    return (
        <h1 className="text-4xl md:text-6xl lg:text-6xl xl:text-7xl select-none ">
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    onHoverStart={() => handleHover(index)}
                    className={`font-bold font-mono text-[#FDE68A]
                    ${hovered[index] === 'red' ? allColored === 'red' ? 'text-pastel-red' : 'text-pastel-red animate-sparkle-pastel-red' : ''}
                    ${hovered[index] === 'orange' ? allColored === 'orange' ? 'text-pastel-orange' : 'text-pastel-orange animate-sparkle-pastel-orange' : ''}
                    ${hovered[index] === 'yellow' ? allColored === 'yellow' ? 'text-pastel-yellow' : 'text-pastel-yellow animate-sparkle-pastel-yellow' : ''}
                    ${hovered[index] === 'green' ? allColored === 'green' ? 'text-pastel-green' : 'text-pastel-green animate-sparkle-pastel-green' : ''}
                    ${hovered[index] === 'blue' ? allColored === 'blue' ? 'text-pastel-blue' : 'text-pastel-blue animate-sparkle-pastel-blue' : ''}
                    ${hovered[index] === 'indigo' ? allColored === 'indigo' ? 'text-pastel-indigo' : 'text-pastel-indigo animate-sparkle-pastel-indigo' : ''}
                    ${hovered[index] === 'violet' ? allColored === 'violet' ? 'text-pastel-violet' : 'text-pastel-violet animate-sparkle-pastel-violet' : ''}
                    ${sparkIndex === index && allColored === hovered[index] ? `animate-sparkle-pastel-${hovered[index]}` : ''}
                    `}
                >
                    {letter}
                </motion.span>
            ))}
        </h1>
    );
};

export default AnimatedNameAlt;