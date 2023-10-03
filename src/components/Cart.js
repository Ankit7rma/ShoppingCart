import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from './Product/ProductCard'
import { removeProduct } from './store/cartSlice'

const Cart = () => {
  const items = useSelector(store=>store.cart.items)
  // console.log(items)
  const dispatch = useDispatch()
  const handleClick=(p)=>{
    dispatch(removeProduct(p))
  }
  return (
    <div className='flex flex-wrap justify-evenly'>
{ !items.length?"Add Items to Cart":
  items.map((p)=>{
    return  <div className='flex flex-col justify-center items-center'> 
     <ProductCard key={p.id} id={p.id} image={p.image} title={p.title} description={p.description} price={p.price}/>
     <button className='bg-red-300 border w-[50%] border-gray-500 rounded-lg p-2 ' onClick={()=>{handleClick(p)}}>
    Remove</button>
     </div>
  })}
     </div>
  )
}

export default Cart