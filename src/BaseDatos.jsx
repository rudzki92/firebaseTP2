import React, { Component } from 'react';
import { database } from './FirebaseConfig';
class App extends Component {
  constructor(props) {
    super(props);
    console.log(database);
  }

  render() {
    return (
      <div>
        <h1>App Conectada a Firebase</h1>
      </div>
    );
  }
}

export default App;
