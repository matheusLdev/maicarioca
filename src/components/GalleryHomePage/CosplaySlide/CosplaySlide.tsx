import Image, { StaticImageData } from 'next/image';

interface CosplaySlideProps {
    src: StaticImageData;
    name: string;
}

const CosplaySlide: React.FC<CosplaySlideProps> = ({ src, name }) => (
    <div className='w-full'>
        <Image src={src} alt={name} className='h-screen object-cover' />
        <div className='absolute bottom-0 left-0 right-0 bg-photo-gallery text-gray-200 p-4 text-center'>
            {name}
        </div>
    </div>
);

export default CosplaySlide;
