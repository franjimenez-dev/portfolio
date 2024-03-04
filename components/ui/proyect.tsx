import React, {useState} from 'react';
import {ProjectData} from "@/lib/definitions";
import PrevNextButtons from "@/components/ui/prev-next-buttons";
import {motion} from "framer-motion";
import Image from "next/image";
import MyImage from "@/components/ui/my-image";

interface NewProjectProps {
    project: ProjectData;
    type: number;
}

const NewProject: React.FC<NewProjectProps> = ({project, type= 1}) => {
    const [indexActive, setIndexActive] = useState(0);
    const [isHovering, setIsHovering] = useState(false)
    const nextImage = () => {
        setIndexActive((state) => {
            if (state >= project.images.length - 1) {
                return 0;
            }
            return state + 1;
        });
    };

    const prevImage = () => {
        setIndexActive((state) => {
            if (state === 0) {
                return project.images.length  - 1;
            }
            return state - 1;
        });
    };
    return (
        <>

            {/*<div className={`absolute inset-y-0 translate-x-1/2 ${type === 1 ? 'end-1/2' : 'end-0'} w-screen translate-x-0 bg-gradient-low-opacity opacity-5 blur-3xl ${type === 1 ? 'lg:rounded-e-[40px]' : 'lg:rounded-s-[40px]'} -z-10`}></div>*/}
            {/*<div className={`absolute inset-y-0 translate-x-1/2 ${type === 1 ? 'end-1/2' : 'end-0'} w-screen translate-x-0 bg-[#010206]/70  my-bg-image  ${type === 1 ? 'lg:rounded-e-[40px]' : 'lg:rounded-s-[40px]'} -z-10`}></div>*/}

            <div className={"container md:w-full py-10"}>
                <div className={"py-2 " +
                    // " pb-16 md:py-16 lg:pb-28 lg:pt-20 " +
                    "relative "}>

                    <div
                        className={`nc-CardLarge1 nc-CardLarge1--hasAnimation relative flex flex-col-reverse lg:flex-row justify-center items-center `}
                    >
                        <div className="w-full lg:w-4/6 xl:w-2/5 relative"
                             onMouseEnter={() => setIsHovering(true)}
                             onMouseLeave={() => setIsHovering(false)}
                        >

                            {project.images.map((url, index) => {
                                if (indexActive !== index) return null;
                                return (

                                    <div key={index} className="nc-CardLarge1__right block relative ">
                                        <a href={project.link} target={"_blank"}>

                                            <MyImage
                                                containerClassName="aspect-w-16 aspect-h-9 relative "
                                                className="absolute"
                                                src={url}
                                                alt={project.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                priority
                                            />
                                        </a>
                                    </div>
                                )
                            })
                            }

                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: isHovering ? 1 : 0}}
                                transition={{duration: 0.4}}
                                className={`absolute top-1/2 w-full`}>
                                {project.images.length > 1 && (
                                    <PrevNextButtons
                                        btnClassName="w-11 h-11 text-xl "
                                        onClickNext={nextImage}
                                        onClickPrev={prevImage}
                                    />
                                )}
                            </motion.div>
                        </div>
                        <div
                            className={`z-10 -mt-8 lg:px-0 lg:w-[31%] xl:w-[38%] `}>
                            <div
                                className="nc-CardLarge1__left p-4 sm:p-8 lg:py-14 md:px-10 space-y-3 sm:space-y-5 rounded-3xl ">
                                {/*<CategoryBadgeList categories={categories}/>*/}
                                <div className={"w-full flex justify-start items-center "}>
                                    <a href={project.link} target={"_blank"}>
                                        <Image src={project.logo} alt={project.title} width={250} height={100}
                                               className={"w-[200px] lg:w-[250px] h-auto"}/>
                                    </a>
                                </div>

                                <div>
                                    <p className="text-sm sm:text-base lg:text-lg text-white text-pretty "
                                       dangerouslySetInnerHTML={{__html: project.description}}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default NewProject;