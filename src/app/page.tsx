import Footer from '@/components/Footer/Footer';
import GalleryHomePage from '@/components/GalleryHomePage/GalleryHomePage';
import Header from '@/components/Header/Header';
import HomePage from '@/components/HomePage/HomePage';
import NextEvent from '@/components/NextEvent/NextEvent';

export default function Home() {
    return (
        <>
            <Header />
            <NextEvent />
            <HomePage />
            <GalleryHomePage />
            <Footer />
        </>
    );
}
