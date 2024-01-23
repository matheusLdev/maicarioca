import { EventsProps } from '@/interface/Event';
import FanCalendar from '../../../public/assets/icons/leque-calendar.svg';
import Image from 'next/image';

const Events: React.FC<EventsProps> = ({ events }) => {
    const parseDateString = (dateString: string): Date => {
        const [day, month, year] = dateString.split('/').map(Number);
        const parsedDate = new Date(year, month - 1, day);
        parsedDate.setHours(parsedDate.getHours() - 3);

        return parsedDate;
    };

    const formatDate = (date: string | Date) => {
        const eventDate =
            typeof date === 'string' ? parseDateString(date) : date;

        const day = ('0' + eventDate.getDate()).slice(-2);
        const month = ('0' + (eventDate.getMonth() + 1)).slice(-2);
        const year = eventDate.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <section className='min-w-72 max-w-2xl flex flex-col gap-5'>
            {events.map((event, index) => (
                <div
                    key={index}
                    className='w-full bg-white flex items-center gap-4 p-2 shadow rounded'
                >
                    <div className='max-w-10'>
                        <Image
                            src={FanCalendar}
                            alt='Marcador de Evento Leque'
                            className=''
                        />
                    </div>
                    <div className='flex flex-col gap-2 text-lg'>
                        <p>
                            {formatDate(event.date)} - {event.title}
                        </p>
                        <p>Endereço: {event.address}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};
export default Events;
