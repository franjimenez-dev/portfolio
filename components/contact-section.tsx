'use client';
import React from 'react';
import { useActiveLinkOnScroll } from '@/hooks/useActiveLinkOnScroll';
import Window from "@/components/ui/window";

const ContactSection = () => {
    const { activeLink, navigateTo } = useActiveLinkOnScroll(['contacto']);

    return (
        <section id="contacto" title="Contacto" className={"my-5 w-full"}>
            <div className={"flex justify-center mt-10"}>
                <Window title={"Sobre mi.css"}>
                    <div className={"p-12"}>
                        <h2 className={"text-3xl font-semibold font-mono text-[#FDE68A] mb-4"}>
                            Sobre mí y contacto
                        </h2>
                        <p className={"text-xl font-mono"}>
                            Soy un desarrollador de software con más de 10 años de experiencia en desarrollo web,
                            aplicaciones móviles y aplicaciones de escritorio. He trabajado con tecnologías como React,
                            Next.js, TailwindCSS, Node.js, Express.js, MongoDB, MySQL, PostgreSQL, PHP, Laravel, entre
                            otras.
                        </p>

                        <div className="flex flex-col mt-8 space-y-4">
                            <div className="flex justify-between space-x-4">
                                <div className="w-1/2">
                                    <label htmlFor="name" className="text-[#FDE68A]">Nombre</label>
                                    <input type="text" id="name" name="name"
                                           className="p-2 border-2 border-[#FDE68A] rounded-md bg-transparent text-[#FDE68A] shadow-md w-full"/>
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="email" className="text-[#FDE68A]">Correo electrónico</label>
                                    <input type="email" id="email" name="email"
                                           className="p-2 border-2 border-[#FDE68A] rounded-md bg-transparent text-[#FDE68A] shadow-md w-full"/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="text-[#FDE68A]">Mensaje</label>
                                <textarea id="message" name="message"
                                          className="p-2 border-2 border-[#FDE68A] rounded-md bg-transparent text-[#FDE68A] shadow-md w-full"></textarea>
                            </div>
                        </div>
                    </div>
                </Window>
            </div>
        </section>
    );
}

export default ContactSection;