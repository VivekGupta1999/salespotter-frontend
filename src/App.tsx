import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AdsListPage from "./pages/AdsListPage";
import CreateAdPage from "./pages/CreateAdPage";
import LoginPage from "./pages/LoginPage";
import PostAdPage from "./pages/PostAdPage";
import RegisterPage from "./pages/RegisterPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import { AuthProvider } from "./context/AuthContext";
function App(){
  return(
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/ads-list" element={<AdsListPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/create-ad" element={<CreateAdPage/>} />
            <Route path="/post-ad" element={<PostAdPage/>} />
            <Route path="/about-us" element={<AboutUsPage/>}/>
            <Route path="/contact-us" element={<ContactUsPage/>}/>
          </Routes>
        </Layout>
      </Router>
      </AuthProvider>
    
  );
}

export default App;
