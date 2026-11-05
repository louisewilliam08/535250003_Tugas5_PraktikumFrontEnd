'use client'
import Card from 'react-bootstrap/Card';

interface Props {
    date: string;
    tag: string;
    title: string;
    excerpt: string;
    image: string;
}

const NewsCard = ({ date, tag, title, excerpt, image }: Props) => (
    <Card className="news-card h-100">
        <div className="news-card-img">
            <Card.Img variant="top" src={image} alt={title} loading="lazy" />
        </div>
        <Card.Body>
            <p className="news-meta">{tag} &middot; {date}</p>
            <Card.Title as="h3">{title}</Card.Title>
            <Card.Text>{excerpt}</Card.Text>
            <a href="#berita" className="news-link">Baca selengkapnya</a>
        </Card.Body>
    </Card>
);

export default NewsCard;
