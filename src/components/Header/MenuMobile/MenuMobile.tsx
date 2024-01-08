import Link from 'next/link';

interface MenuItem {
    title: string;
    url: string;
}

interface MenuMobileProps {
    isOpen: boolean;
    toggleMenu: () => void;
    navigationItems: MenuItem[];
}

export default function MenuMobile({
    isOpen,
    toggleMenu,
    navigationItems,
}: MenuMobileProps) {
    return (
        <ul
            className={`md:hidden absolute transition-menu w-full top-20 left-0 flex flex-col bg-mobile
              ${isOpen ? 'open' : 'close'}`}
        >
            {navigationItems.map(({ title, url }, index) => (
                <li key={index} className='text-center '>
                    <Link
                        href={url}
                        className='block border-b-4 hover:border-seal-brown hover:text-seal-brown hover:duration-500 p-2'
                        onClick={toggleMenu}
                    >
                        {title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
