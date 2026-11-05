'use client'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const socials = [
    { icon: 'bi-instagram', label: 'Instagram', href: '#' },
    { icon: 'bi-facebook', label: 'Facebook', href: '#' },
    { icon: 'bi-tiktok', label: 'TikTok', href: '#' },
    { icon: 'bi-whatsapp', label: 'WhatsApp', href: '#' },
];

const Footer = () => (
    <footer className="site-footer">
        <Container>
            <div className="footer-cta">
                <div>
                    <h2>Bergabung dengan tim Homowa Anga</h2>
                    <p>Kami selalu mencari orang yang suka bekerja di dapur dan ruang makan.</p>
                </div>
                <div className="footer-cta-actions">
                    <Button variant="gold" href="mailto:karier@homowaanga.id">Kirim lamaran</Button>
                    <Button variant="outline-light" href="#kontak">Hubungi kami</Button>
                </div>
            </div>
            <Row className="g-4 g-lg-5">
                <Col lg={5}>
                    <div className="hw-brand mb-3">
                        <span className="hw-seal" aria-hidden="true">和</span>
                        <span className="hw-brand-text">Homowa Anga</span>
                    </div>
                    <p>Restoran Jepang di Jakarta. Sushi, sashimi, dan panggangan arang.</p>
                    <div className="social">
                        {socials.map((s) => (
                            <a key={s.label} href={s.href} aria-label={s.label}><i className={`bi ${s.icon}`}></i></a>
                        ))}
                    </div>
                </Col>
                <Col xs={12} sm={7} lg={4}>
                    <h3>Kunjungi kami</h3>
                    <ul>
                        <li>Jl. Jenderal Sudirman No. 88, Jakarta</li>
                        <li>Setiap hari, 11.00 sampai 22.00</li>
                        <li>+62 21 5555 0123</li>
                        <li>reservasi@homowaanga.id</li>
                    </ul>
                </Col>
                <Col xs={12} sm={5} lg={3}>
                    <h3>Halaman</h3>
                    <ul>
                        <li><a href="#tentang">Tentang</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#galeri">Galeri</a></li>
                        <li><a href="#berita">Berita</a></li>
                        <li><a href="#kontak">Kontak</a></li>
                    </ul>
                </Col>
            </Row>
            <div className="footer-bottom">
                <span>© {new Date().getFullYear()} Homowa Anga</span>
                <a href="#beranda">Kebijakan privasi</a>
            </div>
        </Container>
    </footer>
);

export default Footer;
