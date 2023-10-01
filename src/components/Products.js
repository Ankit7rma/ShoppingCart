import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { useDispatch } from 'react-redux'
import { addProduct } from './store/appSlice'

const Products = () => {
    const [products,setProducts] = useState([])
    const dispatch = useDispatch()
    useEffect(()=>{
        getProducts()
        
    },[])
    const getProducts= async ()=>{
        const data = await fetch("https://fakestoreapi.com/products")
        const json = await data.json()
        setProducts(json)}
        console.log(products)
        dispatch(addProduct(products))
  return (
    <div className=' grid grid-cols-4 items-center justify-center'> 
    {products?.map((p)=>{
      return(<p><ProductCard key={p.id} image={p.image} title={p.title} description={p.description} price={p.price}/></p>)})}
    </div>
  )
}

export default Products;