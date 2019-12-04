import React from 'react';
import { connect } from 'react-redux';

import CardList from './components/CardList/CardList.component';
import SearchBox from './components/SearchBox/SearchBox.component';
import { searchChange, requestMonsters } from './actions';

import './App.scss'

const mapStateToProps = state => {
  console.log(state)
  return {
    searchField: state.searchMonsters.searchField,
    isPending: state.requestMonsters.isPending,
    monsters: state.requestMonsters.monsters,
    error: state.requestMonsters.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(searchChange(event.target.value)),
    onRequestMonsters: () => dispatch(requestMonsters())
  }
}

class App extends React.Component {

  componentDidMount() {
    this.props.onRequestMonsters();
  }

  render() {
    const { isPending, searchField, monsters, onSearchChange } = this.props;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    })

    if (isPending) {
      return <h1 className="App__heading">Loading</h1>
    } else {
      return (
        <div className="App">
          <h1 className="App__heading">Monster Rolodex</h1>
          <SearchBox placeholder="search monsters" searchChange={onSearchChange}/>
          <CardList monsters={ filteredMonsters }/>
        </div>
      )
    }
      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
