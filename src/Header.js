import React from 'react'
import logo from './logo.svg'
import { Navbar, NavDropdown } from 'react-bootstrap'

const Header = () => {
    return (
        <>
            <Navbar variant="light">
                <Navbar.Brand href="https://eqe.ge/en">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    /><span className="logo-title">National Center<br />
      For Educational Quality<br />Enhancement</span>

                </Navbar.Brand>
                {/* <Nav className="mr-auto"> */}
                        <NavDropdown title="Language" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/eng-version">English</NavDropdown.Item>
                            <NavDropdown.Item href="/">Georgian</NavDropdown.Item>
                        </NavDropdown>
                
                {/* </Nav> */}
            </Navbar>
        </>
    )
}
export default Header