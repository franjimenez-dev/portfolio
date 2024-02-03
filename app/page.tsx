import AboutMeSection from "@/components/about-me-section";
import ExperienceSection from "@/components/experience-section";
import WorksSection from "@/components/works-section";
import StudiesSection from "@/components/studies-section";
import HeaderSection from "@/components/header-section";

export default function Home() {

    return (
        <div className={"w-full flex flex-col justify-center items-center space-y-16"}>
            <HeaderSection />
            <WorksSection />
            <ExperienceSection />
            <StudiesSection/>
            <AboutMeSection/>
        </div>
    );
}