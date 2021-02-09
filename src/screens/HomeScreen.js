import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { listProducts } from '../actions/productActions'

export default function HomeScreen(props) {
    
    const productList = useSelector(state => state.productList)
    const {products, loading, error} = productList
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        loading ? <div className="loading"><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>:
        error ? <h2>Error is happen !!! {error}</h2>:
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
