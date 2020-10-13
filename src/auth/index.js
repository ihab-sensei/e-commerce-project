import React, { useState } from "react";
import { withRouter, Redirect } from "react-router";
import {Link} from "react-router-dom";
import { Button, FormGroup, FormControl, Container } from "react-bootstrap";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler = (event,email, password) => {
                event.preventDefault();
    };

    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;

        if(name === 'userEmail') {
            setEmail(value);
        }
        else if(name === 'userPassword'){
          setPassword(value);
        }
    };
  
  return (
    <Container>
       <form>
              <FormGroup controlId="email" bsSize="large">
                <h2>Email</h2>
                <FormControl
                  autoFocus
                  type="email"
                  name="email"
                  placeholder="Email" 
                  onChange = {(event) => onChangeHandler(event)}
                />
              </FormGroup>
              <FormGroup controlId="password" bsSize="large">
                <h2>Password</h2>
                <FormControl
                  name="password"
                  type="password" 
                  placeholder="Password"
                   onChange = {(event) => onChangeHandler(event)}
                />
              </FormGroup>
              <Button type="submit">
                Login
              </Button>
            </form>
            <label>Don't you have an account<Link to="./signup"> Sign Up</Link></label> 
    </Container>    
  );
};

export default Login