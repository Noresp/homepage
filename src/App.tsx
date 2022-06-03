import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
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
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/tier-lists" element={<TierLists />} />
                  <Route path="/" element={<Dashboard />} />
                </Routes>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </Router>
  );
}

export default App;
