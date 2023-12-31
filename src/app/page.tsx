import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import HomePage from '@/components/HomePage/HomePage';
import NextEvent from '@/components/NextEvent/NextEvent';

export default function Home() {
    return (
        <>
            <Header />
            <NextEvent />
            <HomePage />
            <section>
                <h2>Meus Cosplays:</h2>
                <a href='' target='_blank'>
                    Ver todos os meus cosplays
                </a>
            </section>
            <Footer />
        </>
    );
}
