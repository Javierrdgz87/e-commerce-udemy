import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { ReactComponent as Logo } from '../../assets/svg/original.svg'

import "./TopMenu.scss"

export default function TopMenu () {
    return (
        <Navbar bg="dark"
        variant="dark"
        className="top-menu">
            <Container>
                <BrandNav>
                        <MenuNav />
                    {/* Carrito */}
                </BrandNav>
            </Container>
        </Navbar>
    )
}

function BrandNav() {
    return (
        <Navbar.Brand>
            <Logo />
            <h2>Heladeria Fulanitos</h2>
        </Navbar.Brand>
    )
}

function MenuNav () {
    return (
        <Nav className="mr-auto">
            <Nav.Link href="#">Active</Nav.Link>
        </Nav>
    )
}