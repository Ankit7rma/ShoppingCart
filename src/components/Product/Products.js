import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../store/appSlice'
import { addToCart } from '../store/cartSlice'

const Products = () => {
    const [products,setProducts] = useState([])
    const pdt = useSelector(store=>store.product)
    const dispatch = useDispatch()
    useEffect(()=>{
        getProducts()
        
    },[])
    const getProducts= async ()=>{
        const data = await fetch("https://fakestoreapi.com/products")
        const json = await data.json()
        setProducts(json)}
        // console.log(products)
        dispatch(addProduct(products))
        console.log(pdt)
        const handleClick=(p)=>{
          dispatch(addToCart(p))
        }
  return (
    <div className='  grid grid-cols-4 items-center justify-center'> 
    {pdt.product?.map((p)=>{
      return(<><div className='flex flex-col justify-center items-center'><ProductCard key={p.id} id={p.id} image={p.image} title={p.title} description={p.description} price={p.price}/>
      <button className='bg-red-300 hover:bg-blue-700 border w-[50%] border-gray-500 rounded-lg p-2 ' onClick={()=>{handleClick(p)}}>
    Add to Cart</button></div>
      </>)})}
    </div>
  )
}

export default Products;