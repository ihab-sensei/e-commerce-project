import React, {useState, useEffect}  from 'react';
import Product from '../product'
import db from '../firebaseConfig';

const Products = ({handleCardItem, cardItem}) => {

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

      const substractItem = (id,stock) => {
          db.collection("products").doc(id).update({
            stock: stock - 1
          })
      }
    return product.map(product => {
        return (
            <div>
                <Product substractItem={substractItem} id={product.id} img={product.img} cardItem={cardItem} handleCardItem={handleCardItem} name={product.name} description={product.description} likeNumber={product.likeNumber} stock={product.stock}/>
            </div>
        )
    })
}
export default Products