import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import "../assets/RegisterPage.css"; 
import Container from "react-bootstrap/Container";
import {Button as BootstrapButton} from "react-bootstrap";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
const RegisterPage = () =>{
    const navigate= useNavigate();
    return (

            <Container className="p-4">
                <Col sm={{span:7, offset:2}}>
                    <h2 className="px-4 heading">Register</h2>
                    <Form className="signup-form p-4">
                        <Form.Group className="mb-3" controlId="FormNameControl">
                            <Form.Control type="text" placeholder="Full name"></Form.Control>
                            <Form.Text>Your name will be displayed on your public profile.</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="FormEmailControl">
                                <Form.Control type="email" placeholder="Email"></Form.Control>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="FormPasswordControl">
                            
                                <Form.Control type="password" placeholder="New password"></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="FormConfirmPasswordControl">
                                <Form.Control type="password" placeholder="Confirm your password"></Form.Control>
                        </Form.Group>
                        <BootstrapButton className="mb-3 my-3" type="submit" variant="primary">Sign Up</BootstrapButton>
                        <br></br>
                        <Form.Text className="mb-3">Already have an account? <a href="/login">Sign in</a></Form.Text>
                    </Form>
                </Col>
               
            </Container>
            

    );
}

export default RegisterPage;