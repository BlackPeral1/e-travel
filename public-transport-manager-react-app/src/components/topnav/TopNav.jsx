import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Logo from '../../assets/logo.png';
import { Image } from 'react-bootstrap';
function TopNav() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          {' '}
          <Image src={Logo} />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">



            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/buyers">Buyers</Nav.Link>
            <Nav.Link href="#contact-us">Contact</Nav.Link>
          </Nav>

          {!localStorage.getItem('token') &&
            <Nav>
              <Nav.Link href="/login">
                <Button variant="text">Login</Button>
              </Nav.Link>
              <Nav.Link eventKey={2} href="/registration-intro">
                <Button>Signup</Button>
              </Nav.Link>
            </Nav>}
          {localStorage.getItem('token') &&
            <Nav>
              <Nav.Link href="/user">
                DashBoard
              </Nav.Link>
            </Nav>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopNav