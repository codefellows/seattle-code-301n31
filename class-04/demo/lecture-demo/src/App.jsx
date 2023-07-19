import React from "react";
import Header from './Header'
import Footer from './Footer'
import studentData from './studentData.json'
import Home from "./Home";
import SelectedStudent from "./SelectedStudent";
import { Form } from "react-bootstrap";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      student: {},
      showModal: false,
      filteredStudentData: studentData
    }
  }

  showStudentModal = () => this.setState({showModal: true})
  hideStudentModal = () => this.setState({showModal: false})

  setSelectedStudent = (student) => this.setState({student: student}, () => console.log(this.state.student))

  updateFilteredData = (e) =>{
    const targetedTeam = e.target.value;
    if(targetedTeam === 'All'){
      this.setState({filteredStudentData: studentData})
    }
    else{
      const updatedData = studentData.filter(student => student.team === targetedTeam);
      this.setState({filteredStudentData: updatedData})
    }
  }

  render() {
    return (
      <>
        <Header/>

        <Form.Select onChange={this.updateFilteredData}>
          <option value={'All'}>All Students</option>
          <option value={'Red'}>Red Team</option>
          <option value={'Blue'}>Blue Team</option>
        </Form.Select>

        <Home 
          studentData={this.state.filteredStudentData}
          setSelectedStudent={this.setSelectedStudent}
          showStudentModal={this.showStudentModal}
        />
        <Footer/>
        <SelectedStudent
          showModal={this.state.showModal}
          hideStudentModal={this.hideStudentModal}
          student={this.state.student}
        />
      </>
    )
  }
}

export default App;