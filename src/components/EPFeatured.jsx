import React, { useEffect, useState } from 'react'
import { axiosConfig } from '../axios/axiosConfig';
import { Card } from './Card';
import { Loading } from './Loading';

export const EPFeatured = () => {
    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true);

    async function getAllProducts(){
        const {data} = await axiosConfig({
            url: "/featuredProducts",
        })
        setProducts(data)
        setLoading(false);
    }

    useEffect(()=>{
        getAllProducts()
    }, [])

    if (loading) {
        return <div><Loading/></div>;
    }    

    return (
        <div className='allProducts'>
            {products.map((product, index)=>(
                <Card key={index} data={product}/>
            ))}
        </div>
    );
}
