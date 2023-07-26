import React from 'react'
import { NavItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from "react-router-bootstrap";
const FirstPart = () => {
  return (
    <div className='firstpart'>

<Navbar expand="lg" >
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  style={{color:"whitesmoke"}}>Menu1</Nav.Link>
            <Nav.Link style={{color:"whitesmoke"}}>Menu2</Nav.Link>
            <NavDropdown title="TR"  id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Fr</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Tr
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
               Ar
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex">
        {/* <LinkContainer to='/wishlist'> */}
        
        <Button variant="outline-danger" className='mx-2'>WATCHLIST</Button>
        {/* </LinkContainer>  */}
            <Button variant="outline-success">SIGN IN</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
    </div>
  )
}

export default FirstPart