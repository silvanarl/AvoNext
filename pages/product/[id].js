import Image from "next/image";


export const getStaticProps = async ({ params }) => {
    const response = await fetch(`https://avo-next.vercel.app/api/avo/${params.id}`);
    const  product = await response.json();
    return {
        props: {
            product
        }
    }
};
export const getStaticPaths = async () => {
    const response = await fetch('https://avo-next.vercel.app/api/avo');
    const {data: productList} = await response.json();
    const paths = productList.map(({ id }) => ({
        params: {
            id
        }
    }))
    return {
        paths,
        fallback: false // todo lo que no este incluido en paths dara 404
    }
};

const ProductItem = ({ product }) => {

    return (
        <div>
            Producto id: 
            <h1>{product.name}</h1>
            <Image alt={product.name} src={product.image} height="180" width="200" />

            
        </div>
    )
}

export default ProductItem;
