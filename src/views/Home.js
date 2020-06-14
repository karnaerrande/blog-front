import React from 'react';
import Blog from '../components/Blog';
import Sidebar from '../components/Sidebar';
import { Container, Row, Col } from 'react-bootstrap';


export default function Home(props) {
    return (
        <Container>
            <Row>
                <Col md={8}>
                    <Blog theme={props.theme} posts={props.posts} />
                </Col>
                <Col md={4}>
                    <Sidebar theme={props.theme} change={props.change} />
                </Col>
            </Row>
        </Container>
    );
}