import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const ELEMENTOS = [
    'Elemento 1',
    'Elemento 2',
    'Elemento 3',
    'Elemento 4',
    'Elemento 5',
    'Elemento 6',
    'Elemento 7',
    'Elemento 8',
    'Elemento 9',
    'Elemento 10',
    'Elemento 11',
    'Elemento 12',
    'Elemento 13',
];

const AnimacionContinua = () => {

    useEffect(() => {
        const scrollers = document.querySelectorAll('.scroller');

        scrollers.forEach((scroller) => {

            const scrollerInner = scroller.querySelector('.scroller__inner');
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach((item) => {
                const clone = item.cloneNode(true);
                clone.setAttribute('aria-hidden', true);
                scrollerInner.appendChild(clone);
            })
        });

    }, []);

    return (
        <div className="container scroller">
            <div className={"scroller__inner"}>

                {ELEMENTOS.map((elemento, index) => (
                    <div key={index}
                         className={`text-lg font-bold rounded-full bg-gradient-to-r from-purple-400 to-pink-500 p-2 w-32 text-center   }`}>
                        {elemento}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimacionContinua;