import React, {Component} from "react";
// import components

// import stylesheets
import "../css/DietPlanner.css";
import arrow from "../img/arrow.png";

class DietPlanner extends Component {
    constructor(props) {
        super(props);
        // set two state variable to handle user current page and sidebar toggle
        this.state = {
            menuStatus: [false, false, false, false, false, false, false]
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
                <div id="monday" className="daySelector" onClick={this.menuClick.bind(this, 0)}>
                    <p className="days">Monday</p>
                    <img src={arrow} className={this.state.menuStatus[0] ? "arrow-active" : "arrow"} alt=""/>
                </div>
                <div id="mondayBox" className={this.state.menuStatus[0] ? "boxes-active" : "boxes"}>
                    <div className="profile">profile</div>
                    <div className="tabs">tabs</div>
                </div>
                <div id="tuesday" className="daySelector" onClick={this.menuClick.bind(this, 1)}>
                    <p className="days">Tuesday</p>
                    <img src={arrow} className={this.state.menuStatus[1] ? "arrow-active" : "arrow"} alt=""/>
                </div>
                <div id="tuesdayBox" className={this.state.menuStatus[1] ? "boxes-active" : "boxes"}>
                    <div className="profile">profile</div>
                    <div className="tabs">tabs</div>
                </div>
                <div id="wednesday" className="daySelector" onClick={this.menuClick.bind(this, 2)}>
                    <p className="days">Wednesday</p>
                    <img src={arrow} className={this.state.menuStatus[2] ? "arrow-active" : "arrow"} alt=""/>
                </div>
                <div id="wednesdayBox" className={this.state.menuStatus[2] ? "boxes-active" : "boxes"}>
                    <div className="profile">profile</div>
                    <div className="tabs">tabs</div>
                </div>
                <div id="thursday" className="daySelector" onClick={this.menuClick.bind(this, 3)}>
                    <p className="days">Thursday</p>
                    <img src={arrow} className={this.state.menuStatus[3] ? "arrow-active" : "arrow"} alt=""/>
                </div>
                <div id="thursdayBox" className={this.state.menuStatus[3] ? "boxes-active" : "boxes"}>
                    <div className="profile">profile</div>
                    <div className="tabs">tabs</div>
                </div>
                <div id="friday" className="daySelector" onClick={this.menuClick.bind(this, 4)}>
                    <p className="days">Friday</p>
                    <img src={arrow} className={this.state.menuStatus[4] ? "arrow-active" : "arrow"} alt=""/>
                </div>
                <div id="fridayBox" className={this.state.menuStatus[4] ? "boxes-active" : "boxes"}>
                    <div className="profile">profile</div>
                    <div className="tabs">tabs</div>
                </div>
                <div id="saturday" className="daySelector" onClick={this.menuClick.bind(this, 5)}>
                    <p className="days">Saturday</p>
                    <img src={arrow} className={this.state.menuStatus[5] ? "arrow-active" : "arrow"} alt=""/>
                </div>
                <div id="saturdayBox" className={this.state.menuStatus[5] ? "boxes-active" : "boxes"}>
                    <div className="profile">profile</div>
                    <div className="tabs">tabs</div>
                </div>
                <div id="sunday" className="daySelector" onClick={this.menuClick.bind(this, 6)}>
                    <p className="days">Sunday</p>
                    <img src={arrow} className={this.state.menuStatus[6] ? "arrow-active" : "arrow"} alt=""/>
                </div>
                <div id="sundayBox" className={this.state.menuStatus[6] ? "boxes-active" : "boxes"}>
                    <div className="profile">profile</div>
                    <div className="tabs">tabs</div>
                </div>
            </div>
        );
    }
}

export default DietPlanner;
