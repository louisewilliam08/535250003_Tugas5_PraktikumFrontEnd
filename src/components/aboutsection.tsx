'use client'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const AboutSection = () => (
    <section id="tentang" className="section">
        <Container>
            <Row className="align-items-center g-5">
                <Col lg={6}>
                    <div className="about-media">
                        <img className="main" src="/images/interior-lamp.jpg" alt="Interior Homowa Anga dengan lampu gantung kuning" loading="lazy" />
                        <img className="inset" src="/images/chef-plating.jpg" alt="Chef menata sashimi di counter" loading="lazy" />
                    </div>
                </Col>
                <Col lg={6}>
                    <h2>Tentang kami</h2>
                    <p className="mt-4">
                        Homowa Anga adalah restoran Jepang yang berangkat dari ide sederhana: makan sushi yang
                        baru dipotong, dari chef yang bisa diajak ngobrol. Ikan datang pagi hari, nasi dimasak
                        sore dan malam, dan menu berubah mengikuti apa yang sedang bagus di pasar.
                    </p>
                    <p>
                        Selain makan di tempat, kami melayani katering untuk acara pribadi maupun kantor, dengan
                        rasa dan cara penyajian yang sama seperti di restoran. Kalau bingung memilih, tanya saja
                        ke chef. Mereka senang ditanya.
                    </p>
                    <Button variant="dark" href="#kontak" className="btn-ink mt-2">Pesan meja</Button>
                </Col>
            </Row>
        </Container>
    </section>
);

export default AboutSection;
