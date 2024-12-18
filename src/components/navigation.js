import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navigation = () => {
  return (
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav className="me-auto">
            
              <Nav.Link href="/createalbum">Create</Nav.Link>
              <Nav.Link href="/readalbum">Read</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
  );
};

export default Navigation;