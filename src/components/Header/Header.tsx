'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { roboto_condensed } from '@/app/fonts';
import Navegation from './Navegation/Navegation';

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
            className={`w-full h-20 bg-header-footer fixed z-10 flex justify-around items-center text-slate-100 text-xl animate-fade-in-down transition transform ease-in-out duration-500 
                ${visible ? 'translate-y-0' : '-translate-y-full'}
            `}
        >
            <Link href='#'>
                <h1
                    className={`${roboto_condensed.className} text-5xl hover:text-seal-brown hover:duration-500`}
                >
                    @MaiCarioca
                </h1>
            </Link>
            <Navegation />
        </header>
    );
}
