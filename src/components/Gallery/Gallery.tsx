'use client';
import Image from 'next/image';
import ImportImages from '../ImportImages/ImportImages';
import { useState } from 'react';

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const openImage = (image: string) => {
        setSelectedImage(image);
        const header = document.getElementById('inicio');
        header ? (header.style.zIndex = '0') : '';
    };

    const closeImage = () => {
        setSelectedImage(null);
        const header = document.getElementById('inicio');
        header ? (header.style.zIndex = '10') : '';
    };

    return (
        <main className='text-seal-brown font-bold pt-10'>
            <h2 className='text-3xl text-center animate-show'>
                Veja Todos os Meus Cosplays
            </h2>
            <div className='my-10'>
                <div className='w-full flex flex-wrap items-center justify-around gap-10'>
                    {Object.keys(ImportImages).map((key) => (
                        <button
                            key={key}
                            className='min-w-48 max-w-lg'
                            onClick={() => openImage(ImportImages[key])}
                        >
                            <Image
                                src={ImportImages[key]}
                                alt={key}
                                className='object-cover animate-show shadow-md shadow-red-950 hover:scale-105 duration-500'
                            />
                        </button>
                    ))}
                </div>
            </div>
            {selectedImage && (
                <div className='fixed top-0 left-0 z-50 w-full h-full bg-red-950'>
                    <button
                        className='w-10 absolute top-2 right-4 z-10 text-slate-100 text-2xl border rounded duration-500 hover:text-slate-500 hover:border-slate-500'
                        onClick={closeImage}
                    >
                        X
                    </button>
                    <div className='relative max-w-3xl h-full py-2 mx-auto'>
                        <Image
                            src={selectedImage}
                            alt=''
                            className=' object-contain w-full h-full'
                        />
                    </div>
                </div>
            )}
        </main>
    );
}
