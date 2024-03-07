import AboutMeSection from "@/components/contact-section";
import ExperienceSection from "@/components/experience-section";
import WorksSection from "@/components/works-section";
import StudiesSection from "@/components/studies-section";
import HeaderSection from "@/components/header-section";
import Footer from "@/components/footer";

export default function Home() {

    return (
        <div className={"flex flex-col justify-center items-center space-y-16 z-10 select-none"}>
            <HeaderSection />
            <WorksSection />
            <ExperienceSection />
            <AboutMeSection/>
            <Footer/>
        </div>
    );
}