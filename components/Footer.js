import Link from 'next/link';

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div>
                    <h3>Nosotros</h3>
                    <Link href="/about">
                        <a>Conócenos más</a>
                    </Link>
                </div>
                <div>
                    <h3>Servicios</h3>
                    <Link href="/">
                        <a>Todos los productos</a>
                    </Link>
                </div>
                <div>
                    <h3>Hecho por</h3>
                    <p>
                    Silvana Ramos con el curso de
                    <Link href="https://nextjs.org/">
                        <a> NextJS </a>
                    </Link>
                     de 
                     <Link href="https://platzi.com/">
                        <a> Platzi</a>
                    </Link>
                    </p>
                    <div>
                        <Link href="https://silvanarl.github.io/portafolio/build/">
                            <a target="_blank">Portfolio</a>
                        </Link>
                        <Link href="https://github.com/silvanarl">
                            <a target="_blank">Github</a>
                        </Link>
                    </div>
                    
                </div>
            </div>
            <style jsx>{`
            .row{
                display: flex;
                justify-content: space-around;
                flex-direction: row;
                font-family: 'Montserrat', sans-serif;
                padding: 1rem;
            }
            `}

            </style>
        </footer>
    )
}

export default Footer;
