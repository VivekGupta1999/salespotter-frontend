import {Container, Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../assets/Footer.css";
const Footer = () =>{
    return (

            <Container fluid className="footer p-5">
                <Row className='justify-content-center py-3'>  
                    <Col className='text-center'><Link to="/" className="my-brand">Sale Spotter</Link></Col>
                    <Col className="company-tag text-center">Connecting local buyers and sellers with ease!</Col>
                    <Col className='text-center d-none d-lg-block'><Link to="/about-us" className="page-links">About us</Link></Col>
                </Row>

                <Row className='py-3'>
                    <Col className='text-center'>
                            <Row><Link to="/" className="page-links">Home</Link></Row>
                            <Row><Link to="/ads" className="page-links">Ads</Link></Row>
                            {/* <Row><Link to="/post-ad" className="page-links">Post Ad</Link></Row> */}

                            
                    </Col>
                    <Col className='text-center'>
                            <Row><Link to="/contact-us" className="page-links">Contact Us</Link></Row>
                            <Row><Link to="/privacy-policy" className="page-links">Privacy Policy</Link></Row>
                    </Col>
                    <Col>@SaleSpotter, Inc 2024. We Love Users.</Col>
                </Row>
            </Container>

    );
}

export default Footer;