import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const Products = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        getProducts()
    },[])
    const getProducts= async ()=>{
        const data = await fetch("https://fakestoreapi.com/products")
        const json = await data.json()
        setProducts(json)}
        console.log(products)
        
  return (
    <div className=' grid grid-cols-4'> 
    {products?.map((p)=>{
      return(<p><ProductCard key={p.id} image={p.image} title={p.title} description={p.description} price={p.price}/></p>)})}
    </div>
  )
}

export default Products;