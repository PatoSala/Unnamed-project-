import React, {Component} from "react";
import "./NavBar.css";

class NavBar extends Component {
    render () {
        return (
            <div className="nav-bar">
                <div className="nav-item">
                    <a href="http://localhost:3000"><i class="fas fa-home"></i></a>
                </div>
                <div className="nav-item">
                    <a href="http://localhost:3000/check"><i class="fas fa-user"></i></a>
                </div>
                <div className="nav-item">
                    <a href=""><i class="fas fa-cog"></i></a>
                </div>
            </div>
        )
    }
}

export default NavBar;