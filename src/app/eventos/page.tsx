import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Calendar from '@/components/Calendar/Calendar';
import Events from '@/components/Events/Events';
import timeZone from '@/utilities/timeZone';

export const events = [
    {
        date: timeZone(new Date(2024, 1, 2)),
        title: 'Bailão Geek',
        address:
            'Mansão L&D, Rua André Cavalcanti, 58 - Centro, Rio de Janeiro - RJ',
    },
    {
        date: timeZone(new Date(2024, 1, 18)),
        title: 'Cosfantasy Fest',
        address:
            'Tijuca Tênis Clube, Rua Conde de Bonfim, 451 - Tijuca, Rio de Janeiro - RJ',
    },
    {
        date: timeZone(new Date(2024, 1, 25)),
        title: 'Video-Game Hall',
        address:
            'Biblioteca Parque Estadual, Avenida Presidente Vargas, 1261 - Centro, Rio de Janeiro - RJ',
    },
];
const Event = () => {
    return (
        <>
            <Header />
            <div className='relative top-20 z-0'>
                <main className='w-full min-h-screen-10 text-seal-brown pt-5 animate-show'>
                    <h2 className='font-bold text-center text-3xl mb-4'>
                        Calendário de Eventos
                    </h2>
                    <div className='w-full flex flex-wrap justify-around gap-5 my-10 mx-auto text-xs '>
                        <Calendar events={events} />
                        <Events events={events} />
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Event;
