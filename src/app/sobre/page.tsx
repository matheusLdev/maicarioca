import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Image from 'next/image';
import PhotoThayane from '../../../public/assets/thayane.jpeg';
import Link from 'next/link';

export default function about() {
    return (
        <>
            <Header />
            <div className='relative top-20'>
                <main className='w-full text-seal-brown py-5 animate-show'>
                    <h2 className='font-bold text-center text-3xl'>
                        Sobre Mim
                    </h2>
                    <section className='w-10/12 mx-auto'>
                        <p className='my-5'>
                            Olá! Eu sou a Thayane, uma apaixonada pelo universo
                            cosplay com 28 anos de idade, mergulhada nesse mundo
                            incrível há cerca de 2 anos. Desde sempre, animes e
                            games foram minha paixão, mas enfrentei desafios
                            como agorafobia, depressão e ansiedade, que me
                            impediam de aproveitar eventos e sair de casa.
                        </p>
                        <div className='w-full flex flex-wrap justify-center md:flex-nowrap md:justify-between gap-5'>
                            <div className='w-2/4 md:w-1/4'>
                                <Image
                                    src={PhotoThayane}
                                    alt='Thayane - Maicarioca'
                                    className='object-contain h-max'
                                />
                            </div>
                            <div className='w-full md:w-3/4 flex flex-col justify-between'>
                                <p className='w-full'>
                                    Após iniciar o tratamento, consegui superar
                                    esses obstáculos e finalmente participar dos
                                    eventos que tanto amo. Realizar cosplays dos
                                    personagens que marcaram minha infância e
                                    adolescência sempre foi um sonho. Além
                                    disso, sou corsetmaker,{' '}
                                    <Link
                                        href={`https://madamenooracorsets.com.br/`}
                                        target='_blank'
                                        className='text-red-link hover:underline'
                                    >
                                        fundadora da Madame Noora Corsets
                                    </Link>
                                    , o que me proporciona a habilidade de criar
                                    meus próprios cosplays.
                                </p>
                                <p className='w-full'>
                                    O primeiro deles foi da Esdeath,
                                    inteiramente confeccionado por mim.
                                    Reproduzir cosplays de Shermie, Mai Shiranui
                                    e Ada Wong é mais que um sonho, é uma
                                    experiência única. Esses personagens têm um
                                    lugar especial em meu coração, e quero
                                    continuar trazendo à vida figuras
                                    nostálgicas que motivam não apenas a mim,
                                    mas a todos que compartilham a paixão por
                                    jogos como Resident Evil e KOF.
                                </p>
                                <p className='w-full'>
                                    Participar como jurada no concurso cosplay
                                    do Imperial Geek Fest Edição de Parceria com
                                    o Tattoo Week Rio (21 jan 2024) foi uma
                                    experiência enriquecedora. Desejo vivenciar
                                    mais oportunidades como essa, pois ser
                                    cosplayer vai além de um hobby – é uma forma
                                    de expressão artística, um mergulho em outra
                                    realidade.
                                </p>
                                <p className='w-full'>
                                    Meu objetivo é participar de eventos
                                    renomados em São Paulo, como BGS, CCXP e
                                    Anime Friends. Já subi ao pódio algumas
                                    vezes, e meu foco é evoluir constantemente,
                                    não apenas em competições, mas também
                                    aprimorando cada personagem e aproveitando
                                    ao máximo cada evento.
                                </p>
                            </div>
                        </div>
                        <p className='my-5'>
                            Se você se identificou e gostaria de colaborar,
                            estou aberta a convites para collabs, parcerias e
                            eventos. Entre em contato pelo{' '}
                            <Link
                                href={`https://www.instagram.com/maicarioca/`}
                                target='_blank'
                                className='text-red-link hover:underline'
                            >
                                Instagram
                            </Link>
                            . Beijos da Mai 😘
                        </p>
                    </section>
                </main>
                <Footer />
            </div>
            ;
        </>
    );
}
