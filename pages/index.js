import Image from "next/image";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import styled from 'styled-components';


export const getStaticProps = async () => {
    const response = await fetch('https://avo-next.vercel.app/api/avo');
    const {data: productList} = await response.json();

    return {
        props: {
            productList
        }
    }
}

const StyledCard = styled.div`
    display: flex;
    padding: .5rem;
    justify-content:center;
    margin: 1rem;
    flex-direction: column;
    box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
    border-radius: 5px;
    & a{
        text-decoration: none;
    }
`;
const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    width: 100%;
    justify-content:center;
    font-family: 'Montserrat', sans-serif;
    & h3 {
        font-weight: 300;
        color: #343435;
        display: flex;
        justify-content: space-around;
    }
`;

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
            <StyledContainer >
                {
                    productList.map((avo) => (
                        <StyledCard key={avo.id} >
                            <Link href={`product/${avo.id}`}>
                                <a>
                                    <div>
                                        <Image src={avo.image} alt={avo.name} height="280" width="280"  />
                                    </div>
                                    <div className="avo-card-text">
                                        <h3>
                                            {avo.name}
                                            <span>$ {avo.price}</span>
                                        </h3>
                                    </div>
                                </a>
                            </Link>
                        </StyledCard>
                    ))
                }
            </StyledContainer>
            <style jsx="true">{`
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
            .avo-card-text{
                border-top: 1px solid #d4d4d5;
            }
            `} </style>
        </div>
    )
}
export default Home;