import {StaticImageData} from "next/image";

export type ProjectData = {
    title: string;
    description: string;
    images: (string | StaticImageData)[];
    technologies: string[];
    link: string;
    type: 1 | 2;
}