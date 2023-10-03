import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './Product/ProductCard'

const Cart = () => {
  const items = useSelector(store=>store.cart.items)
  console.log(items)
  return (
    <div className='flex flex-wrap justify-evenly'>
{
  items.map((p)=>{
    return  <div >  <ProductCard key={p.id} id={p.id} image={p.image} title={p.title} description={p.description} price={p.price}/></div>
  })
}
    </div>
  )
}

export default Cart