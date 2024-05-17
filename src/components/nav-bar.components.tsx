import { useContext } from "react";
import { Button, Container, Dropdown, Nav, NavDropdown, NavItem, NavLink, Navbar, Offcanvas } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../utils/utils";


export const NavBarComponent = () => {

    const expand = 'md';
    const { userState, action } = useContext(AuthContext)
    const navigate = useNavigate();

    const userManu = () => {
      // const { login } = userState;
      if(userState && userState.login == 'AUTHENTICATED'){
        const { name } = userState;
        return(
          <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink}>{name}</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => {}}>About Me</Dropdown.Item>
              <Dropdown.Item onClick={() => {navigate('/Auth/LogOut')}}>Log-Out</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Git</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )
      }else{
        return(
          <>
            <Nav.Link href="/Auth">Login</Nav.Link>
            <div className="vr" />
            <Nav.Link href="/Auth/Register">Register</Nav.Link>
          </>
        )
      }
    }

    return(
        <Navbar key={expand} expand={expand} className="bg-dark bg-gradient bg-opacity-10 d-flex ">
          <Container fluid>
            <Navbar.Brand className={"brand-nav"} href="/">Haciendola Test</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >

              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/Products">Products</Nav.Link>
                </Nav>
                
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {userManu()}
                </Nav>
              </Offcanvas.Body>
              
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        )
} 