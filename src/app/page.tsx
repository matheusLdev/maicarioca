import Awards from '@/components/Awards/Awards';
import Footer from '@/components/Footer/Footer';
import GalleryHomePage from '@/components/GalleryHomePage/GalleryHomePage';
import Header from '@/components/Header/Header';
import HomePage from '@/components/HomePage/HomePage';
import NextEvent from '@/components/Events/NextEvent/NextEvent';

export default function Home() {
    return (
        <>
            <Header />
            <div className='relative top-20 z-0'>
                <NextEvent />
                <HomePage />
                <GalleryHomePage />
                <Awards />
                <Footer />
            </div>
        </>
    );
}
