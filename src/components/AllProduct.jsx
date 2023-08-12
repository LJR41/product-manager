import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const AllProduct = () => {
    const [data, setData] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/all')
            .then(response=>{
                setData(response.data)
                console.log(response.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },[])

  return (
    
    <div>
        { data? 
        <div>{data.map((eachProd, Idx)=>{
            return(
                <div>
                    <h1>{eachProd.title}</h1>
                    <Link to={`/product/view/${eachProd._id}`}>View</Link>
                    
                </div>
                
            )
        })}</div>
        
        : <h1></h1>
        
        }
        <div><Link to='/'>Home</Link></div>
    </div>
  )
}

export default AllProduct