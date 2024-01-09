// Products.js
import React, { useState, useEffect } from 'react';
import Product from './Product';
import axios from 'axios'; // Use 'fetch' if you prefer

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Use axios or fetch to get the data from your JSON file
        axios.get('./products.json')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products', error));
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            {products.map(product => (
                <Product key={product.id} {...product} />
            ))}
        </div>
    );
};

export default Products;
