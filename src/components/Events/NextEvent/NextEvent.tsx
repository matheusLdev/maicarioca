import Image from 'next/image';
import fan from '../../../../public/assets/icons/open-fan.svg';
import { events } from '@/app/eventos/page';
import { EventsProps } from '@/interface/Event';

const getNextEvent = (events: EventsProps['events']) => {
    const currentDate = new Date();
    currentDate.setHours(currentDate.getHours() - 3);

    const futureEvents = events.filter((event) => event.date >= currentDate);
    const nextEvent = futureEvents.sort(
        (a, b) => a.date.getTime() - b.date.getTime()
    )[0];

    return nextEvent;
};
const NextEvent = () => {
    const nextEvent = getNextEvent(events);
    return (
        <section className='h-18 text-center text-sm sm:text-base md:text-2xl text-seal-brown'>
            <div className='h-full flex items-center justify-center gap-1 md:gap-5 animate-fade-in-up'>
                <Image src={fan} alt='Leque' />
                {nextEvent ? (
                    <h2 className='py-2'>
                        Próximo Evento: {nextEvent.title} em{' '}
                        {nextEvent.date.toLocaleDateString()}
                    </h2>
                ) : (
                    <h2 className='py-2'>
                        Nenhum evento futuro programado no momento.
                    </h2>
                )}
                <Image src={fan} alt='Leque' />
            </div>
        </section>
    );
};

export default NextEvent;
