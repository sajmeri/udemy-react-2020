import React, {Component} from 'react';
import {CardList} from "./components/cardlist/card-list";
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state={
      monsters: [],
      searchField:''
    }
  }

  componentDidMount(){
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
  render(){
    const {monsters, searchField} = this.state;
    const fiteredMonsters = monsters.filter(monster=>monster.name.includes(searchField));
    return (
      <div className="App">
        <input type="search" placeholder="Search Monserr!"  onChange={
          e => {this.setState(
            {searchField: e.target.value}    
            )}
        }/>
        <CardList monsters={fiteredMonsters} />        
      </div>
    );
  }
 
}

export default App;
