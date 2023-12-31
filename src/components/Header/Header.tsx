import Image from 'next/image';
import Link from 'next/link';
import { roboto_condensed } from '@/app/fonts';
import Fan from '@/assets/icons/closed-fan.svg';

export default function Header() {
    return (
        <header className='w-full h-20 bg-header-footer flex justify-around items-center text-slate-100 antialiased text-xl'>
            <Link href='#'>
                <h1 className={`${roboto_condensed.className} text-5xl`}>
                    @MaiCarioca
                </h1>
            </Link>
            <nav>
                <ul className='flex gap-2'>
                    <li className='flex gap-2'>
                        <Link href='#'>Home</Link>
                        <Image src={Fan} alt='Leque Fechado' />
                    </li>
                    <li className='flex gap-2'>
                        <Link href='#'>Sobre Mim</Link>
                        <Image src={Fan} alt='Leque Fechado' />
                    </li>
                    <li className='flex gap-2'>
                        <Link href='#'>Galeria</Link>
                        <Image src={Fan} alt='Leque Fechado' />
                    </li>
                    <li className='flex gap-2'>
                        <Link href='#'>Eventos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
