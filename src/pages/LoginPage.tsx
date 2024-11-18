import {Container, Row, Col} from "react-bootstrap";
import {Button as BootstrapButton} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../assets/LoginPage.css";
const LoginPage = () =>{
    return(
        <Container className="mt-4" fluid>
            <Row className=" m-5 p-4 justify-content-center" >
            <Col className="text-center m-4 p-3">
                <h2 className="headings-text m-4">Sign in</h2>
                <text className="mb-3 main-text">You can sign in using your salespotter account.</text>
                <Form className="mt-3">
                    <Form.Group className="mb-3" controlId="emailControl">
                        <Form.Control type="email" placeholder="Email Address"></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="passwordControl">
                        <Form.Control type="password" placeholder="Password"></Form.Control>
                    </Form.Group>

                    <BootstrapButton className="mb-3 my-3"  type="submit" variant="primary">Sign in</BootstrapButton>
                        <br></br>
                        <Form.Text className="mb-3">Don't have an account with us? <a href="/register">Create one now</a></Form.Text>
                </Form>
            </Col>
            <Col className="d-none d-lg-block right-column  m-4 p-3">
                <h1>test</h1>
            </Col>
            </Row>
        </Container>
    );
}

export default LoginPage;