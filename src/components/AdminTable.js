import React, { useRef } from 'react';
import axios from 'axios';
import { Form, Table, Button, Container, Modal } from 'react-bootstrap';

const but = {
    textAlign: 'center'
}

const NewAuthorModal = (props) => {
    return <h1>New Author modal</h1>
}

const EditAuthorModal = (props) => {
    function fetchAuth(id,auth_e, pass,first, last, img, bio, email) {
        axios.get('http://localhost:5000/')
            .then(res => {

            })
    }
    const firstRef = useRef();
    const lastRef = useRef();
    const imgRef = useRef();
    const bioRef = useRef();
    const emailRef = useRef();

    const handleSubmit = event => {
        fetchAuth(props.data().id, props.creds.email, props.creds.pass, firstRef.current.value, lastRef.current.value, imgRef.current.value, bioRef.current.value, emailRef.current.value);
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit user: {props.data().first_name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group>
                    <Form.Label>ID</Form.Label>
                    <Form.Control disabled type="input" defaultValue={props.data().id} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="input" ref={firstRef} defaultValue={props.data().first_name} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="input" ref={lastRef} defaultValue={props.data().last_name} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" ref={imgRef} defaultValue={props.data().img_url} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Bio</Form.Label>
                    <Form.Control type="input" ref={bioRef} defaultValue={props.data().bio} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="input" ref={emailRef} defaultValue={props.data().email} />
                </Form.Group>
                <Button  variant="outline-info" onClick={handleSubmit}>
                    Submit
                </Button>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

const NewPostModal = (props) => {
    return (<h1>New Post Modal</h1>);
}

const EditPostModal = (props) => {
    function fetchAuth(email, pass,content, date, title, img, id) { 
        axios.get('http://localhost:5000/{}/{}/{}/{}/{}/{}/{}'.format(email, pass,content, date, title, img, id))
            .then(res => {
                
            })
    }
    const contentRef = useRef();
    const titleRef = useRef();
    const imgRef = useRef();
    
    const handleSubmit = event => {
        fetchAuth(props.creds.email, props.creds.pass, contentRef.current.value, props.data().date, titleRef.current.value, imgRef.current.value, props.data().post_id);
    };
    
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit post: {props.data().title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group>
                    <Form.Label>Author id</Form.Label>
                    <Form.Control disabled type="input" defaultValue={props.data().author_id} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control disabled type="input" defaultValue={props.data().author_first} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control disabled type="input" defaultValue={props.data().author_last} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Content</Form.Label>
                    <Form.Control type="input" ref={contentRef} defaultValue={props.data().content} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Date</Form.Label>
                    <Form.Control disabled type="input" defaultValue={props.data().date} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="input" ref={titleRef} defaultValue={props.data().title} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Post image</Form.Label>
                    <Form.Control ref={imgRef} type="file"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Post id</Form.Label>
                    <Form.Control disabled type="input" defaultValue={props.data().post_id} />
                </Form.Group>
                <Button  variant="outline-info" onClick={handleSubmit}>
                    Submit
                </Button>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export const AdminTable = (props) => {
    const [authShow, setAuthShow] = React.useState(false);
    const [postShow, setPostShow] = React.useState(false);
    const [newAuth, setNewAuth] = React.useState(false);
    const [newPost, setNewPost] = React.useState(false);
    const [post, setPost] = React.useState(props.posts);
    const [author, setAuthor] = React.useState(props.authors);

    const getPost = () => {
        return post
    }
    const getAuthor = () => {
        return author
    }

    return (
        <div>
            <h2>Posts</h2>
            <EditPostModal creds={props.creds} data={getPost} show={postShow} onHide={() => setPostShow(false)} />
            <Table responsive bordered>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {props.posts.map(function (value, idx) {
                        return (<tr>
                            <td>{value.title}</td>
                            <td>{value.author_first} {value.author_last}</td>
                            <td><Button variant="outline-primary" onClick={() => {
                                setPost(value)
                                setPostShow(true)
                                console.log(value)
                            }}>Edit</Button></td>
                            <td><Button variant="outline-danger">Delete</Button></td>
                        </tr>)
                    })}
                </tbody>
            </Table>
            <Container style={but}>
                <Button variant="outline-success" onClick={()=>{
                setNewAuth(true)
                }}>+</Button>
            </Container>

            <h2>Authors</h2>
            <EditAuthorModal creds={props.creds} data={getAuthor} show={authShow} onHide={() => setAuthShow(false)} />

            <Table responsive bordered>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {props.authors.map(function (value, idx) {
                        return (<tr>
                            <td>{value.first_name} {value.last_name}</td>
                            <td>{value.email}</td>
                            <td><Button variant="outline-primary" onClick={() => {
                                setAuthor(value)
                                setAuthShow(true)
                                console.log(value)
                            }}>Edit</Button></td>
                            <td><Button variant="outline-danger">Delete</Button></td>
                        </tr>)
                    })}
                </tbody>
            </Table>
            <Container style={but}>
                <Button variant="outline-success" onClick={()=>{
                    setNewPost(true)
                }}>+</Button>
            </Container>
        </div>
    )
}