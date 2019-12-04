import React from 'react';

import CardList from './components/CardList/CardList.component';
import SearchBox from './components/SearchBox/SearchBox.component';

import './App.scss'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchField: '',
      monsters: [],
    }
  }

  onSearchChange = event => {
    this.setState( {searchField: event.target.value} );
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(monsters => this.setState({monsters: monsters}));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
      <div className="App">
        <h1 className="App__heading">Monster Rolodex</h1>
        <SearchBox placeholder="search monsters" searchChange={this.onSearchChange}/>
        <CardList monsters={ filteredMonsters }/>
      </div>
    )
  }
}

export default App;
