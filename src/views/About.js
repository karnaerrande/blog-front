import React from 'react';
import { Container } from 'react-bootstrap';

const abtStyle={
    textAlign:'center'
}

export default function About(props){
    return(
        <Container style={abtStyle}>
        <h1>About</h1>
        </Container>
    );
}