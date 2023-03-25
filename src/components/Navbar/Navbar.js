import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import logo from '../../assets/muscle.png';
import logo2 from '../../assets/muscle - 2.png';


function NavBar() {
  return (
    <Navbar variant="dark" className='nav'>
      <Container>

        <img src={logo} className='logo' />
        <Navbar.Brand href="/" className='navBrand'>LTUC Arena</Navbar.Brand>
        <img src={logo2} className='logo' />

        <Nav className="me-auto">
          <Nav.Link href="/" className='navLink'>Home</Nav.Link>
          <Nav.Link href="about" className='navLink'>About</Nav.Link>
        </Nav>

      </Container>
    </Navbar>
  );
}


export default NavBar;