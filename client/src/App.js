import React, { Component } from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';
import NavBar from './navbar'
import MedTable from './table';
// import MedTable from './newtable';

class App extends Component {
  constructor(props){
    super(props);
    this.updateView = this.updateView.bind(this);

    this.state = {
      currView: "home",
    };
  }

  updateView(view) {
    this.setState( prevState => {
      prevState.currView = view; 
      return prevState;
    })
  }

  render() {
    let body = null;

    if(this.state.currView === "home") {
      body = <p>HOME</p>
    } else if (this.state.currView === "list") {
      body = <MedTable />
    }
    else {
      body = <p>ELSE</p>
    }

    return (
      <div>
        <NavBar updateView={this.updateView}/>
        {body}
      </div>
    );
  }
}

export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
// }

// export default App;
