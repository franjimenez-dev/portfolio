import React, {useState} from 'react';
import Image from "next/image";
import SVGS from "@/lib/svgs";
import Link from "next/link";
import Window from "@/components/ui/window";
const Technologies = () => {
    const [hovered, setHovered] = useState(-1);

    return (
        <Window title={"Tecnologías.tsx"}>
            <div
                className={"grid grid-cols-2 sm:grid-cols-8 md:grid-cols-6 p-12"}>
                {
                    SVGS.map((svg, index) => (
                        <div key={index}
                             className={`justify-center items-center mb-12 grid grid-cols-1 `}
                             onMouseEnter={() => {
                                 setHovered(index);
                             }}
                             onMouseLeave={() => {
                                 setHovered(-1);
                             }}
                        >
                            <label className={"font-bold text-sm text-center mb-1"}>
                                {svg.name}
                            </label>
                            <Link href={svg.url} target={"_blank"}
                                  className={`flex justify-center ${hovered === index && 'animate-glow-low animate-tech'}`}>
                                <Image src={svg.src} alt={`${svg.name} logo`} width={200} height={200}
                                       className={`w-10 h-10 sm:w-12 sm:h-12`}/>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </Window>
    );
};

export default Technologies;