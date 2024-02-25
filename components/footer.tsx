import React from 'react';

const Footer = () => {
    return (
            <footer className="w-full border-t flex h-[3rem] py-6 items-center justify-around md:justify-center md:space-x-14 font-semibold z-10 bg-black/40">
                <span className={"select-none gradient-text"}>Fran Jiménez ©️ 2024</span>
                <span className={"flex gradient-text-inverse"}><a href={"mailto:franjimenez.dev@gmail.com"}>@ Contactar</a></span>
            </footer>
    );
};

export default Footer;