import Image from 'next/image';
import CurrentDay from '../../../../public/assets/icons/current-day.svg';
import Fan from '../../../../public/assets/icons/leque-calendar.svg';
import { WeeksProps } from '@/interface/WeeksProps';

const Weeks: React.FC<WeeksProps> = ({ daysArray, currentMonth, events }) => {
    const renderWeeks = () => {
        const weeks = [];
        let currentWeek = [];

        const startDayOfWeek = new Date(
            new Date().getFullYear(),
            currentMonth,
            1
        ).getDay();

        let offset = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;

        for (let i = 0; i < offset; i++) {
            currentWeek.push(
                <td
                    key={`empty-${i}`}
                    className='h-14 border border-black'
                ></td>
            );
        }
        for (let i = 0; i <= daysArray.length; i++) {
            const day = daysArray[i - 1];
            const dayOfWeek = (offset + i) % 7;
            const currentDate = new Date(
                new Date().getFullYear(),
                currentMonth,
                day,
                3
            );
            const today = new Date();
            today.setHours(today.getHours() - 3);
            const event = events[currentDate.toLocaleDateString()];
            const isToday =
                today.toLocaleDateString() === currentDate.toLocaleDateString();
            const eventTitles = event || [];
            currentWeek.push(
                <td
                    key={i}
                    className={`h-14 border border-black ${
                        dayOfWeek === 0 ? 'bg-red-200' : ''
                    }`}
                >
                    <div className='h-full flex justify-start items-start'>
                        {day}
                        {isToday ? (
                            <Image
                                src={CurrentDay}
                                alt='Dia atual'
                                className='w-5 mt-1'
                            />
                        ) : (
                            ''
                        )}
                        {eventTitles.map((title, index) => (
                            <Image
                                key={index}
                                src={Fan}
                                alt={title}
                                className='min-w-5 max-w-10 pt-5'
                            />
                        ))}
                    </div>
                </td>
            );
            if (dayOfWeek === 6 || i === daysArray.length) {
                const remainingDays = 7 - currentWeek.length;
                for (let j = 0; j < remainingDays; j++) {
                    currentWeek.push(
                        <td
                            key={`empty-${i + j}`}
                            className='h-14 border border-black text-right opacity-25'
                        >
                            <div className='h-full flex justify-start items-start'>
                                {j + 1}
                            </div>
                        </td>
                    );
                }
                weeks.push(
                    <tr key={weeks.length} className='h-14 border border-black'>
                        {currentWeek}
                    </tr>
                );
                currentWeek = [];
            }
        }

        return weeks;
    };
    return <>{renderWeeks()}</>;
};
export default Weeks;
