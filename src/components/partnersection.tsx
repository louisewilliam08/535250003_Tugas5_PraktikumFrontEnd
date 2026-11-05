'use client'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const panels = [
    { id: 'member', title: 'Member Homowa Anga', text: 'Kumpulkan poin dari setiap kunjungan, dapatkan tawaran khusus di hari ulang tahun, dan tukarkan dengan hidangan favorit.', cta: 'Daftar member', image: '/images/dining-room.jpg' },
    { id: 'katering', title: 'Katering dan acara', text: 'Dari arisan keluarga sampai rapat kantor. Pilih paket sushi dan sashimi, kami yang menyiapkan dan mengantar.', cta: 'Tanya paket', image: '/images/sashimi.jpg' },
];

const PartnerSection = () => (
    <section>
        <Row className="g-0">
            {panels.map((panel) => (
                <Col md={6} key={panel.id} id={panel.id} className="panel" style={{ backgroundImage: `url(${panel.image})` }}>
                    <div className="panel-body">
                        <h2>{panel.title}</h2>
                        <p>{panel.text}</p>
                        <Button variant="gold" href="#kontak">{panel.cta}</Button>
                    </div>
                </Col>
            ))}
        </Row>
    </section>
);

export default PartnerSection;
