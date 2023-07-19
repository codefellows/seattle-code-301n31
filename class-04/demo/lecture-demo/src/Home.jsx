import React from "react";
import Student from './Student'
import { Container, Row } from "react-bootstrap";

class Home extends React.Component {
  render() {
    return (
      <Container>

        <Row>
          {
            this.props.studentData.map((student, idx) =>
              <Student
                key={idx}
                student={student}
                setSelectedStudent={this.props.setSelectedStudent}
                showStudentModal={this.props.showStudentModal}
              />
            )
          }
        </Row>
      </Container>
    )
  }
}

export default Home;