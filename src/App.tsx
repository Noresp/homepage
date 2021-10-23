import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
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
              <div>
                Left sidebar
              </div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/users">Users</Link>
                  </li>
                </ul>
              </nav>
            </Col>
            <Col xs={10} className="App-content">
              <div className="Main-content">
                <Switch>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/users">
                    <Users />
                  </Route>
                  <Route path="/">
                    <Home />
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

function sendAlert() {
  console.log("Hello world");
}

function Home() {
  return <>
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
    <p>
      Now with support for Typescript!
    </p>
    <Button onClick={() => sendAlert()}>Test</Button>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </>;
}

function About() {
  return <p>
    About!
  </p>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
