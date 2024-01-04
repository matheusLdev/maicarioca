import Image from 'next/image';
import Instagram from '@/assets/icons/instagram.png';
import MaiShiranui1 from '@/assets/img/mai1.jpeg';
import MaiShiranui2 from '@/assets/img/mai2.jpeg';
import Link from 'next/link';

export default function HomePage() {
    return (
        <main className='w-full text-seal-brown flex justify-center animate-show'>
            <div className='w-full flex justify-center items-center gap-3'>
                <div className='basis-1/3'>
                    <Image
                        src={MaiShiranui1}
                        alt='Maicarioca Cosplay'
                        className='object-cover'
                    />
                </div>
                <div className='basis-1/3 h-4/5 flex flex-col justify-between text-xl text-seal-brown'>
                    <div className='flex flex-col'>
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
                <div className='basis-1/3'>
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
