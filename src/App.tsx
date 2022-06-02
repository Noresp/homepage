import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//bootstrap
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

//components
import Sidebar from './components/sidebar';
import TierLists from './components/tier-lists';
import Dashboard from './components/dashboard';
import About from 'components/about';

function App() {
  return (
    <Router basename="/homepage">
      <div className="App">
        <Container fluid>
          <Row >
            <Col className="App-Navbar">
              <div>
                Navbar
              </div>
            </Col>
          </Row>
          <Row >
            <Col xs={2} className="App-Sidebar">
              <Sidebar />
            </Col>
            <Col xs={10} className="App-content">
              <div className="Main-content">
                <Switch>
                  <Route path="/about">
                    < About />
                  </Route>
                  <Route path="/tier-lists">
                    <TierLists />
                  </Route>
                  <Route path="/">
                    <Dashboard />
                  </Route>
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
