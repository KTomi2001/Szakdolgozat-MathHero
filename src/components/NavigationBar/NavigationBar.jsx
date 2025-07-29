import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import './NavigationBar.css'; 

function NavigationBar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid> 
        <Navbar.Brand className="navbar-brand-custom">MathHero</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Button className="login-button">Bejelentkezés</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;