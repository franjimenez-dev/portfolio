'use client';
import React from 'react';
import {useActiveLinkOnScroll} from "@/hooks/useActiveLinkOnScroll";
import Image from "next/image";

const ProyectsSection = () => {
    const { activeLink, navigateTo } = useActiveLinkOnScroll(['inicio']);

    return (
    <header id="inicio" title="Inicio" className={"my-5 pt-16 sm:pt-36"}>
        <div className=" sm:flex-none mx-2 sm:mx-8">
            <div className="hidden sm:block  bg-yellow-200 shadow-2xl shadow-yellow-200"
                 style={{
                     float: 'left',
                     shapeOutside: 'circle(50%)',
                     borderRadius: '50%',
                     marginRight: '3rem',
                     overflow: 'hidden'
                 }}>
                <Image
                    src="/owner.jpg"
                    alt="Avatar"
                    width={900}
                    height={900}
                    className="w-[200px] md:w-[275px] h-[200px] md:h-[275px] rounded-full border-4 bg-yellow-200 border-yellow-200 "
                />
            </div>
            <div className="">
                <div className={"hidden sm:visible sm:block "}>
                    <h1 className="text-4xl md:text-5xl">
                        <span className="text-yellow-200 font-bold font-mono whitespace-nowrap"> Fran Jiménez</span>
                    </h1>
                    <h2 className="flex-shrink text-2xl md:text-3xl my-2 font-semibold font-mono whitespace-nowrap"> 🚀
                        Desarrollador web
                    </h2>
                </div>
                <div className={"visible sm:hidden flex justify-start items-center sm:flex-none"}>
                    <div className="mx-0 sm:mx-16 w-20 h-20">
                        <Image
                            src="/owner.jpg"
                            alt="Avatar"
                            width={75}
                            height={75}
                            className="rounded-full border-4 bg-yellow-200 border-yellow-200 "
                        />
                    </div>
                    <div className={"visible sm:hidden"}>
                        <h1 className="text-4xl sm:text-5xl">
                            <span className="text-yellow-200 font-bold font-mono ml-2 whitespace-nowrap"> Fran Jiménez</span>
                        </h1>
                        <h2 className="flex flex-shrink text-xl sm:text-3xl my-2 font-semibold font-mono whitespace-nowrap"> 🚀
                            Desarrollador web
                        </h2>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at
                    expedita minus
                    necessitatibus reiciendis, soluta. Amet aperiam architecto assumenda beatae, dignissimos dolorem
                    enim est labore odit, saepe sed sunt vel? Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Ab cum debitis deleniti eaque, est et, eum harum maxime minus nulla officiis quia quidem
                    quo sit ut, voluptatem voluptatibus. Et, nihil! Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Aspernatur at
                    expedita minus
                    necessitatibus reiciendis, soluta. Amet aperiam architecto assumenda beatae, dignissimos dolorem
                    enim est labore odit, saepe sed sunt vel? Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Ab cum debitis deleniti eaque, est et, eum harum maxime minus nulla officiis quia quidem
                    quo sit ut, voluptatem voluptatibus. Et, nihil!</p>
            </div>
            <div className="clear-both"></div>
        </div>
    </header>
)
    ;
};

export default ProyectsSection;