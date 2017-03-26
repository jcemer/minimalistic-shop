import React from 'react'
import { Link } from 'react-router-dom'

 const Header = () => {
  return (
    <div className='ui fixed inverted menu'>
      <div className='ui container'>
        <Link to='/' className='header item'>Minimalistic Shop</Link>
      </div>
    </div>
  )
}

export default Header
