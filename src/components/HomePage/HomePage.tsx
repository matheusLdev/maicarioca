import Image from 'next/image';
import Instagram from '@/assets/icons/instagram.png';
import MaiShiranui1 from '@/assets/img/mai1.jpeg';
import MaiShiranui2 from '@/assets/img/mai2.jpeg';
import Link from 'next/link';

export default function HomePage() {
    return (
        <main className='w-full text-seal-brown flex justify-center animate-show'>
            <div className='w-full flex flex-col md:flex-row justify-center items-center gap-3'>
                <div className='min-w-72 max-w-xl'>
                    <Image
                        src={MaiShiranui1}
                        alt='Maicarioca Cosplay'
                        className='object-cover'
                    />
                </div>
                <div className='h-full flex flex-col justify-between md:justify-around text-xl text-seal-brown gap-5 px-5 lg:px-0'>
                    <div className='min-w-52 max-w-3xl mx-auto flex flex-col'>
                        <p>
                            Olá pessoal!! Sejam bem vindos. Eu sou a Thay, mais
                            conhecida como Mai Carioca e aqui vou mostrar um
                            pouco sobre meu Hobby: Ser cosplayer. Comecei no
                            hobby faz uns 2 anos e desde então tenho me
                            apaixonado cada vez mais.
                        </p>
                        <Link
                            href='#'
                            className='text-red-link text-base mt-2 hover:underline'
                        >
                            Conheça mais sobre mim
                        </Link>
                    </div>
                    <div className='flex flex-col'>
                        <p className='mb-2'>Me siga no instagram:</p>
                        <Link
                            href='https://www.instagram.com/maicarioca/'
                            className='flex w-32 text-red-link text-base gap-2 hover:underline'
                            target='_blank'
                        >
                            <Image src={Instagram} alt='Logo Instagram' />
                            @maicarioca
                        </Link>
                    </div>
                </div>
                <div className='min-w-72 max-w-xl'>
                    <Image
                        src={MaiShiranui2}
                        alt='Maicarioca Cosplay'
                        className='object-cover'
                    />
                </div>
            </div>
        </main>
    );
}
