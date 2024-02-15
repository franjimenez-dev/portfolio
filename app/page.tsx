import AboutMeSection from "@/components/contact-section";
import ExperienceSection from "@/components/experience-section";
import WorksSection from "@/components/works-section";
import StudiesSection from "@/components/studies-section";
import HeaderSection from "@/components/header-section";

export default function Home() {

    return (
        <div className={"flex flex-col justify-center items-center space-y-16 z-10 mb-20"}>
            <HeaderSection />
            <WorksSection />
            <ExperienceSection />
            <AboutMeSection/>
        </div>
    );
}