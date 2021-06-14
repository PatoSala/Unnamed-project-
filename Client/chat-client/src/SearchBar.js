import React, {Component} from "react";
import "./SearchBar.css";

class SearchBar extends Component {
    render () {
        return (
            <div className="search-bar">
                    <form action="">
                        <div className="burger">
                            <div class="level first"></div>
                            <div class="mid-level"></div>
                            <div class="level last"></div>
                        </div>
                        <input type="" placeholder="Search..."/>
                    </form>
            </div>
        )
    }
}

export default SearchBar;