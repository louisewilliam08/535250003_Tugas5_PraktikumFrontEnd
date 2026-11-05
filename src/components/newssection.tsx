'use client'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import NewsCard from './newscard';
import { newsItems } from '../data/content';

const NewsSection = () => (
    <section id="berita" className="section">
        <Container>
            <div className="section-head">
                <h2>Berita dan menu baru</h2>
                <p>Kabar terbaru dari dapur dan ruang makan kami.</p>
            </div>
            <Row xs={1} md={3} className="g-4">
                {newsItems.map((item) => (
                    <Col key={item.title}><NewsCard {...item} /></Col>
                ))}
            </Row>
        </Container>
    </section>
);

export default NewsSection;
