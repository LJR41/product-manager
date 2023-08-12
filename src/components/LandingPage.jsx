import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <h1>This is the Landing Page</h1>
      <Link to='/product/all'>All Products</Link>
      <Link to='/product/form'>Add Product</Link>
    </div>
  )
}

export default LandingPage