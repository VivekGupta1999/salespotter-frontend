import {Container, Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../assets/Footer.css";
const Footer = () =>{
    return (

            <Container fluid className="footer p-5">
                <Row className='py-3'>
                    <Col className="company-tag text-center">Connecting local buyers and sellers with ease!</Col>
                </Row>

                <Row className='py-5'>
                    <Col>   
                            <Row><Link to="/" className="my-brand">Sale Spotter</Link></Row>
                            <Row><Link to="/" className="page-links">Home</Link></Row>
                            <Row><Link to="/post-ad" className="page-links">Post Ad</Link></Row> 
                            <Row><Link to="/ads" className="page-links">Ads</Link></Row>

                    </Col>
                    <Col className='text-center'>
                            <text className="my-brand">Info</text>
                           
                            <Row><Link to="/about-us" className="page-links">About Us</Link></Row>
                            <Row><Link to="/privacy-policy" className="page-links">Privacy Policy</Link></Row>
                    </Col>
                    <Col className='text-center'>
                            <text className="my-brand">Contact</text>  
                            <Row><Link to="/contact-us" className="page-links">Contact Us</Link></Row>
                    </Col>
                    
                </Row>
                <Row>
                <Col className='text-center py-3 company-tag'>@SaleSpotter, Inc 2024. We Love Users.</Col>
              
                </Row>
            </Container>

    );
}

export default Footer;