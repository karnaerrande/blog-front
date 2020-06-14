import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Image, Card, Row } from 'react-bootstrap';

export const Post = (props) => {

    const [img, setImg] = useState('')
    const [authImg, setAuthImg] = useState('')

    const fetchImg = async () => {
        //should switch img here
        var temp = 'http://localhost:5000/getImage/' + props.post.img_url
        axios.get(temp)
            .then(res => {
                if (img == '') {
                    var temp = "" + res.data.results.image
                    console.log(temp.substring(2, temp.length - 1))

                    setImg(temp.substring(2, temp.length - 1))
                }
            })

        var temp = 'http://localhost:5000/getImage/' + props.post.auth_img
        axios.get(temp)
            .then(res => {
                if (authImg == '') {
                    var temp = "" + res.data.results.image
                    console.log(temp.substring(2, temp.length - 1))

                    setAuthImg(temp.substring(2, temp.length - 1))
                }
            })


    }

    useEffect(() => {
        fetchImg();
    }, []);

    return (
        <div style={cStyle}>
            <Card bg={props.theme==='DARK'?'dark':'light'} text={props.theme==='DARK'?'light':'dark'}>
                <Card.Body>
                    <Card.Title><h3>{props.post.title}</h3></Card.Title>

                    {(img !== '') ?
                        <Card.Img fluid src={"data:image;base64," + img} />
                        :
                        <p>loading image</p>
                    }
                    <Card.Text><small>{props.post.date} >_</small><p>  {props.post.content}</p></Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Row>
                        <Image style={profile} roundedCircle src={"data:image;base64," + authImg} />
                        <div style={name}>{props.post.author_first} {props.post.author_last}</div>
                    </Row>
                </Card.Footer>
            </Card>
        </div>
    );
}
const cStyle = {
    paddingBottom: '10px'
};
const profile = {
    width: '40px',
    height: '40px'
}
const name={
    fontSize:'16px',
    paddingTop:'6px',
    paddingLeft:'10px',
    verticalAlign:'sub'
}