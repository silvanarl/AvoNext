import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="">
            <Navbar />
            {children}
            <footer className="container">This is the footer</footer>
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