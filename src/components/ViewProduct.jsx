import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const ViewProduct = () => {
    const [product, setProduct] = useState()

    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/view/${id}`)
            .then(response => setProduct(response.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            {product ?
                <div>
                    <div>
                        <h1>{product.title}</h1>
                        <h2>{product.price}</h2>
                        <h3>{product.description}</h3>
                        <Link to={`/product/edit/${product._id}`}>Edit</Link>
                    </div>
                    <Link to='/'>Home</Link>
                </div>
                : <h1>Loading...</h1>
            }
        </div>
    )
}

export default ViewProduct