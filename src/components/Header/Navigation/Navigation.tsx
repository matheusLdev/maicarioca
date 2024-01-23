import { useState } from 'react';
import { roboto_condensed } from '@/app/fonts';
import Image from 'next/image';
import Link from 'next/link';
import Fan from '../../../../public/assets/icons/closed-fan.svg';
import Menu from '../../../../public/assets/icons/menu-mobile.svg';
import ClosedMenu from '../../../../public/assets/icons/closed-menu-mobile.svg';
import MenuMobile from '../MenuMobile/MenuMobile';

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigationItems = [
        { title: 'Página Inicial', url: '/' },
        { title: 'Sobre Mim', url: '/sobre' },
        { title: 'Galeria', url: '/galeria' },
        { title: 'Eventos', url: '/eventos' },
        { title: 'Premiação', url: '/#premiacao' },
    ];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <Link href='#inicio' onClick={toggleMenu}>
                <h1
                    className={`${roboto_condensed.className} text-4xl md:text-5xl hover:text-seal-brown hover:duration-500`}
                >
                    @MaiCarioca
                </h1>
            </Link>
            <nav>
                <div className='md:hidden'>
                    <button onClick={toggleMenu}>
                        {menuOpen ? (
                            <Image src={ClosedMenu} alt='Fechar Menu Mobile' />
                        ) : (
                            <Image src={Menu} alt='Menu Mobile' />
                        )}
                    </button>
                </div>
                <MenuMobile
                    isOpen={menuOpen}
                    toggleMenu={toggleMenu}
                    navigationItems={navigationItems}
                />
                <ul className={`hidden md:flex md:gap-2`}>
                    {navigationItems.map(({ title, url }, index) => (
                        <li key={index} className='flex items-center gap-2'>
                            <Link
                                href={url}
                                className='text-center hover:text-seal-brown hover:duration-500'
                            >
                                {title}
                            </Link>
                            {index !== navigationItems.length - 1 && (
                                <Image src={Fan} alt='Leque Fechado' />
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
