import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function HomeScreen(props) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get("/api/products")
            setProducts(data)
        }
        fetchData()
    }, [])

    return (
        <ul className="products">
            {
            products.map((product) => 
            <li key={product._id}>
                <div className="product">
                    <Link to={'/product/' + product._id} >
                        <img className="product-image" src={product.image} alt="product"/>
                    </Link>
                    <div className="product-name">
                        <Link to={'/product/' + product._id} >{product.name}</Link>
                    </div>
                    <div className="product-brand">{product.brand}</div>
                    <div className="product-price">${product.price}</div>
                    <div className="product-ratings">{product.rating} Stars ({product.numReviews} reviews)</div>
                </div>
            </li>
            )
            }
        </ul>
    )
}
