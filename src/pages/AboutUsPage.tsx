import {Container,Col, Row} from "react-bootstrap";
import "../assets/AboutUsPage.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
const AboutUsPage = () =>{

    const navigate = useNavigate();
    return (
        <Container fluid>
            <Row className="hero-header-section py-3">
                <Col className="text-center main-text-heading">Our Story</Col>
                <Row className="text-center main-text px-5 py-3">
                    <p>Our journey began when we noticed how difficult it was for people to find or advertise local garage sales. With so many great items going unnoticed, we wanted to create a platform that connects buyers and sellers in the community. Thus, SaleSpotter was born.</p>
                </Row>
            </Row>
            <Row className="feature-section py-3">
                <Col className="text-center p-3">
                    <Row  className="p-3 feature-section-headings ">Find Exactly What You are Looking For.</Row>
                    <Row className="p-3 feature-section-text ">Our platform simplifies your search for garage sales by allowing you to filter ads based on location, date, and tags. Whether you’re hunting for specific items or just browsing for deals, our intuitive search functionality ensures that you find exactly what you’re looking for without wasting time.</Row>
                    <Row  className="p-3 feature-section-headings">Receive Alerts for Sale Happening Near You</Row>
                    <Row className="p-3 feature-section-text ">Stay informed with our real-time alerts! You can set your preferences to receive notifications whenever new ads are posted in your chosen area or when sales are tagged with your interests. This feature keeps you updated on the best local deals, ensuring you never miss out on great opportunities.</Row>
                    <Row  className="p-3 feature-section-headings">Easily Post Ads for there Garage Sales</Row>
                    <Row className="p-3 feature-section-text ">Listing your garage sale is quick and hassle-free with our user-friendly interface. Simply fill out the necessary details, add tags to categorize your sale, and publish it instantly. Our platform allows you to reach a wider audience in your community, making it easier to sell items you no longer need.</Row>
                </Col>
                <Col className="text-center d-none d-lg-block">Image</Col>
            </Row>
            <Row className="vision-section">
                <Col className=" text-center main-text-heading">Our Vision</Col>
                <Row className="text-center main-text p-5">
                    <p>Looking ahead, we aim to expand our platform with new features like event reminders, premium listing options, and more. We’re constantly listening to our users and evolving to better meet your needs</p>
                </Row>
            </Row>
            <Row className="feedback-section py-5">
                <Col className="text-center main-text">
                 We’d love to hear from you! If you have any feedback or suggestions, feel free to reach out via our contact page or follow us on social media for the latest updates
                </Col>
                <Col className="text-center">
                            <Button className="button-primary m-2" onClick={()=>navigate("/")}>Join Today</Button>                      
                            <Button className="button-secondary m-2" onClick={()=>navigate("/contact-us")}>Contact Us</Button>

                </Col>
            </Row>

            <Row className="thanks-section">
                <Col className="text-center main-text p-5">
                Thank you for choosing SaleSpotter and being a part of our growing community. Together, we can make buying and selling locally easier and more enjoyable for everyone.
                </Col>
            </Row>
        </Container>
    );
}

export default AboutUsPage;