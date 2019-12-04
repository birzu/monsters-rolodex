import React from 'react';

import CardList from './components/CardList/CardList.component';

import './App.scss'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchField: '',
      monsters: [],
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(monsters => this.setState({monsters: monsters}));
  }

  render() {
    const { searchField, monsters } = this.state;
    return (
      <div className="App">
        <h1 className="App__heading">Monster Rolodex</h1>
        <CardList monsters={ monsters }/>
      </div>
    )
  }
}

export default App;
