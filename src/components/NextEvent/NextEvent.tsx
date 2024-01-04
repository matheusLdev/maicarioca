import Image from 'next/image';
import fan from '@/assets/icons/open-fan.svg';

export default function NextEvent() {
    return (
        <section className='h-18 text-2xl text-seal-brown animate-fade-in-up'>
            <div className='h-full flex items-center justify-center gap-5'>
                <Image src={fan} alt='Leque' />
                <h2 className='py-2'>
                    Próximo Evento: Imperial Geek Fest - 13/01/2024
                </h2>
                <Image src={fan} alt='Leque' />
            </div>
        </section>
    );
}
