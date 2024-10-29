import  Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import "../assets/HomePage.css"; // our css for the page
import { useAuth } from "../context/AuthContext";

const HomePage = () =>{
     const {user} = useAuth();
    // const user='test';
    const navigate = useNavigate();

    const handlePostAdClick = () =>{
        if(user){
            navigate('/post-ad');
        }else{
            navigate('/login');
        }
    };
   return (
    <div>
        <Container fluid className="hero-header-section py-3 ">
            <Row className="justify-content-center py-3">
                <Col className="text-center main-text">FIND OR POST A GARAGE SALE NEAR YOU</Col>
            </Row>
            <Row className="justify-content-center py-3">
                <Col className="text-center">
                     <Button className="button-primary mx-3" onClick={()=>{navigate("/ads-list")}}>Find</Button>
                     <Button className="button-secondary mx-3" onClick={handlePostAdClick}>Post</Button>
                </Col>
            </Row>
        </Container>
        <Container fluid className="benefits-section p-3">
            <Row>
                <Col className="p-3">
                    <Row className="justify-content-center py-2 benefits-section-headings">Discover the Best Garage Sale in your area</Row>
                    <Row className="justify-content-center py-2 benefits-section-headings">Never miss out on Great Deals Again.</Row>
                    <Row className="my-4 text-center">
                        <Col>SAVE TIME</Col>
                        <Col>CONNECT LOCALLY</Col>
                    </Row>
                    <Row className="my-4 text-center">
                        <Col>Quickly Find Garage Sale Near You</Col>
                        <Col>Join a Vibrant Community of local buyers and sellers in your neighborhood.</Col>

                    </Row>
                    <Row className="my-5 justify-content-center">
                        <Col className="text-center"><Button className="button-secondary px-3 ms-lg-3"  onClick={()=>{navigate("/about-us")}}>Learn More</Button></Col>
                        <Col className="text-center"><Button className="button-secondary px-3 ms-lg-3" onClick={()=>{navigate("/login")}}>Sign Up</Button></Col>
                    </Row>
                    

                </Col>
                <Col className="benefits-section-image pm-4 d-none d-lg-block">Image</Col>
               
            </Row>
                
        </Container>

        <Container fluid className="feature-section p-3">
            <Row className="main-text justify-content-center p-2">Find Local Garage Sales With Ease</Row>
            <Row className="main-text justify-content-center p-2">Our Platform allows you to easily Post Ads for Sale and Notifies our users of New Ads in there area.</Row>
            <Row className="p-2">
                <Col className="benefits-section-image">image</Col>
                <Col className="benefits-section-image">image</Col>
                <Col className="benefits-section-image">image</Col>
            </Row>
            <Row className="my-5 justify-content-center">
                <Col className="py-3 text-center">Easy Ad Posting</Col>
                <Col className="py-3 text-center">Location Based Search</Col>
                <Col className="py-3 text-center">Notification Setup</Col>
            </Row>
            <Row className="my-5 justify-content-center">
                <Col className="py-3 text-center">Quickly Post Your Ad Hassle-Free.</Col>
                <Col className="py-3 text-center">Easily Find Sales in Your Area.</Col>
                <Col className="py-3 text-center">Receive Notifications For Sales that matches your Prefereneces.</Col>
            </Row>
            <Row className="my-5 d-flex justify-content-center">
                <Col className="d-flex justify-content-center gap-2">
                    <Button className="button-secondary px-3 ms-lg-3"  onClick={()=>{navigate("/about-us")}}>Learn More</Button>
                    <Button className="button-primary px-3 ms-lg-3" onClick={()=>{navigate("/login")}}>Sign Up</Button>
                </Col>          
            </Row>
        </Container>



    </div>
   ); 
};


export default HomePage;