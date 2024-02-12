import React from 'react';
import Image from "next/image";
import SVGS from "@/lib/svgs";
const Technologies = () => {
    return (

        <div className={"grid col-span-1 justify-center w-full"}>
            <div className={"text-[#FDE68A] w-full"}>
                <h1 className={"text-4xl text-center mt-12 font-semibold font-mono border border-[#FDE68A]"}>
                    Tecnologías
                </h1>
            </div>
            <div className={"grid grid-cols-2 sm:grid-cols-8 md:grid-cols-6 mt-10"}>
                {
                    SVGS.map((svg, index) => (
                        <div key={index} className={"justify-center items-center mb-8 grid grid-cols-1"}>
                            <label className={"font-bold text-center"}>
                                {svg.name}
                            </label>
                            <div className={"flex justify-center"}>
                                <Image src={svg.src} alt={`${svg.name} logo`} width={200} height={200}
                                       className={"w-12 h-12 sm:w-16 sm:h-16"}/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Technologies;