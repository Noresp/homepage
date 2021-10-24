import React from "react";
import Button from 'react-bootstrap/Button';
import logo from 'assets/logo.svg';

class Dashboard extends React.Component {
    render() {
        return <>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Now with support for Typescript!
        </p>
        <Button onClick={() => this.sendAlert()}>Test</Button>
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

    sendAlert() {
        console.log("Hello world");
      }
}

export default Dashboard;