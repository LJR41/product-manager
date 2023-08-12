import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const EditProduct = () => {
    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()
    const navigate = useNavigate()
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/view/${id}`)
            .then(response => {
                const product = response.data
                setTitle(product.title)
                setPrice(product.price)
                setDescription(product.description)
            })
            .catch(err => console.log(err))
    }, [])

    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.patch(`http://localhost:8000/api/product/edit/${id}`,{title,price,description})
            .then(response =>{
                console.log(response)
                navigate(`/product/view/${id}`)
            })
            .catch(err=> console.log(err))

    }
    const deleteProduct = (e) =>{
        e.preventDefault()
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
            .then(response =>navigate('/'))
            .catch(err=>console.log(err))

    }
    return (
        <div>
            <Link to='/'>Home</Link>
                <form onSubmit={handleSubmit} >
                    <div style={{ flex: 3, flexDirection: 'column' }}>
                        <div style={{ marginBottom: 10 }}>
                            <label htmlFor="title" style={{ marginRight: 5 }}>Title</label>
                            <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
                        </div>
                        <div style={{ marginBottom: 10 }}>
                            <label htmlFor="price" style={{ marginRight: 5 }} >Price</label>
                            <input type="number" name='price' value={price} onChange={e => setPrice(e.target.value)} />
                        </div>
                        <div style={{ marginBottom: 10 }}>
                            <label htmlFor="description" style={{ marginRight: 5 }}>Description</label>
                            <textarea name="description" id="" cols="20" rows="5" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                        </div>
                        <button type='submit'>Confirm</button>
                        <button onClick={deleteProduct}>Delete Product</button>
                    </div>
                </form>
                
        </div>
    )
}

export default EditProduct