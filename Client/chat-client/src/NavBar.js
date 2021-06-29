import React, {Component} from "react";
import "./NavBar.css";

class NavBar extends Component {
    render () {
        return (
            <div className="nav-bar">
                <div className="nav-icons">
                    <div className="nav-item">
                        <a href="http://localhost:3000"><img src="https://img.icons8.com/ios-glyphs/30/000000/pavilion.png"/></a>
                    </div>
                    <div className="nav-item">
                        <a href="http://localhost:3000/check"><img src="https://img.icons8.com/ios-glyphs/30/000000/user--v1.png"/></a>
                    </div>
                    <div className="nav-item settings">
                        <a href=""><img src="https://img.icons8.com/ios-glyphs/30/000000/settings.png"/></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;