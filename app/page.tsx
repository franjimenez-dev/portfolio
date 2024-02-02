import AboutMeSection from "@/components/about-me-section";
import ExperienceSection from "@/components/experience-section";
import ProyectsSection from "@/components/ui/proyects-section";

export default function Home() {

    return (
        <div className={"w-full flex flex-col justify-center items-center space-y-16"}>
            <AboutMeSection/>
            <ExperienceSection />
            <ProyectsSection />
        </div>
    );
}