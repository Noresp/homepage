import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
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
          </Col>
          <Col xs={10} className="App-content">
            <div className="Main-content">
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
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function sendAlert() {
  console.log("Hello world");
}

export default App;
