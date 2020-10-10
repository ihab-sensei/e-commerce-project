import React, {useState} from 'react';
import Products from './products';
import Home from './home';
import Nav from './nav';
import Detail from './detail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



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
        <Route path="/:id" children={<Detail/>}/>
    </Router>

  );
}

export default App;
