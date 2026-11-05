'use client'
import Container from 'react-bootstrap/Container';
import { galleryItems } from '../data/content';

const GallerySection = () => (
    <section id="galeri" className="section section-washi">
        <Container>
            <div className="section-head">
                <h2>Galeri</h2>
                <p>Ruang makan, dapur, dan beberapa hidangan kami.</p>
            </div>
            <div className="gallery">
                {galleryItems.map((item) => (
                    <figure key={item.src + item.caption} className={`g-item ${item.className}`}>
                        <img src={item.src} alt={item.alt} loading="lazy" />
                    </figure>
                ))}
            </div>
        </Container>
    </section>
);

export default GallerySection;
