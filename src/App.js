import React, {useState} from 'react';
import Products from './products';
import Home from './home';
import Nav from './nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// {
//   numberOfItems: 0,
//   itemName: ""
// }

function App() {

  const[cardItem, setCardItem] = useState(0);

  const handleCardItem = () =>{
    setCardItem(cardItem + 1);
    console.log(cardItem)
  }

  return (

    <Router>
        <Route path="/" component={() => <Nav cardItem={cardItem}/>}/>
        <Route exact path="/" component={Home} />
        <Route path='/products' component={() => <Products handleCardItem={handleCardItem} cardItem={cardItem} />}/>
    </Router>

  );
}

export default App;
