import AboutMeSection from "@/components/contact-section";
import ExperienceSection from "@/components/experience-section";
import WorksSection from "@/components/works-section";
import StudiesSection from "@/components/studies-section";
import HeaderSection from "@/components/header-section";
import Footer from "@/components/footer";

export default function Home() {

    return (
        <div className={"flex flex-col justify-center items-center space-y-16 z-10"}>
            <HeaderSection />
            <div className={"relative w-full"}>
                <div className={"absolute top-0 left-0 w-full h-full z-10  py-96"}/>
                <WorksSection />
            </div>
            <ExperienceSection />
            <AboutMeSection/>
            <Footer/>
        </div>
    );
}