import React, { Component } from 'react';

import '../styles/components/search.scss';
import {
    SEARCH_ICON
} from '../constants/images';

import {
    SEARCH
} from '../constants/strings';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        if(this.props.onSubmit)
            this.props.onSubmit(this.state.value);
    }
    handleChange(event) {
        event.preventDefault();
        this.setState({value: event.target.value});
    }
    render() {
        return (
            <div className="search-wrapper">
                <input className="search" 
                    type="text" 
                    placeholder={SEARCH.HINT}
                    value={this.state.value}
                    onChange={this.handleChange}></input>
                <img className="search-icon" 
                    src={SEARCH_ICON} 
                    alt="Search"
                    onClick={this.handleSubmit}></img>
            </div>
        );
    }
}

export default Search;