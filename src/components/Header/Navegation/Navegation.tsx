import Image from 'next/image';
import Link from 'next/link';
import Fan from '@/assets/icons/closed-fan.svg';

export default function Navegation() {
    const navigationItems = [
        { title: 'Home', url: '#' },
        { title: 'Sobre Mim', url: '#' },
        { title: 'Galeria', url: '#' },
        { title: 'Eventos', url: '#' },
        { title: 'Premiações', url: '#' },
    ];

    return (
        <nav>
            <ul className='flex gap-2'>
                {navigationItems.map(({ title, url }, index) => (
                    <li key={index} className='flex gap-2'>
                        <Link
                            href={url}
                            className='hover:text-seal-brown hover:duration-500'
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
    );
}
