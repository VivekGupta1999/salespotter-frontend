import  Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import "../assets/HomePage.css"; // our css for the page
import { useAuth } from "../context/AuthContext";

const HomePage = () =>{
     const {user,logout} = useAuth();
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

    </div>
   ); 
};


export default HomePage;