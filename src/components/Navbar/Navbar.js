import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import logo from "../../assets/muscle.png";
import logo2 from "../../assets/muscle - 2.png";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

function NavBar() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const loginHandler = () => {
    if (!isAuthenticated) {
      loginWithRedirect();
    } else {
      logout();
    }
  };

  return (
    <Navbar variant="dark" className="nav">
      <Container>
        <img src={logo} className="logo" />
        <Navbar.Brand className="navBrand">LTUC Arena</Navbar.Brand>
        <img src={logo2} className="logo" />

        {!isAuthenticated ? (
          <Nav className="me-auto navLinkContainer">
            <Nav.Link href="/" className="navLink">
              Main
            </Nav.Link>
            <Nav.Link onClick={() => {}} className="navLink">
              About
            </Nav.Link>
          </Nav>
        ) : (
          <Nav className="me-auto navLinkContainer">
            <Link to="/" className="navLink">
              Home
            </Link>
            <Link to="/exercise-list" className="navLink">
              Exercise List
            </Link>
          </Nav>
        )}

        <Button
          variant="outline-secondary"
          className="login"
          onClick={loginHandler}
        >
          {!isAuthenticated ? "LogIn" : "LogOut"}
        </Button>
      </Container>
    </Navbar>
  );
}

export default NavBar;
