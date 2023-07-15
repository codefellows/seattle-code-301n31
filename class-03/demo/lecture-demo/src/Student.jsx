import React from "react";
import { Card } from "react-bootstrap";

class Student extends React.Component {

    handleModal = () =>{
        this.props.setSelectedStudent(this.props.student)
        this.props.showStudentModal();
    }

    render() {
        return (
            <Card
                style={{ width: '18rem' }}
                onClick={this.handleModal}
            >
                <Card.Img variant="top" src={this.props.student.imgUrl} height={250} />
                <Card.Body>
                    <Card.Title>{this.props.student.name}</Card.Title>
                </Card.Body>
            </Card>
        )
    }
}

export default Student;