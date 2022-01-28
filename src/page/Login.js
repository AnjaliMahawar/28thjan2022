import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';

//const Config = require('../Config.json');


export default function Login() {
    const [identifier,setIdentifier] = useState('');
  // const [email,setEmail] = useState('b');
   const [password,setPassword] = useState('');



    //state

    //function
    let Login=()=>{
        console.log("okkkk");
        console.log(identifier);
        console.log(password);
        axios.post('https://secret-river-12384.herokuapp.com/api/auth/local', { //https://secret-river-12384.herokuapp.com/
    identifier: identifier,
    password: password,
  })
  .then(response => {
    // Handle success.
    console.log('Well done!');
    //if(response.user){
      localStorage.setItem('token',response.data.jwt);
      localStorage.setItem('userinfo',JSON.stringify(response.data.user));
    swal("Well done !", JSON.stringify(response.data.user), "success");
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
    //}
   
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
    
    
      swal("oopps!",JSON.stringify(error.response),"error")
    
  });
 
    }

    //return
  return (
    <Container>
    <Row>
      <Col xs={{ offset:3, span:6}}>
          <h1>LOGIN SYSTEM</h1>
      <Form>
 <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>Email address</Form.Label>
   <Form.Control type="email" name="identifier" value={identifier}  onChange={(e)=>{setIdentifier(e.target.value)}} placeholder="Enter email" />
   <Form.Text className="text-muted">
     We'll never share your email with anyone else.
   </Form.Text>
 </Form.Group>

 <Form.Group className="mb-3" controlId="formBasicPassword">
   <Form.Label>Password</Form.Label>
   <Form.Control type="password" name="password" value={ password } onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
 </Form.Group>
 
 <Button variant="primary" type="button" onClick={()=>{ Login()}}>
   Submit
 </Button>
</Form>
      </Col>
    </Row>
 </Container>

  );
}
