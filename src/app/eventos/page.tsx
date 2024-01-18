import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Calendar from '@/components/Calendar/Calendar';
import Events from '@/components/Events/Events';

export const events = [
    {
        date: new Date(2024, 0, 14),
        title: 'Imperial Geek Fest',
        address: 'Rua Reinaldo Lopes, 91 - Piabetá, Magé - RJ',
    },
    {
        date: new Date(2024, 0, 19),
        title: 'Tattoo Week Rio',
        address:
            'EXPO MAG, Rua Beatriz Larragoiti Lucas, s/n - Cidade Nova, Rio de Janeiro - RJ',
    },
    {
        date: new Date(2024, 0, 20),
        title: 'Tattoo Week Rio',
        address:
            'EXPO MAG, Rua Beatriz Larragoiti Lucas, s/n - Cidade Nova, Rio de Janeiro - RJ',
    },
    {
        date: new Date(2024, 0, 21),
        title: 'Tattoo Week Rio',
        address:
            'EXPO MAG, Rua Beatriz Larragoiti Lucas, s/n - Cidade Nova, Rio de Janeiro - RJ',
    },
];
const Event = () => {
    return (
        <>
            <Header />
            <div className='relative top-20 z-0'>
                <main className='w-full min-h-screen-20 text-seal-brown pt-5 animate-show'>
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
