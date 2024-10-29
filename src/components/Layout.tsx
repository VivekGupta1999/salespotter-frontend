import { ReactNode } from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
    children: ReactNode;
}
const Layout = ({children}:LayoutProps) =>{
    return(
        <>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </>
    )
}
export default Layout;