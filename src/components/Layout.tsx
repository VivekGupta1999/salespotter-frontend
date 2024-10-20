import { ReactNode } from "react";
import NavBar from "./Navbar";

type LayoutProps = {
    children: ReactNode;
}
const Layout = ({children}:LayoutProps) =>{
    return(
        <>
            <NavBar />
            <main>{children}</main>
        
        </>
    )
}
export default Layout;