import { NavLink, useNavigate } from "react-router-dom";
import "../assets/Navbar.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import {useAuth} from '../context/AuthContext';
import  Button  from "./Button";
import { Navigate } from "react-router-dom";
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
            <Navbar>
                <Container fluid>
                    <Navbar.Brand href="/" className="brand-name">SaleSpotter</Navbar.Brand>
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
                    </Nav>{
                    /* Right Aligned section */}
                    <Nav className ="ms-auto d-flex align-items-center">
                        {user ? (
                              <Nav.Item className="me-3">
                                    <NavDropdown title={user.toUpperCase()} id="nav-dropdown">
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item className="nav-link" onClick={logout}>LogOut</NavDropdown.Item> 
                                        {/* // onClick={logout} */}
                                    </NavDropdown>
                                </Nav.Item>
                            ):(
                            <>
                                 <Nav.Item>
                                 <NavLink className={({isActive})=> `nav-link ${isActive ? 'active-link':''}`} to="/register">Register</NavLink>
                                    </Nav.Item>
                                 <span className=" nav-or-text">or</span>
                                 <Nav.Item>
                                    <NavLink className={({isActive})=> `nav-link  me-3 ${isActive ? 'active-link':''}`} to="/login">Login</NavLink>
                                </Nav.Item>
                            </>
                            )}
             
                        
                    <Nav.Item>
                         <Button  className="button-primary" onClick={handlePostAdClick}>Post Ad</Button>
                    </Nav.Item>
                        
                    </Nav>
               
                        
                  
                </Container>

            </Navbar>
        </>
    );
}




export default NavBar;