import React, {useState} from 'react';
import {ProjectData} from "@/lib/definitions";
import PrevNextButtons from "@/components/ui/prev-next-buttons";
import Image from "next/image";
import MyImage from "@/components/ui/my-image";

interface NewProjectProps {
    project: ProjectData;
}

const NewProject: React.FC<NewProjectProps> = ({project}) => {
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
        <div className={"pt-10 pb-16 md:py-16 lg:pb-28 lg:pt-20 relative"}>

            <div
                className={`nc-CardLarge1 nc-CardLarge1--hasAnimation relative flex flex-col-reverse md:flex-row justify-end`}
            >
                <div
                    className="md:absolute z-10 md:start-0 md:top-1/2 md:-translate-y-1/2 w-full -mt-8 md:mt-0 px-3 sm:px-6 md:px-0 md:w-3/5 lg:w-1/2 xl:w-2/5">
                    <div
                        className="nc-CardLarge1__left p-4 sm:p-8 xl:py-14 md:px-10 bg-white/40 dark:bg-neutral-900/40 backdrop-filter backdrop-blur-lg shadow-lg dark:shadow-2xl rounded-3xl space-y-3 sm:space-y-5 ">
                        {/*<CategoryBadgeList categories={categories}/>*/}

                        <h2 className="nc-card-title text-base sm:text-xl lg:text-2xl font-semibold ">
                            {project.title}
                        </h2>

                        <div>
                            <p className="text-sm sm:text-base text-white ">
                                {project.description}
                            </p>
                        </div>
                    </div>
                    <div className="p-4 sm:pt-8 sm:px-10">
                        <PrevNextButtons
                            btnClassName="w-11 h-11 text-xl"
                            onClickNext={nextImage}
                            onClickPrev={prevImage}
                        />
                    </div>
                </div>
                <div className="w-full md:w-4/5 lg:w-2/3">

                    {project.images.map((url, index) => {
                        if (indexActive !== index) return null;
                        return (
                            <div key={index} className="nc-CardLarge1__right block relative">
                                <MyImage
                                    containerClassName="aspect-w-16 aspect-h-12 sm:aspect-h-9 md:aspect-h-14 lg:aspect-h-10 2xl:aspect-h-9 relative"
                                    className="absolute inset-0 object-cover rounded-3xl"
                                    src={url}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    );
};

export default NewProject;