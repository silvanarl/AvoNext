import Link from 'next/link';

const Navbar = () => {
  
    return (
        <div className="container-navbar">
            <div className="container-navbar-link">
                <Link href="/">
                    <a className="navbar-anchor" >Home</a>
                </Link>
            </div>
            <div className="container-navbar-link">
                <Link href="/about">
                    <a className="navbar-anchor" >About</a>
                </Link>
            </div>
            <style jsx>{`
                .container-navbar{
                    display: flex;
                    justify-content: space-around;
                    height: 4rem;
                    alignItems: center;
                    textDecoration: none;

                }
                .container-navbar-link {
                    display: flex;
                    width: 100%;
                    justify-content: center;
                    box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
                }
                .navbar-anchor {
                    text-decoration: none;
                    text-align: center;
                    align-items: center;
                    display: flex;
                    color: #626161;
                    font-family: 'Montserrat';
                    font-weight: 400;
                    width: 7rem;
                    margin: 0 auto;
                    justify-content: center;
                }
                .navbar-anchor:hover{
                    background-color: #c2c2c2;
                    color: white;
                }
                `}</style>
        </div>
    )
}
export default Navbar;
