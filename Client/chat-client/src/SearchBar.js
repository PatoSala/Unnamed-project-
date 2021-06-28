import React, {Component} from "react";
import "./SearchBar.css";

class SearchBar extends Component {

    state = {
        value: undefined,
        menu: false
    }

    onClick = () => {
        this.setState({
            menu: !this.state.menu
        });
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value.substr(0,20)
        }, this.props.searchChat(this.state.value));
    }

    onSubmit = (e) => {
        e.preventDefault();
    }

    render () {

        let levelFirst = "level first child " + (this.state.menu ? "clicked" : "not-clicked");
        let levelMid = "mid-level child " + (this.state.menu ? "clicked" : "not-clicked");
        let levelLast = "level last child " + (this.state.menu ? "clicked" : "not-clicked");

        return (

            <div className="search-bar">
                    <form onSubmit={this.onSubmit}>
                        <div className="burger" onClick={this.onClick}>
                            <div class={levelFirst}></div>
                            <div class={levelMid}></div>
                            <div class={levelLast}></div>
                        </div>
                        <input type="" value={this.state.value} onChange={this.handleChange} placeholder="Search..."/>
                    </form>
            </div>
        )
    }
}

export default SearchBar;