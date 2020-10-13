import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import {Link} from "react-router-dom";
import { Button, FormGroup, FormControl, Container } from "react-bootstrap";

const Signup = () => {
  
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
                />
              </FormGroup>
              <FormGroup controlId="password" bsSize="large">
                <h2>Password</h2>
                <FormControl
                  name="password"
                  type="password" 
                  placeholder="Password"
                />
              </FormGroup>
              <Button type="submit">
                 Sign Up
              </Button>
            </form>
            <label>Do you have an account<Link to="./login">Login</Link></label> 
    </Container>    
  );
};

export default Signup;