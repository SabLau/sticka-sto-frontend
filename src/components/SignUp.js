import React, { useState } from 'react';
import {
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  Col,
  Row,
} from 'react-bootstrap';
import './css/SignUp.css';
import axios from 'axios';
import { Redirect } from 'react-router';

const BACKEND_SERVER = 'https://sticka-sto-backend.herokuapp.com/';

function SignUp() {
  //if form successfully submitted, redirect is true
  const [redirect, setRedirect] = useState(false);
  //if passwords don't match passError is true
  const [passError, setPassError] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [formState, setFormState] = useState('');
  const [zipcode, setZipcode] = useState('');

  function passwordValidation(){
    if (password != confirmPassword){
      setPassError(true);
    }else{
      setPassError(false);
    }
  }

  function validateForm() {
    return (
      email.length > 0 && password.length > 0 && password === confirmPassword
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    passwordValidation();
    if(validateForm()){
      const name = firstName + ' ' + lastName;
      const shippingAddress =
        address1 + ' ' + address2 + ' ' + city + ' ' + formState + ', ' + zipcode;
      let userInfo = {
        email: email,
        password: password,
        is_admin: false,
        shipping_address: shippingAddress,
        name: name,
      };
      axios.post(BACKEND_SERVER + 'account_creation', userInfo).then((result) => {
        if(result.data.result){
          setRedirect(true);
        };
      });
    }
  }

  if(redirect){
    return <Redirect to="/" />
  }else{

    return (
      <div className="signUp-container">
        <form onSubmit={handleSubmit}>
          <Row>
            <FormGroup as={Col} controlId="firstName" bssize="large">
              <FormLabel>First Name</FormLabel>
              <FormControl
                name="first-name"
                autoFocus
                type="text"
                value={firstName}
                maxLength="20"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormGroup>
            <FormGroup as={Col} controlId="lastName" bssize="large">
              <FormLabel>Last Name</FormLabel>
              <FormControl
                autoFocus
                name="last-name"
                type="text"
                maxLength="20"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormGroup>
          </Row>
          <FormGroup controlId="email" bssize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              name="email"
              type="email"
              value={email}
              maxLength="30"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="password" bssize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={password}
              maxLength="20"
              minLength="8"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          { 
          passError ?
            <p class="pass-error">Passwords don't match!</p>
          : null 
          }
          <FormGroup controlId="confirmPassword" bssize="large">
            <FormLabel>Confirm Password</FormLabel>
            <FormControl
              value={confirmPassword}
              maxLength="20"
              minLength="8"
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          <FormGroup controlId="Address1">
            <FormLabel>Address 1</FormLabel>
            <FormControl
              placeholder="123 Main St"
              type="text"
              maxLength="50"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="Address2">
            <FormLabel>Address 2</FormLabel>
            <FormControl
              placeholder="Apt, Ste..."
              type="text"
              maxLength="20"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
            />
          </FormGroup>
          <Row>
            <FormGroup as={Col} controlId="City">
              <FormLabel>City</FormLabel>
              <FormControl
                placeholder="City"
                type="text"
                maxLength="30"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </FormGroup>
            <FormGroup as={Col} controlId="formState">
              <FormLabel>State</FormLabel>
              <FormControl
                placeholder="State"
                type="text"
                maxLength="2"
                value={formState}
                onChange={(e) => setFormState(e.target.value)}
              />
            </FormGroup>
            <FormGroup as={Col} controlId="zipcode">
              <FormLabel>Zipcode</FormLabel>
              <FormControl
                placeholder="Zipcode"
                type="tel"
                maxLength="5"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
              />
            </FormGroup>
          </Row>
          <Button block bssize="large" type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
