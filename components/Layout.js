import Navbar from './Navbar';
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className="">
            <Navbar />
            {children}
            <Footer />
            <style jsx>{`
            .container{
                background: salmon;
            }
            `}

            </style>
        </div>
    )
}

export default Layout;