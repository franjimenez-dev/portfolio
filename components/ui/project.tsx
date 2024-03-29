import React, {useState} from 'react';
import {ProjectData} from "@/lib/definitions";
import Image from "next/image";
import MyImage from "@/components/ui/my-image";
import PrevButton from "@/components/ui/prev-button";
import NextButton from "@/components/ui/next-button";

interface NewProjectProps {
    project: ProjectData;
    type: number;
}

const NewProject: React.FC<NewProjectProps> = ({project, type= 1}) => {
    const [indexActive, setIndexActive] = useState(0);
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

            <div className={"container md:w-full py-10"}>
                <div className={"py-2 relative "}>

                    <div
                        className={`card-animation relative flex flex-col-reverse lg:flex-row justify-center items-center `}
                    >
                        <div className="w-full lg:w-4/6 xl:w-2/5 relative"
                        >

                            {project.images.map((url, index) => {
                                if (indexActive !== index) return null;
                                return (

                                    <div key={index} className="card-right block relative ">
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

                            {project.images.length > 1 && (
                                <>
                                    <div
                                        className={`absolute top-1/2 left-2`}>
                                        <PrevButton btnClassName="w-11 h-11 text-xl " onClickPrev={prevImage}/>

                                    </div>
                                    <div
                                        className={`absolute top-1/2 right-2`}>
                                        <NextButton btnClassName="w-11 h-11 text-xl " onClickNext={prevImage}/>

                                    </div>
                                </>
                            )}
                        </div>
                        <div
                            className={`z-10 -mt-8 lg:px-0 lg:w-[31%] xl:w-[38%] `}>
                            <div
                                className="card-left p-4 sm:p-8 lg:py-14 md:px-10 space-y-3 sm:space-y-5 rounded-3xl ">
                                {/*<CategoryBadgeList categories={categories}/>*/}
                                <div className={"w-full flex justify-start items-center "}>
                                    <a href={project.link} target={"_blank"}>
                                        <Image src={project.logo} alt={project.title} width={250} height={100}
                                               className={"w-[150px] md:w-[200px] lg:w-[250px] h-auto"}/>
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