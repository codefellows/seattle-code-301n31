import React from "react";
import Header from './Header'
import Footer from './Footer'
import studentData from './studentData.json'
import Home from "./Home";
import SelectedStudent from "./SelectedStudent";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      student: {},
      showModal: false
    }
  }

  showStudentModal = () => this.setState({showModal: true})
  hideStudentModal = () => this.setState({showModal: false})

  setSelectedStudent = (student) => this.setState({student: student}, () => console.log(this.state.student))

  render() {
    return (
      <>
        <Header/>
        <Home 
          studentData={studentData}
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