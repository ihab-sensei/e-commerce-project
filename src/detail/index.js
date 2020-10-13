import React, { useState } from "react";
import Card from 'react-bootstrap/Card';

import {
    BrowserRouter as Router,
    useParams
  } from "react-router-dom";

import { firestore as db}  from '../firebaseConfig';
import Product from "../product";



const Detail = () => {

    const [product, setProduct] = useState([]);

    let { id } = useParams();
    console.log(id)

    const fetchData = async ()=>{
        const productsRes = await db.collection('products').get();
        console.log("hello")
        const productsData = productsRes.docs.map(product =>  product.data())
        console.log(productsData);
        // setProduct(productsData.find(item => item.id == id));
        const singleData = productsData.find(item => (item.id ===id));
        setProduct(singleData);
        console.log(singleData)
      }
    React.useEffect(()=>{
        fetchData()
      },[])

 // const fetchData = async ()=>{
    //     const productsRes = await db.collection('products').doc(id).get();
    //     console.log(productsRes.data())
    //     const singleProduct = await productsRes.data()
    //    // setProduct(singleProduct)
    //     console.log(singleProduct)
    //   }
    // React.useEffect(()=>{
    //     fetchData()
    //   },[])
    console.log(product)

  return (
    <div> 
      {product ? (
        <Product id={product.id} img={product.img} name={product.name} description={product.description} likeNumber={product.likeNumber} stock={product.stock}/>
      ):null}
        
    </div>
  );
};
export default Detail;
