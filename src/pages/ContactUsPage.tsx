import  Container  from "react-bootstrap/Container";
import {Row, Col} from "react-bootstrap";
import  "../assets/ContactUsPage.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import  Form from "react-bootstrap/Form";
import { Button as BootstrapButton} from "react-bootstrap";
const ContactUsPage = () =>{
    const navigate = useNavigate();
    return(
        <div>
                  <Container fluid className="hero-header-section p-4">
                        <Row className="justify-content-center py-3">
                            <Col className="hero-header-section-headline text-center">We'd Love to Hear From You!</Col>
                        </Row>
                        <Row className="py-2">
                            <Col className="text-center">
                                <Button className="button-secondary" onClick={()=>{navigate("/register")}}>Join Today</Button>
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid className="contact-section p-4">
                            <Row>
                                <Col className="text-center py-3 headings-text">
                                    Looking for More Information?
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-center py-2 headings-text">
                                    Contact Us Directly through the form below or connect with us via email or phone.
                                </Col>
                            </Row>
                    </Container>

                    <Container fluid className="contact-form p-4">
                            <Row className="p-3 ">
                                <Col className="text-center">
                                     <Form className="py-3">
                                        <Row className="py-2">
                                            <Form.Control type="text" placeholder="Name" />
                                        </Row>
                                        <Row className="py-2">
                                            <Form.Control type="email" placeholder="Email Address"/>
                                        </Row>
                                        <Row className="py-2">
                                           <Form.Control type="text" placeholder="Subject" />
                                        </Row>
                                        <Row className="py-2">
                                             <Form.Control as="textarea"  placeholder="Message" rows={4} />  
                                        </Row>
                                        <Row className="py-2">
                                            <Form.Control type="file" />
                                        </Row>
                                        <Row className="py-2">
                                           <BootstrapButton type="submit" variant="primary">Submit</BootstrapButton>
                                        </Row>
                                    </Form>
                                </Col>
                            </Row>

                    </Container>
                    <Container fluid className="p-4">
                            <Row className="py-3">
                                <Col className="text-center headings-text">
                                    Prefer to speak with us directly? Drop us an email at help@SaleSpotter.ca . 
                                </Col>
                            </Row>
                    </Container>
        </div>
        
      
    )
};

export default ContactUsPage;