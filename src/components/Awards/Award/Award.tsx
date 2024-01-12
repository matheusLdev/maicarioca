import HalfFan from '../../../../public/assets/icons/half-open-fan.svg';
import Image from 'next/image';
import GeekIguacu from '../../../../public/assets/awards/premiacao-iguacu-geek.png';
import ParkGeek from '../../../../public/assets/awards/premiacao-parque-geek.png';
import AnimeTopGeek from '../../../../public/assets/awards/premiacao-anime-top-geek.png';

export default function Award() {
    const awards = [
        { src: GeekIguacu, event: 'Geek Iguaçu Games', place: '1° Lugar' },
        { src: ParkGeek, event: 'Parque Geek Cosplay', place: '2° Lugar' },
        { src: AnimeTopGeek, event: 'Anime Top Geek', place: '3° Lugar' },
    ];
    return (
        <div className='flex flex-wrap md:flex-nowrap items-center justify-center gap-20'>
            {awards.map((award, index) => (
                <div key={index} className='relative w-1/3 min-w-60'>
                    <Image
                        src={award.src}
                        alt={`Prêmio ${index + 1}`}
                        className='rounded-lg'
                    />
                    <div className='absolute -top-10 left-0 right-0 text-center bg-header-footer p-2 rounded'>
                        <h3 className='text-lg font-semibold mb-2'>
                            {award.event}
                        </h3>
                        <div className='flex justify-center'>
                            <Image src={HalfFan} alt='Leque meio aberto' />
                            <p className='mx-2'>{award.place}</p>
                            <Image src={HalfFan} alt='Leque meio aberto' />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
