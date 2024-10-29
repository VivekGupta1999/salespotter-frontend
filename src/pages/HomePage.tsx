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
                    <Row className="justify-content-center py-2">Discover the Best Garage Sale in your area</Row>
                    <Row className="justify-content-center py-2">Never miss out on Great Deals Again.</Row>
                    <Row className="my-4">
                        <Col>SAVE TIME</Col>
                        <Col>CONNECT LOCALLY</Col>
                    </Row>
                    <Row className="my-4">
                        <Col>Quickly Find Garage Sale Near You</Col>
                        <Col>Join a Vibrant Community of local buyers and sellers in your neighborhood.</Col>

                    </Row>
                    <Row className="my-5">
                        <Col><Button className="button-secondary px-3 ms-lg-3"  onClick={()=>{navigate("/about-us")}}>Learn More</Button></Col>
                        <Col><Button className="button-secondary px-3 ms-lg-3" onClick={()=>{navigate("/login")}}>Sign Up</Button></Col>
                    </Row>
                    

                </Col>
                <Col className="benefits-section-image pm-4 d-none d-lg-block">Image</Col>
               
            </Row>
                
        </Container>

    </div>
   ); 
};


export default HomePage;