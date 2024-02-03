import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const useActiveLinkOnScroll = (ids: string[]) => {
    const [activeLink, setActiveLink] = useState('');

    const navigateTo = (id: string) => {
        if (id === 'inicio') {
            gsap.to(window, {duration: 1, scrollTo: {y: 0, autoKill: false, onAutoKill: () => setActiveLink(id)}});
        } else {
            const element = document.getElementById(id);
            if (element) {
                const top = element.offsetTop;
                gsap.to(window, {duration: 1, scrollTo: {y: top, autoKill: false, onAutoKill: () => setActiveLink(id)}});
            }
        }
    };

    useEffect(() => {
        if (!Array.isArray(ids)) {
            console.error('ids must be an array');
            return;
        }

        const onScroll = () => {
            let currentLink = '';
            ids.forEach((id, index) => {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const nextElement = ids[index + 1] ? document.getElementById(ids[index + 1]) : null;
                    const nextRect = nextElement ? nextElement.getBoundingClientRect() : null;
                    const offset = 300; // Adjust this value to change when the section change is triggered
                    if (id === 'inicio' && nextRect && nextRect.top > offset) {
                        currentLink = id;
                    } else if ((rect.top <= offset && (!nextRect || nextRect.top > offset)) || (index === ids.length - 1 && rect.bottom <= window.innerHeight)) {
                        currentLink = id;
                    }
                }
            });
            setActiveLink(currentLink);
        };

        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [ids]);

    return { activeLink, navigateTo };
};