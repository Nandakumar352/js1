// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Introduction from './components/Introduction';
import Qualification from './components/Qualification';
import Projects from './components/Projects'
// import Hello from './components/Hello'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      name:"Dileep",
      address:"RV College of Engineering",
      qualifications:[
        {
          SNo:1,
          College:"RVCE",
          Degree: "MCA",
          Marks:"8"
        },

        {
          SNo:2,
          College:"	NIE",
          Degree: "BSc",
          Marks:"8"
        },
        {
          SNo:3,
          College:"Hongirana",
          Degree: "PUC",
          Marks:"8"
        }
      ]
    }
  }
  render(){
    return (
      <>
        {/* <div>Hello!!</div>
        <Hello/> */}

        <Introduction 
        name={this.state.name}
        address={this.state.address}/>

        <Qualification
        qualifications={this.state.qualifications}/>

        <Projects/>


      </>
    )
  }
}

export default App;
