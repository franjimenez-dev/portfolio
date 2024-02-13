import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedName = () => {
    const name = "Fran Jiménez";
    const letters = Array.from(name);
    const [hovered, setHovered] = useState(Array(letters.length).fill('none'));

    const handleHover = (index: number) => {
        const newHovered = [...hovered];
        if (newHovered[index] === 'none') {
            newHovered[index] = 'true';
        } else if (newHovered[index] === 'true') {
            newHovered[index] = 'false';
        } else if (newHovered[index] === 'false') {
            newHovered[index] = 'true';
        }
        setHovered(newHovered);
    };

    return (
        <h1 className="text-4xl md:text-6xl lg:text-6xl xl:text-7xl select-none">
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    onHoverStart={() => handleHover(index)}
                    className={`font-bold font-mono text-[#FDE68A] ${hovered[index] === 'true' ? 'text-[#c084fc] button-spark-violet' : hovered[index] === 'false' && 'button-spark' }`}
                >
                    {letter}
                </motion.span>
            ))}
        </h1>
    );
};

export default AnimatedName;