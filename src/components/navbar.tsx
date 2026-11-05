'use client'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const links = [
    { label: 'Tentang', href: '#tentang' },
    { label: 'Menu', href: '#menu' },
    { label: 'Berita', href: '#berita' },
    { label: 'Member', href: '#member' },
    { label: 'Katering & Acara', href: '#katering' },
];

function NavigationBar() {
    return (
        <Navbar expand="lg" sticky="top" collapseOnSelect className="hw-nav" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#beranda" className="hw-brand">
                    <span className="hw-seal" aria-hidden="true">和</span>
                    <span>
                        <span className="hw-brand-text">Homowa Anga</span>
                        <span className="hw-brand-sub">Japanese Dining</span>
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="mainNav"></Navbar.Toggle>
                <Navbar.Collapse id="mainNav">
                    <Nav className="ms-auto my-2 my-lg-0 align-items-lg-center">
                        {links.map((link) => (
                            <Nav.Link key={link.href} href={link.href}>{link.label}</Nav.Link>
                        ))}
                    </Nav>
                    <Button variant="gold" href="#kontak" className="ms-lg-3 mt-2 mt-lg-0">Kontak</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;
