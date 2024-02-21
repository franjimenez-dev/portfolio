import {ProjectData} from "@/lib/definitions";
export const timewarp: ProjectData = {
    title: "TimeWarp",
    description: `Timewarp es una página de booking ficticia sobre viajes en el tiempo, al pasado y al futuro. Con está página pude consolidar mis conocimientos en Next.js y TailwindCSS, así como introducirme en animaciones con JavaScript con la librería GSAP. La página es completamente responsive y cuenta con un diseño minimalista y moderno.`,
    images: [
        "/projects/timewarp/1.webp",
        "/projects/timewarp/2.webp",
        "/projects/timewarp/3.webp",
        "/projects/timewarp/4.webp",
        "/projects/timewarp/5.webp",
        "/projects/timewarp/6.webp",
        "/projects/timewarp/7.webp",
    ],
    technologies: ["Next.js", "TypeScript","Tailwind.CSS", "PostgreSQL", "AWS S3", "GSAP"],
    link: "https://www.timewarp.es",
    type: 1
}

export const metazoa: ProjectData = {
    title: "Metazoa",
    description: `Metazoa es una página web en Laravel que facilita la comunicación entre protectoras de animales y personas interesadas en adoptar. La página cuenta con un chat para contactar en tiempo real que utiliza Livewire y Pusher.`,
    images: [
        "/projects/metazoa/1.webp",
        "/projects/metazoa/2.webp",
        "/projects/metazoa/3.webp",
        "/projects/metazoa/4.webp",
        "/projects/metazoa/5.webp",
        "/projects/metazoa/6.webp",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Livewire", "Pusher"],
    link: "https://www.metazoa.app",
    type: 2
}

