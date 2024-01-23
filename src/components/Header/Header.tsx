'use client';
import { useEffect, useState } from 'react';
import Navigation from './Navigation/Navigation';

export default function Header() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const header = document.querySelector('header');
            const headerHeight = header?.offsetHeight || 0;
            setVisible(
                prevScrollPos > currentScrollPos ||
                    currentScrollPos < headerHeight
            );
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible]);

    return (
        <header
            id='inicio'
            className={`w-full h-20 bg-header-footer fixed z-10 flex justify-between items-center px-5 text-slate-100 text-xl transition transform ease-in-out duration-500 
                ${visible ? 'translate-y-0' : '-translate-y-full'}
            `}
        >
            <Navigation />
        </header>
    );
}
