import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const Product = ({img, name, description, likeNumber, stock}) => {

    const createCard = () => {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <h2>Name: {name}</h2>
                    <p>Desccription: {description}</p>
                    <p>Stock: {stock}</p>
                    <p>Likes: {likeNumber}</p>
                    <Button>Like</Button>
                    <input placeholder="number of pieces" type="number"></input>
                    <button>Add to Cart</button>
                </Card.Body>
                </Card>
        )
    }

    //const [stock, setStock] = useState(props.stock)
    return (
        <div className="container">
        {createCard()}
        </div>
    )
}
export default Product