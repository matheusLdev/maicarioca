import Image from 'next/image';
import fan from '../../../../public/assets/icons/open-fan.svg';

export default function NextEvent() {
    return (
        <section className='h-18 text-center text-sm sm:text-base md:text-2xl text-seal-brown'>
            <div className='h-full flex items-center justify-center gap-1 md:gap-5 animate-fade-in-up'>
                <Image src={fan} alt='Leque' />
                <h2 className='py-2'>
                    Próximo Evento: Imperial Geek Fest - 13/01/2024
                </h2>
                <Image src={fan} alt='Leque' />
            </div>
        </section>
    );
}
