import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{ this.state.apiResponse }</p>
          <p>This is below the API Repsonse</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            { this.state.apiResponse }
        </a>
        </header>
      </div>
    );
  }
}

export default App;
