import React from 'react';
import { Popover, Card, OverlayTrigger, Form, Button, ButtonGroup, ToggleButton } from 'react-bootstrap';
import KBanner from './KBanner';

export default function Sidebar(props) {
    const popover = (
        <Popover>
            <Popover.Content>
                <ButtonGroup vertical>
                    <Button onClick={() => props.change('FALL')} variant="outline-warning">Fall</Button>
                    <Button onClick={() => props.change('WINTER')} variant="outline-info">Winter</Button>
                    <Button onClick={() => props.change('SPRING')} variant="outline-success">Spring</Button>
                    <Button onClick={() => props.change('SUMMER')} variant="outline-danger">Summer</Button>
                </ButtonGroup>
            </Popover.Content>
        </Popover>
    );
    return (
        <div style={cStyle}>
            <KBanner theme = {props.theme}/>
            <Card bg={props.theme==='DARK'?'dark':'light'} text={props.theme==='DARK'?'dark':'light'}>
                <Card.Body>
                    <Form.Control type="text" placeholder="Search..." />
                    <ButtonGroup toggle className="mt-3">
                        <ToggleButton onClick={() => props.change('LIGHT')} variant="secondary" type="radio" name="radio" defaultChecked value="1">
                            Light
                        </ToggleButton>
                        <OverlayTrigger trigger="focus" placement="top" overlay={popover}>
                            <Button variant="info" type="radio" name="radio" value="2">
                                ...
                        </Button>
                        </OverlayTrigger>
                        <ToggleButton onClick={() => props.change('DARK')} variant="dark" type="radio" name="radio" value="3">
                            Dark
                        </ToggleButton>
                    </ButtonGroup>
                    <div style={myItem}>
                        <a disabled href="/write">Want to be featured?</a>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}
const myItem = {
    paddingTop: '10px'
}
const cStyle = {
    paddingBottom: '10px',
    textAlign: 'center'
};