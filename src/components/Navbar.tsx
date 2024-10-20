import { NavLink } from "react-router-dom";
import "../assets/Navbar.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const NavBar = () => {
    return(
        <>
            <Navbar>
                <Container>
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
                    </Nav>
                </Container>

            </Navbar>
        </>
    );
}

// const Navbar =() =>{
//     return(

//         <nav className="navbar navbar-expand-lg">
//                 <NavLink className="navbar-brand" to="/">SaleSpotter</NavLink>
//                     <ul className="navbar-nav">
//                         <li className="nav-item">
//                             <NavLink  to="/" className={({isActive})=>`nav-link ${isActive? "active-link":""}`} >Home</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink  to="/ads-list" className={({isActive})=> `nav-link ${isActive? "active-link":""}`}>Ads</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink to="/post-ad" className={({isActive})=> `nav-link ${isActive? "active-link":""}`}>Post Ad</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink  to="/about-us" className={({isActive})=>`nav-link ${isActive?"active-link":""}`}>About Us</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink  to="/contact-us" className={({isActive})=> `nav-link ${isActive? "active-link":""}`}>Contact Us</NavLink>
//                         </li>
                        
//                     </ul>
//         </nav>
     
//     );
// }


export default NavBar;