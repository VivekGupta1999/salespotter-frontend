import {Container, Col, Row} from 'react-bootstrap';
import "../assets/Footer.css";
const Footer = () =>{
    return (

            <Container fluid className="footer p-5">
                <Row>
                    <Col>My Logo</Col>
                    <Col>
                            <text>SB</text>
                            <text>SB</text>
                            <text>SB</text>
                    </Col>
                    <Col>@SaleSpotter, Inc 2024. We Love Users.</Col>
                </Row>
            </Container>

    );
}

export default Footer;