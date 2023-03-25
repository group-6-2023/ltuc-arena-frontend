import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'


function NavBar() {
    return (
        <Navbar variant="dark" className='nav'>
            <Container>
                <Navbar.Brand href="/" className='navBrand'>LTUC Arena</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/"     className='navLink'>Home</Nav.Link>
                    <Nav.Link href="about" className='navLink'>About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}


export default NavBar;