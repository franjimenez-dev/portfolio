'use client';
import React, {ReactNode, useState} from 'react';
import Navbar from "@/components/navbar";
import { ActiveLinkContext } from '@/contexts/ActiveLinkContext';

interface NavigationLogicProps {
    children: ReactNode;
}
const NavigationLogic: React.FC<NavigationLogicProps> = ({ children }) => {
    const [activeLink, setActiveLink] = useState('');

    return (
        <ActiveLinkContext.Provider value={{ activeLink, setActiveLink }}>
            <Navbar/>
            <main className={""}>
                {children}
            </main>
        </ActiveLinkContext.Provider>
    );
};

export default NavigationLogic;