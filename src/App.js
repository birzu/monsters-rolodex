import React from 'react';

import './App.scss'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchField: '',
      robots: [],
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="App__heading">Monster Rolodex</h1>
      </div>
    )
  }
}

export default App;
