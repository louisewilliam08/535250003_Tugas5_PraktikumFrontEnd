'use client'
import { FormEvent, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const times = ['11.30', '12.30', '13.30', '18.00', '19.00', '20.00', '21.00'];

const ReservationSection = () => {
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.currentTarget.reset();
        setSent(true);
    };

    return (
        <section id="kontak" className="reserve">
            <Container>
                <Row className="g-5 align-items-center">
                    <Col lg={5}>
                        <h2>Kontak dan reservasi</h2>
                        <p className="mt-3">
                            Isi formulir ini, nanti kami kabari lewat WhatsApp. Biasanya balasan
                            masuk di hari yang sama.
                        </p>
                        <ul className="reserve-info">
                            <li>Setiap hari, 11.00 sampai 22.00 WIB</li>
                            <li>+62 21 5555 0123</li>
                            <li>reservasi@homowaanga.id</li>
                        </ul>
                    </Col>
                    <Col lg={7}>
                        <Form className="reserve-card" onSubmit={handleSubmit}>
                            {sent && (
                                <Alert variant="success" dismissible onClose={() => setSent(false)}>
                                    Permintaan reservasi terkirim. Kami akan menghubungi Anda segera.
                                </Alert>
                            )}
                            <Row className="g-3">
                                <Col md={6}>
                                    <Form.Group controlId="nama">
                                        <Form.Label>Nama lengkap</Form.Label>
                                        <Form.Control type="text" required autoComplete="name" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="telepon">
                                        <Form.Label>Nomor WhatsApp</Form.Label>
                                        <Form.Control type="tel" required autoComplete="tel" placeholder="+62" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="tanggal">
                                        <Form.Label>Tanggal</Form.Label>
                                        <Form.Control type="date" required />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="jam">
                                        <Form.Label>Jam</Form.Label>
                                        <Form.Select required defaultValue="">
                                            <option value="" disabled>Pilih jam</option>
                                            {times.map((t) => <option key={t}>{t}</option>)}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="tamu">
                                        <Form.Label>Jumlah tamu</Form.Label>
                                        <Form.Select required defaultValue="2">
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => <option key={n}>{n}</option>)}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Form.Group controlId="catatan">
                                        <Form.Label>Catatan (opsional)</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="Alergi makanan, perayaan, atau permintaan duduk di counter" />
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Button type="submit" variant="gold" size="lg" className="w-100">Kirim reservasi</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ReservationSection;
