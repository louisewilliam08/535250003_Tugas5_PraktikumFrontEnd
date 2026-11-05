'use client'
import Card from 'react-bootstrap/Card';
import type { MenuItem } from '../data/content';

const MenuCard = ({ name, jp, description, price, image }: MenuItem) => (
    <Card className="menu-card h-100">
        <div className="menu-card-img">
            <Card.Img variant="top" src={image} alt={name} loading="lazy" />
        </div>
        <Card.Body>
            <div className="menu-card-head">
                <Card.Title as="h3">{name}</Card.Title>
                <span className="menu-price">{price}</span>
            </div>
            <span className="menu-jp" lang="ja">{jp}</span>
            <Card.Text>{description}</Card.Text>
        </Card.Body>
    </Card>
);

export default MenuCard;
