import React, { Component } from 'react'

export default class Search extends Component {
    state = {
        Search: 'panda'
    }
    SearchHandler = (e) => {
        if (e.key === "Enter") {
            this.props.SearchMv(this.state.Search)
        }
    }
    render() {
        console.log(this.state.Search);
        return (
            <div className="container white-text input-field col">
                <input
                    placeholder="Placeholder"
                    id="first_name"
                    type="text"
                    className="validate"
                    value={this.state.Search}
                    onChange={(e) => this.setState({ Search: e.target.value })}
                    onKeyDown={this.SearchHandler}
                />
            </div>
        )
    }
}
