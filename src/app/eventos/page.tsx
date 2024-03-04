import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Calendar from '@/components/Calendar/Calendar';
import Events from '@/components/Events/Events';
import timeZone from '@/utilities/timeZone';

export const events = [
    {
        date: timeZone(new Date(2024, 2, 10)),
        title: 'Central of Fighters',
        address: 'Estrada Portela, 57, Madureira - Rio de Janeiro. Escola Zion',
    },
    {
        date: timeZone(new Date(2024, 2, 17)),
        title: 'Tijuca Geek',
        address:
            'Avenida Melo Matos, 25, Tijuca - Rio de Janeiro. Casa dos Açores',
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
