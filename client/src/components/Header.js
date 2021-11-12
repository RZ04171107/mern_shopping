import React from 'react';
import {
  Container,
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
} from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='light' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>Shopping App</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href='/'>
                <i className='fas fa-home'></i>Home
              </Nav.Link>
            </Nav>
            <Nav.Link href='/cart' className='link-dark'>
              <i className='fas fa-shopping-cart'></i> Cart
            </Nav.Link>
            <Nav.Link href='/login' className='link-dark'>
              <i className='fas fa-user'></i> Sign In
            </Nav.Link>
            {/* <Form className='d-flex'>
              <FormControl
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
              <Button variant='outline-success'>Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
