import React from 'react'

const ProductCard = ({title,image,description,price}) => {
  return (
    <div className='p-2 m-2 w-36 h-36'>
    <img src={image} alt='img'/>
    <h1 className='font-bold text-2xl'>{title}</h1>
    {/* <p>{description}</p> */}
    <p>{price}</p>
    </div>
  )
}

export default ProductCard