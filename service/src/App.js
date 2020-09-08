import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import NavBar from './components/NavBar';
import People from './pages/People';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <NavBar />
      <Container>
        <Row>
          <Col>
            <Switch>
              <Route path="/people">
                <People />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
