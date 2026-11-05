"use client"
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

interface Slide {
    title: string;
    subtitle: string;
    imageUrl: string;
    mobileUrl: string;
    position: string;
}

const HeroSection = () => {
    const slides: Slide[] = [
        {
            title: "Makan malam Jepang, tanpa terburu-buru",
            subtitle: "Duduk di counter, lihat chef bekerja, dan pesan apa yang sedang bagus hari ini.",
            imageUrl: "/images/banner_01.jpg",
            mobileUrl: "/images/banner_01_m.jpg",
            position: "70% center",
        },
        {
            title: "Nigiri dibuat satu per satu",
            subtitle: "Nasinya masih hangat waktu sampai di meja. Ikannya dipilih chef pagi itu.",
            imageUrl: "/images/banner_02.jpg",
            mobileUrl: "/images/banner_02_m.jpg",
            position: "center",
        },
        {
            title: "Wagyu panggang untuk malam yang pelan",
            subtitle: "Dipanggang sebentar di atas arang, dimakan dengan garam dan sedikit wasabi.",
            imageUrl: "/images/banner_03.jpg",
            mobileUrl: "/images/banner_03_m.jpg",
            position: "center",
        }
    ]

    return (
        <section id="beranda" className="hero">
            <Carousel fade interval={ 5000 }>
                { slides.map((slide, index) => (
                    <Carousel.Item key={ index }>
                        <div
                            className="hero-slide"
                            role="img"
                            aria-label={ slide.title }
                            style={{
                                '--img': `url(${ slide.imageUrl })`,
                                '--img-m': `url(${ slide.mobileUrl })`,
                                '--pos': slide.position,
                            } as React.CSSProperties}>
                        </div>
                        <Carousel.Caption>
                            <h1 className="fw-bold">{ slide.title }</h1>
                            <p>{ slide.subtitle }</p>
                            <div className="hero-actions">
                                <Button variant="gold" size="lg" href="#menu">Lihat menu</Button>
                                <Button variant="outline-light" size="lg" href="#kontak">Reservasi</Button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
                )}
            </Carousel>
        </section>
    )
}

export default HeroSection;
