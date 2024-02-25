import {ProjectData} from "@/lib/definitions";
export const timewarp: ProjectData = {
    title: "TimeWarp",
    description: `<span class="gradient-text font-bold">Timewarp</span> es una página de booking ficticia sobre viajes en el tiempo. Con este proyecto pude consolidar mis conocimientos en <span class="text-pastel-violet font-bold">Next.js</span> y <span class="gradient-text font-bold">TailwindCSS</span>, así como iniciarme en animaciones con JavaScript con la librería <span class="gradient-text font-bold">GSAP</span> y en hosteo de imagenes con <span class="gradient-text font-bold">S3</span>.`,
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
    logo: "/projects/timewarp/logo.svg",
    type: 1
}

export const metazoa: ProjectData = {
    title: "Metazoa",
    description: `<span class="gradient-text font-bold">MetaZoa</span> es una página web en <span class="gradient-text font-bold">Laravel</span> que facilita la comunicación entre protectoras de animales y personas interesadas en adoptar. La página cuenta con un chat para contactar en tiempo real que utiliza <span class="text-pastel-violet font-bold">Livewire</span> y <span class="gradient-text font-bold">Pusher</span>.`,
    images: [
        "/projects/metazoa/1.webp",
        // "/projects/metazoa/2.webp",
        // "/projects/metazoa/3.webp",
        // "/projects/metazoa/4.webp",
        // "/projects/metazoa/5.webp",
        // "/projects/metazoa/6.webp",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Livewire", "Pusher"],
    link: "https://www.metazoa.app",
    logo: "/projects/metazoa/logo2.png",
    type: 2
}

