import React, {Component} from "react";
import "../css/Menu.css";
import arrow from "../img/arrow.png";

class Menu extends Component {
    constructor(props) {
        super(props);
        // set two state variable to handle user current page and sidebar toggle
        this.state = {
            menuStatus: [false, false, false, false, false, false, false],
        };
    }

    menuClick(index) {
        let newMenuStatus = [false, false, false, false, false, false, false];
        newMenuStatus[index] = !this.state.menuStatus[index];
        this.setState({menuStatus: newMenuStatus});

    }

    render() {
        return (
            <div>
                <div className="menus" onClick={this.menuClick.bind(this, 0)}>
                    <p className="cuisine">Chinese</p>
                    <img src={arrow} className={this.state.menuStatus[0] ? "arrow-active" : "arrow"} alt=""/>
                </div>
                <div className={this.state.menuStatus[0] ? "boxes-active" : "boxes"}>
                </div>
                <div className="menus" onClick={this.menuClick.bind(this, 1)}>
                    <p className="cuisine">British</p>
                    <img src={arrow} className={this.state.menuStatus[1] ? "arrow-active" : "arrow"} alt=""/>
                </div>
                <div className={this.state.menuStatus[1] ? "boxes-active" : "boxes"}>
                </div>
                <div className="menus" onClick={this.menuClick.bind(this, 2)}>
                    <p className="cuisine">American</p>
                    <img src={arrow} className={this.state.menuStatus[2] ? "arrow-active" : "arrow"} alt=""/>
                </div>
                <div className={this.state.menuStatus[2] ? "boxes-active" : "boxes"}>
                </div>
                <div className="menus" onClick={this.menuClick.bind(this, 3)}>
                    <p className="cuisine">Japanese</p>
                    <img src={arrow} className={this.state.menuStatus[3] ? "arrow-active" : "arrow"} alt=""/>
                </div>
                <div className={this.state.menuStatus[3] ? "boxes-active" : "boxes"}>
                </div>

                <div id="counter">
                    <p>Open Calories Counter</p>
                </div>
            </div>
        );
    }
}

export default Menu;
