import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <div>
    <nav className=' flex justify-between align-center ml-2 pl-2 bg-red-100 rounded-lg'>
        <img className="w-16 h-16 rounded-md mt-2" src='https://static.vecteezy.com/system/resources/thumbnails/011/401/535/small/online-shopping-trolley-click-and-collect-order-logo-design-template-vector.jpg' alt='logo' />
        <div className='m-2 p-3 font-bold text-2xl flex '>
        <Link to="/" className='p-2 mr-4' >Home</Link>
        <Link to="cart" className='flex'>
            <img className='w-8 h-8 rounded-lg' 
             src='https://media.istockphoto.com/id/1184670036/vector/shopping-cart-line-icon-fast-buy-vector-logo.jpg?s=612x612&w=0&k=20&c=zyExmQoKgH4UZTwMa41Zo9x1TzQYcQy_5zQcHaEL0SQ=' alt='cart-logo' />{"0"}
        </Link>
        </div>
    </nav>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Header