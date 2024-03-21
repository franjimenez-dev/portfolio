import React from 'react';

const Footer = () => {

    return (
            <footer className="w-full border-t flex h-[3rem] py-6 items-center justify-around md:justify-center md:space-x-14 font-semibold z-10 bg-black/40 select-none">
                <span className={"gradient-text"}><a href={"https://www.linkedin.com/in/franjimenez-dev/"} target={"_blank"} className={" tech-highlights"}>Fran Jiménez</a> ©️ 2024</span>
                <span className={"flex gradient-text-inverse tech-highlights"}><a href={"mailto:franjimenez.dev@gmail.com"}>@ Contactar</a></span>
            </footer>
    );

};

export default Footer;