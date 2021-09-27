import React from 'react';
import './Products.css'

const Products = (props) => {
    const {name, img, price, seller, star, stock, } =props.product;
    const {product, addtoCart} =props;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="information">
                <h1>{name}</h1>
                <h3>By:{seller}</h3>
                <h3>${price}</h3>
                <h4>Only {stock} left in stock- order soon</h4>
                <button onClick={()=> addtoCart(product)}>Add to cart</button>
            </div>
        </div>
    );
};

export default Products;