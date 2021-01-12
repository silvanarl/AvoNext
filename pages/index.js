import Image from "next/image";
import Link from "next/link";
import fetch from "isomorphic-unfetch";


export const getStaticProps = async () => {
    const response = await fetch('https://avo-next.vercel.app/api/avo');
    const {data: productList} = await response.json();

    return {
        props: {
            productList
        }
    }
}

const Home = ({ productList }) => {
    // const [productList, setProductList] = useState([]);
    // useEffect siempre se renderiza en el navegador
    //client side rendering, ver codigo fuente no trae los datos
    

    return (
        <div>
            <div className="avo-title">
                <h1>
                    Avo 
                    <Image className="avo-title-img" src="/images/avocado.svg" alt="avocado" height="70" width="60" />
                    Next
                </h1>
            </div>
            <div className="avo-container">
                {
                    productList.map((avo) => (
                        <div key={avo.id} className="avo-card">
                            <Link href={`product/${avo.id}`}>
                                <a>
                                    <div>
                                        {console.log(avo.image)}
                                        <Image src={avo.image} height="280" width="280" alt={avo.name} />
                                    </div>
                                    <div className="avo-card-text">
                                        <h3>
                                            {avo.name}
                                            <span>$ {avo.price}</span>
                                        </h3>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    ))
                }
            </div>
            <style jsx>{`
            .avo-title{
                display: flex;
                justify-content:center;
                height: 70px;
            }
            .avo-title h1{
                font-family: 'Montserrat', sans-serif;
                font-weight: 700;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .avo-title-img{
                margin: .2rem;
            }
            .avo-card{
                display: flex;
                padding: .5rem;
                justify-content:center;
                margin: 1rem;
                flex-direction: column;
                box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
                border-radius: 5px;
            }
            .avo-container{
                display: flex;
                flex-wrap: wrap;
                margin: auto;
                width: 100%;
                justify-content:center;
                font-family: 'Montserrat', sans-serif;
                
            }
            .avo-container h3{
                font-weight: 300;
                color: #343435;
                display: flex;
                justify-content: space-around;
                
            }
            .avo-card a{
                text-decoration: none;

            }
            .avo-card-text{
                border-top: 1px solid #d4d4d5;
            }
            `} </style>
        </div>
    )
}
export default Home;