import React, {Component} from "react";
import "./SearchBar.css";

class SearchBar extends Component {

    state = {
        value: "",
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value.substr(0,20)
        }/* , () => {console.log(this.state.value);} */);

        if (this.state.value !== "") {
            return this.props.searchChat(this.state.value);
        } 
    }

    onSubmit = (e) => {
        e.preventDefault();
    }

    render () {
        return (
            <div className="search-bar">
                    <form onSubmit={this.onSubmit}>
                        <div className="burger">
                            <div class="level first"></div>
                            <div class="mid-level"></div>
                            <div class="level last"></div>
                        </div>
                        <input type="" value={this.state.value} onChange={this.handleChange} placeholder="Search..."/>
                    </form>
            </div>
        )
    }
}

export default SearchBar;