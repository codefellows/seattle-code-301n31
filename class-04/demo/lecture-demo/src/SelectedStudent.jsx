import React from "react";
import { Modal } from "react-bootstrap";

class SelectedStudent extends React.Component {
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.hideStudentModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.student.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={this.props.student.imgUrl} alt={this.props.student.name}/>
                </Modal.Body>
            </Modal>
        )
    }
}

export default SelectedStudent;