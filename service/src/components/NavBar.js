import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';

function AppNavBar() {
  return <>
    <NavBar bg="dark" expend="lg" variant="dark">
      <NavBar.Brand href="/">SW Codex</NavBar.Brand>
      <NavBar.Toggle aria-controls="basic-navbar-nav" />
      <NavBar.Collapse id="basic-navbar-nav">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/people">People</Nav.Link>
      </NavBar.Collapse>
    </NavBar>
  </>
}

export default AppNavBar;