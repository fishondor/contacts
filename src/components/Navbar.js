import React, { Component } from 'react';

import Search from './Search';
import '../styles/components/navbar.scss';

import {
    NAVBAR
} from '../constants/strings';

const AppTitle = () => (
    <p className="title">{NAVBAR.TITLE}</p>
)

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch(value){
        if(this.props.onSearch)
            this.props.onSearch(value);
    }
    render() {
        return (
            <div className="navbar">
                <AppTitle></AppTitle>
                <Search onSubmit={this.handleSearch}></Search>
            </div>
        );
    }
}

export default Navbar;