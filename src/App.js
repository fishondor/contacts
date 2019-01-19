import React, { Component } from 'react';

import ContactsList from './components/ContactsList';
import Navbar from './components/Navbar';
import './App.scss';

import * as ContactsAPI from './providers/ContactsApi';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    }
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentDidMount() {
    ContactsAPI.getAll()
      .then((contacts) => {
        this.setState({ contacts })
      })
  }
  handleSearch(value){
    //UPDATE LIST WITH SEARCH RESULTS
  }
  render() {
    return (
      <div>
        <Navbar onSearch={this.handleSearch}></Navbar>
        <ContactsList contacts={this.state.contacts}></ContactsList>
      </div>
    );
  }
}

export default App;
