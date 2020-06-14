import React from 'react';
import {Container, Image} from 'react-bootstrap';

const img = require("./images/karna.jpg");

const light={
    paddingTop:'2%'
}
const dark= {
    paddingTop:'2%',
    color:'white'
}

export default function KBanner(props) {
    return (
        <Container fluid style={{textAlign:'center' }}>
            <Image src={img} rounded fluid/>
            <div style={(props.theme==='DARK')?dark:light}>
                <h3>Karna Errande</h3>
                <h6>@kerrande</h6>
                <p>That's me! Passionate Computer Science student and aspiring Full Stack Developer</p>
            </div>
        </Container>
    );
}
