import Footer from '@/components/Footer/Footer';
import Gallery from '@/components/Gallery/Gallery';
import Header from '@/components/Header/Header';

export default function gallery() {
    return (
        <>
            <Header />
            <div className='relative top-20 z-0'>
                <Gallery />
                <Footer />
            </div>
        </>
    );
}
