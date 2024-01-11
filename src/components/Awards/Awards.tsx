'use client';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import Award from './Award/Award';

export default function Awards() {
    const { animate } = useScrollAnimation('galeria');
    return (
        <section
            id='premiacao'
            className={`w-full my-5 text-slate-100 
            ${animate ? 'animate-show' : 'opacity-0'}
            `}
        >
            <div className='w-11/12 mx-auto'>
                <h2 className='text-2xl text-seal-brown pb-20'>Premiação</h2>
                <Award />
            </div>
        </section>
    );
}
