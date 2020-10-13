import React, {useState} from 'react';
import Products from './products';
import Home from './home';
import Nav from './nav';
import Detail from './detail';
import Login from './auth';
import Signup from './signup';
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
    <>
    <Router>
        <Nav cardItem={cardItem}/>
        <Route exact path="/" component={Home} />
        <Route exact path='/products' component={() => <Products handleCardItem={handleCardItem} cardItem={cardItem} />}/>
        <Route exact path="/:id" component={Detail}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
    </Router>
</>
  );
}

export default App;
