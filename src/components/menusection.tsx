'use client'
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import MenuCard from './menucard';
import { menuCategories, menuItems } from '../data/content';

const MenuSection = () => {
    const [active, setActive] = useState(menuCategories[0]);
    const visible = active === menuCategories[0] ? menuItems : menuItems.filter((item) => item.category === active);

    return (
        <section id="menu" className="section">
            <Container>
                <div className="section-head">
                    <h2>Menu kami</h2>
                    <p>Sebagian menu yang paling sering dipesan. Isinya bisa berubah mengikuti bahan hari itu.</p>
                </div>
                <Nav variant="pills" className="menu-filter " activeKey={active} onSelect={(key) => key && setActive(key)}>
                    {menuCategories.map((category) => (
                        <Nav.Item key={category}>
                            <Nav.Link as="button" type="button" eventKey={category}>{category}</Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>
                <Row xs={1} md={2} lg={3} className="g-4 mt-2">
                    {visible.map((item) => (
                        <Col key={item.name}><MenuCard {...item} /></Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default MenuSection;
