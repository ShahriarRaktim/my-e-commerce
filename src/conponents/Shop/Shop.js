import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { setdb } from '../Fakedb/Fakedb';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [carts, setCarts] = useState([])
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])

    const addtoCart=(product)=>{
       let newcarts=[...carts, product]
       setCarts(newcarts);
       
    }
    useEffect(()=>{
        {
            carts.map(cart=>setdb(cart.key))
        }
    },[carts])
    return (
        <div className='shop'>
            <div>
                {
                    products.map(product => <Products key={product.key} product={product} addtoCart={addtoCart}/>)
                }
            </div>
            <div>
                <Cart className='carts' carts={carts}/>
            </div>
        </div>
    );
};

export default Shop;