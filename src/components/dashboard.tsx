import React from "react";
import Button from 'react-bootstrap/Button';
import logo from 'assets/logo.svg';

function Dashboard() {
  const sendAlert = () => {
    console.log("Hello world");
  }

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

export default Dashboard;