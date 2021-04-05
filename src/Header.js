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
             
                        <NavDropdown title="Language" id="collasible-nav-dropdown" role="switch-language">
                            <NavDropdown.Item href="/eng-version" aria-label="english version">English</NavDropdown.Item>
                            <NavDropdown.Item href="/" aria-label="georgian version">Georgian</NavDropdown.Item>
                        </NavDropdown>
                
           
            </Navbar>
        </>
    )
}
export default Header