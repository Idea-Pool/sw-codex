import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';

function AppNavBar() {
  return <>
    <NavBar bg="light" expend="lg">
      <NavBar.Brand href="/">SW Codex</NavBar.Brand>
      <NavBar.Toggle aria-controls="basic-navbar-nav" />
      <NavBar.Collapse id="basic-navbar-nav">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/cast">Cast</Nav.Link>
      </NavBar.Collapse>
    </NavBar>
  </>
}

export default AppNavBar;