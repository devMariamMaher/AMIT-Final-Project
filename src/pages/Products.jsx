import React, { useEffect, useState } from 'react'
import { axiosConfig } from '../axios/axiosConfig';
import { Card } from '../components/Card';
import { Loading } from '../components/Loading';
import { BreadCrumb } from '../components/BreadCrumb';

export const Products = () => {
  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(true);

  async function getAllProducts(){
    const {data} = await axiosConfig({
      url: "/products",
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
      <div className="productsContainer">
        <BreadCrumb text={"Products"}/>
        
        <div className='allProducts'>
          {products.map((product, index)=>(
            <Card key={index} data={product}/>
          ))}
        </div>
      </div>
    );
}
