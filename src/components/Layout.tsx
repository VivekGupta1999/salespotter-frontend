import { ReactNode } from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

type LayoutProps = {
    children: ReactNode;
}
const Layout = ({children}:LayoutProps) =>{
    const location = useLocation();

    const excludeRoutes = ["/login"];

    const shouldHideHeader = excludeRoutes.includes(location.pathname);
    return(
        <>
            {!shouldHideHeader && <NavBar />}
            <main>{children}</main>
            {!shouldHideHeader && <Footer />}
        </>
    )
}
export default Layout;