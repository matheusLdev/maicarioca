'use client';
import Image from 'next/image';
import Weeks from './Weeks/Weeks';
import FanCalendar from '../../../public/assets/icons/leque-calendar.svg';
import { EventsProps } from '@/interface/Event';
import timeZone from '@/utilities/timeZone';

const Calendar: React.FC<EventsProps> = ({ events }) => {
    const currentMonth = new Date().getMonth();
    const getDaysInMonth = (year: number, month: number) =>
        new Date(year, month, 0).getDate();
    const createDaysArray = (year: number, month: number) => {
        const daysInMonth = getDaysInMonth(year, month);
        return Array.from({ length: daysInMonth }, (_, index) => index + 1);
    };
    const daysArray = createDaysArray(new Date().getFullYear(), currentMonth);
    const monthYearString = new Intl.DateTimeFormat('pt-BR', {
        year: 'numeric',
        month: 'long',
    }).format(new Date(new Date().getFullYear(), currentMonth));

    return (
        <section className='min-w-80 max-w-2xl'>
            <table className='bg-white'>
                <thead className='bg-header-footer text-slate-100 uppercase font-bold'>
                    <tr className='border border-black'>
                        <th colSpan={7} className='h-10'>
                            <div className='flex justify-center gap-10 items-center'>
                                <Image
                                    src={FanCalendar}
                                    alt='Detalhe Leque'
                                    className='w-5'
                                />
                                {monthYearString}
                                <Image
                                    src={FanCalendar}
                                    alt='Detalhe Leque'
                                    className='w-5'
                                />
                            </div>
                        </th>
                    </tr>
                    <tr>
                        {[
                            'Domingo',
                            'Segunda-Feira',
                            'Terça-Feira',
                            'Quarta-Feira',
                            'Quinta-Feira',
                            'Sexta-Feira',
                            'Sábado',
                        ].map((day, index) => (
                            <th
                                key={index}
                                className='min-w-12 w-28 h-10 p-2 border border-black text-xs'
                            >
                                <span className='hidden sm:inline'>{day}</span>
                                <span className='sm:hidden'>
                                    {day.charAt(0)}
                                </span>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <Weeks
                        daysArray={daysArray}
                        currentMonth={currentMonth}
                        events={events.reduce((acc, event) => {
                            const currentDate = timeZone(new Date(event.date));
                            const options = {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                                timeZone: 'America/Sao_Paulo',
                            };
                            const key = currentDate.toLocaleDateString(
                                'pt-BR',
                                options as Intl.DateTimeFormatOptions
                            );

                            if (!acc[key]) {
                                acc[key] = [];
                            }
                            acc[key].push(event.title);
                            return acc;
                        }, {} as Record<string, string[]>)}
                    />
                </tbody>
            </table>
        </section>
    );
};

export default Calendar;
