import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Product = ({id, img, name, description, likeNumber, stock, handleCardItem, cardItem, substractItem}) => {

    const [liked, setLiked] = useState({
        like:likeNumber,
        isLiked: false
    });
    const [stockState, setStockState] = useState(stock);

    const[card, setCardItem] = useState(0);
    console.log(id);
    
    const handeClickLiked = () => {
        liked.isLiked ? 
        setLiked({
            ...liked,
            like: liked.like-1,
            isLiked: false,
        }) : setLiked({
            ...liked,
            like: liked.like+1,
            isLiked: true,
        }) 
    }

    // const handeClickAdded = () => {
    //     setCardItem(card + 1)
    //     console.log(card)
    // }


    const createCard = () => {
        return (
            <Card style={{ width: '18rem' }}>
                <Link to={id}><Card.Img variant="top" src={img} /> </Link>
                <Card.Body>
                    <h2>Name: {name}</h2>
                    <p>Desccription: {description}</p>
                    <p>Stock: {stockState - cardItem}</p>
                    <p>Likes: {liked.like}</p>
                    
                    <Button variant = {liked.isLiked ? "success" : "danger"}  onClick = {handeClickLiked}> Like </Button>
                    <input placeholder="number of pieces" type="number"></input>
                    <button onClick={() => {
                        handleCardItem()
                        substractItem(id,stock)
                    }}>Add to Cart</button>
                </Card.Body>
                
                </Card>
        )
    }

    //const [stock, setStock] = useState(props.stock)
    return (
        <div>
        {createCard()}
        </div>
    )
}
export default Product