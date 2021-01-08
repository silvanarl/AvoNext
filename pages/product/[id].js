import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ProductItem = () => {
    const {query: { id }} = useRouter();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        if(id){
            window.fetch(`/api/avo/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
        }
    }, [])

    return (
        <div>
            Producto id: {id}
            
        </div>
    )
}

export default ProductItem;
