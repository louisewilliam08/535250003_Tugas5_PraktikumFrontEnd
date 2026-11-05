'use client'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const MissionSection = () => (
    <section className="section section-washi">
        <Container>
            <Row className="align-items-center g-5">
                <Col lg={5}>
                    <h2>Membawa rasa Jepang yang jujur ke meja Anda</h2>
                    <p className="mt-4">
                        Kami ingin tamu pulang dengan perasaan kenyang dan senang, bukan sekadar
                        kenyang. Karena itu bahan dipilih dengan teliti, hidangan dibuat sesaat
                        sebelum disajikan, dan pelayanan dijaga tetap ramah dan rapi.
                    </p>
                    <p>
                        Kami juga ingin dapur ini jadi tempat yang baik bagi orang yang bekerja
                        di dalamnya: belajar, bertumbuh, dan bangga dengan hasil kerjanya.
                    </p>
                    <Button variant="dark" href="#kontak" className="btn-ink mt-2">Hubungi kami</Button>
                </Col>
                <Col lg={7}>
                    <img className="mission-img" src="/images/chef-grill.jpg" alt="Chef memanggang daging di atas arang" loading="lazy" />
                </Col>
            </Row>
        </Container>
    </section>
);

export default MissionSection;
