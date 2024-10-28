import { NavLink, useNavigate } from "react-router-dom";
import "../assets/Navbar.css";
import {useAuth} from '../context/AuthContext';
import  Button  from "./Button";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
const NavBar = () => {
    const {user, logout} = useAuth();
    // const user ='vivek';
    const navigate = useNavigate();

    const handlePostAdClick= () =>{
        if(user){
                navigate('/post-ad');
        }else{
                navigate('/login');
        }
    };
    return(
        <>
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/" className="brand-name">SaleSpotter</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav ms-auto"/>
                    <Navbar.Collapse>
                    <Nav  className="me-auto">
                        <Nav.Item>
                         <NavLink className={({isActive})=> `nav-link ${isActive ? 'active-link':''}`} to="/">Home</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                         <NavLink className={({isActive})=> `nav-link ${isActive ? 'active-link':''}`} to="/ads-list">Ads</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                         <NavLink className={({isActive})=> `nav-link ${isActive ? 'active-link':''}`} to="/about-us">About Us</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                         <NavLink className={({isActive})=> `nav-link ${isActive ? 'active-link':''}`} to="/contact-us">Contact Us</NavLink>
                        </Nav.Item>
                    </Nav>
                    {user ? (
                              <Nav.Item className="me-3">
                                    <NavDropdown title={user.toUpperCase()} id="nav-dropdown">
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item className="nav-link" onClick={logout}>LogOut</NavDropdown.Item> 
                                        {/* // onClick={logout} */}
                                    </NavDropdown>
                                </Nav.Item>
                            ):(
                            <Nav className="d-flex">
                                 <Nav.Item>
                                 <NavLink className={({isActive})=> `nav-link ${isActive ? 'active-link':''}`} to="/register">Register</NavLink>
                                </Nav.Item>
                                <Nav.Item className="nav-or-text d-none d-lg-inline-flex align-items-center">
                                    <span >or</span>
                                </Nav.Item>
                                 <Nav.Item>
                                    <NavLink className={({isActive})=> `nav-link  ${isActive ? 'active-link':''}`} to="/login">Sign In</NavLink>
                                </Nav.Item>
                                </Nav>
                            )}
                    <Button  className="button-primary" onClick={handlePostAdClick}>Post Ad</Button>
                    </Navbar.Collapse>                     
                  
                </Container>

            </Navbar>
        </>
    );
}




export default NavBar;