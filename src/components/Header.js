import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <div>
    <nav className=' flex justify-between m-2 p-2 bg-red-100 rounded-lg'>
        <img className="w-16 h-16 rounded-md" src='https://static.vecteezy.com/system/resources/thumbnails/011/401/535/small/online-shopping-trolley-click-and-collect-order-logo-design-template-vector.jpg' alt='logo' />
        <div className='m-2 p-3 font-bold text-2xl'>
        <Link to="/" className='p-2' >Home</Link>
        <Link to="cart" >Cart</Link>
        </div>
    </nav>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Header