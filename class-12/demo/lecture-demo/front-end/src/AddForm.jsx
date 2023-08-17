import React from "react";
import { Button, Container, Form } from "react-bootstrap";

class AddForm extends React.Component {

    submitHandler = (e) => {
        e.preventDefault();

        const form = e.target;
        // console.log(form);

        const newDog = {
            name: form.name.value,
            color: form.color.value,
            location: form.location.value,
            age: form.age.value,
            longTail: form.longTail.checked
        };

        this.props.postDog(newDog);
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.submitHandler}>

                    <Form.Group controlId="name">
                        <Form.Label>Dog Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group controlId="color">
                        <Form.Label>Dog Color</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group controlId="location">
                        <Form.Label>Dog location</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group controlId="age">
                        <Form.Label>Dog age</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>

                    <Form.Group controlId="longTail">
                        <Form.Check type="checkbox" label="Has Long Tail?" />
                    </Form.Group>

                    <Button type="submit">Add Dog</Button>
                </Form>
            </Container>
        )
    }
}

export default AddForm