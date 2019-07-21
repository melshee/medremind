import React, { Component } from "react";
import { Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';
import logo from './assets/logo.png'


class NavBar extends Component {
  render() {
    console.log("LOGO", logo)
    return (
      <div>
        <Nav style={{backgroundColor: '#5d49d1'}} tabs>
          <NavbarBrand disabled><img src={logo} style={{}}/></NavbarBrand>
          <NavItem>
            <NavLink href="#" onClick={() => this.props.updateView("home")}>HOME</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={() => this.props.updateView("todo")}>TO-DO</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={() => this.props.updateView("list")}>MED LIST</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={() => this.props.updateView("account")}>MY ACCOUNT</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default NavBar;