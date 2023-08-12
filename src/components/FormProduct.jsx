import React,{useState, useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const FormProduct = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()
    
    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/product/create',{title,price,description})
            .then(response=>{
                console.log(response)
                navigate('/')
            })
            .catch(err=>console.log(err))
    }
    return (
        <div>
            <h1>Create a Product</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ flex: 3, flexDirection: 'column' }}>
                    <div style={{ marginBottom: 10 }}>
                        <label htmlFor="title" style={{ marginRight: 5 }}>Title</label>
                        <input type="text" name="title" onChange={e=>setTitle(e.target.value)}/>
                    </div>
                    <div style={{ marginBottom: 10 }}>
                        <label htmlFor="price" style={{ marginRight: 5 }} >Price</label>
                        <input type="number" name='price'onChange={e=>setPrice(e.target.value)} />
                    </div>
                    <div style={{ marginBottom: 10 }}>
                        <label htmlFor="description" style={{ marginRight: 5 }}>Description</label>
                        <textarea name="description" id="" cols="20" rows="5" onChange={e=>setDescription(e.target.value)}></textarea>
                    </div>
                    <button type='submit'>Create</button>
                    <Link to='/'>Home</Link>
                </div>
            </form>



        </div>
    )
}

export default FormProduct