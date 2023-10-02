import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'

const ProductCard = ({id,title,image,description,price}) => {
  const dispatch = useDispatch()
  
  return (
    <div className='p-2 flex flex-col align-center justify-center w-64 h-64  m-2 items-center border overflow-hidden border-gray-300 rounded-md'>
    <img className='w-24 h-24' src={image} alt='img'/>
    <div><h1 className='font-semibold w-auto'>{title}</h1>
    {/* <p>{description}</p> */}
    <p >${price}</p>
    </div>
    <button className='bg-red-300 border border-gray-500 rounded-lg p-2 '
    onClick={()=>dispatch(addToCart(id))}>Add to Cart</button>
    </div>
  )
}

export default ProductCard