import React, {Component} from 'react';
import {CardList} from "./components/cardlist/card-list";
import {Search} from "./components/serach/search"
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
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) => {
    this.setState(
      {searchField: e.target.value}    
    )
  }

  render(){
    const {monsters, searchField} = this.state;
    const fiteredMonsters = monsters.filter(monster=>monster.name.includes(searchField));
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <Search placeholder="Search Monserr!"  handleChange={this.handleChange} />
        <CardList monsters={fiteredMonsters} />        
      </div>
    );
  }
 
}

export default App;
