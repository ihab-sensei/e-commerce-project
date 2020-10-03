import React, {useState, useEffect}  from 'react';
import Product from '../product'
import db from '../firebaseConfig';

const Products = () => {

    const [product, setProduct] = useState([]);

    const fetchData = async ()=>{
        const productsRes = await db.collection('products').get();
        console.log("hello")
        const productsData = productsRes.docs.map(product => product.data())
        console.log(productsData);
        setProduct(productsData);
      }

      React.useEffect(()=>{
        fetchData()
      },[])

    return product.map(product => {
        return (
            <div>
                <Product img={product.img} name={product.name} description={product.description} likeNumber={product.likeNumber} stock={product.stock}/>
            </div>
        )
    })
}
export default Products