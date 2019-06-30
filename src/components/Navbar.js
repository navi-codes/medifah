import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import Logout from '../Test';

class NavHeader extends Component{
  render(){
    return(
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt="MediFaH icon"
        src="/favicon.png"
        width="40"
        height="40"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="medifah">Medifah</Nav.Link>
      <Nav.Link href="voice">Voice</Nav.Link>
      <Nav.Link href="map">Find Doctor</Nav.Link>
      <Nav.Link href="navigator">Navigator</Nav.Link>

      <Logout />
    </Nav>

  </Navbar>
      );
  }
}
export default NavHeader;
