import Link from 'next/link';

const Footer = () => {
    return (
        <footer>
            <div className="row footer-content">
                <div className="footer-content-item">
                    <h4>Nosotros</h4>
                    <Link href="/about">
                        <a className="footer-item-link">Conócenos más</a>
                    </Link>
                </div>
                <div className="footer-content-item">
                    <h4>Servicios</h4>
                    <Link href="/">
                        <a className="footer-item-link">Todos los productos</a>
                    </Link>
                </div>
                <div className="footer-content-item">
                    <h4>Hecho por</h4>
                    <span>
                    Silvana Ramos con el curso de
                    <Link href="https://nextjs.org/">
                        <a className="footer-item-link"> NextJS </a>
                    </Link>
                     de 
                     <Link href="https://platzi.com/">
                        <a className="footer-item-link"> Platzi</a>
                    </Link>
                    </span>
                    <div className="footer-content-media">
                        <Link href="https://silvanarl.github.io/portafolio/build/">
                            <a className="footer-item-link" target="_blank">
                                <i className="fas fa-desktop"></i>
                                Website
                            </a>
                        </Link>
                        <Link href="https://github.com/silvanarl">
                            <a className="footer-item-link" target="_blank">
                                <i className="fab fa-github"></i>
                                Github
                            </a>
                        </Link>
                    </div>
                    
                </div>
            </div>
            <style jsx>{`
            .footer-content{
                display: flex;
                flex-direction: column;
                font-family: 'Montserrat';
                font-weight: 400;
                margin: 1rem;
                padding: .5rem;
            }
            .footer-content h4 {
                margin: 0;
                color: #494747;
            }
            .footer-content-item {
                padding-bottom: 1rem;
            }
            .footer-item-link{
                text-decoration: none;
                color: #0e62d8;
            }
            .footer-content-media {
                display: flex;
                 justify-content: start;
            }
            .footer-content-media a {
                margin: .5rem;
            }
            .fa-github, .fa-desktop {
                font-size: large;
                padding-right: 8px;
                color: #636364;
            }
            @media (min-width: 680px) {
                .footer-content {
                    flex-direction: row;
                }
            }
            `}

            </style>
        </footer>
    )
}

export default Footer;
