import Image from 'next/image';
import Instagram from '@/assets/icons/instagram.png';
import MaiCarioca1 from '@/assets/img/maicarioca1.jpeg';
import MaiCarioca2 from '@/assets/img/maicarioca2.jpeg';
import Link from 'next/link';

export default function HomePage() {
    return (
        <main className='w-full text-seal-brown flex justify-center'>
            <div className='w-11/12 flex justify-center items-center gap-6'>
                <Image
                    src={MaiCarioca1}
                    alt='Maicarioca Cosplay'
                    className='h-photo-home-page rounded-lg'
                />
                <div className='h-photo-home-page flex flex-col justify-around text-xl text-seal-brown'>
                    <div className='flex flex-col gap-1'>
                        <p>
                            Olá pessoal!! Sejam bem vindos. Eu sou a Thay, mais
                            conhecida como Mai Carioca e aqui vou mostrar um
                            pouco sobre meu Hobby: Ser cosplayer. Comecei no
                            hobby faz uns 2 anos e desde então tenho me
                            apaixonado cada vez mais.
                        </p>
                        <Link href='#' className='text-red-link text-base m-1'>
                            Conheça mais sobre mim
                        </Link>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p>Me siga no instagram:</p>
                        <Link href='#' className='flex text-red-link text-base'>
                            <Image
                                className='m-1'
                                src={Instagram}
                                alt='Logo Instagram'
                            />
                            @maicarioca
                        </Link>
                    </div>
                </div>
                <Image
                    src={MaiCarioca2}
                    alt='Maicarioca Cosplay'
                    className='h-photo-home-page rounded-lg'
                />
            </div>
        </main>
    );
}
