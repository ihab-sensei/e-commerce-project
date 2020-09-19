import React from 'react';
import Product from '../product'
import data from '../data';
const Products = () => {
    return data.map(product => {
        return (
            <div className="container row">
                <Product img={product.img} name={product.name} description={product.description} likeNumber={product.likeNumber} stock={product.stock}/>
            </div>
        )
    })
}
export default Products