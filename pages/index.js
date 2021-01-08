import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";

const Home = () => {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        window.fetch('/api/avo')
        .then(res => res.json())
        .then(({ data, length }) => {
            setProductList(data)
        })
    }, [])

    return (
        <div>
            <h1>hello con next </h1>
            <div className="avo-container">
                {
                    productList.map((avo) => (
                        <div key={avo.id} className="avo-card">
                            <Link href={`product/${avo.id}`}>
                                <a>
                                    <Image alt={avo.name} src={avo.image} height="180" width="200" />
                                    <h3>{avo.name}</h3>
                                </a>
                            </Link>
                        </div>
                    ))
                }
            </div>
            <style jsx>{`
            .avo-card{
                display: flex;
                border: 1px solid;
                justify-content:center;
                margin: 1rem;
                flex-direction: column;
            }
            .avo-container{
                display: flex;
                flex-wrap: wrap;
                margin: auto;
            }
            `} </style>
        </div>
    )
}
export default Home;