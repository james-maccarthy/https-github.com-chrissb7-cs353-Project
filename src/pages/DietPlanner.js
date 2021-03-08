import React, {Component} from "react";
// import components

// import stylesheets
import "../css/DietPlanner.css";
import arrow from "../img/arrow.png";
import defaultPhoto from "../img/photo.jpg";

class DietPlanner extends Component {
    constructor(props) {
        super(props);
        // set two state variable to handle user current page and sidebar toggle
        this.state = {
            menuStatus: [false, false, false, false, false, false, false],
            tabStatus: [false, true, false]
        };
    }

    menuClick(index) {
        let newMenuStatus = [false, false, false, false, false, false, false];
        newMenuStatus[index] = !this.state.menuStatus[index];
        this.setState({menuStatus: newMenuStatus});
        console.log(newMenuStatus);
    }

    tabClick(index) {
        let newTabStatus = [false, false, false];
        newTabStatus[index] = true;
        this.setState({tabStatus: newTabStatus});
    }


    render() {
        return (
            <div>
                <div className="daySelector" onClick={this.menuClick.bind(this, 0)}>
                    <p className="days">Monday</p>
                    <img src={arrow} className={this.state.menuStatus[0] ? "arrow-active" : "arrow"} alt=""/>
                </div>
                <div className={this.state.menuStatus[0] ? "boxes-active" : "boxes"}>
                    <div className="profile">
                        <img src={defaultPhoto} className="photo" alt=""/>
                        <p className="name">Mr Test</p>
                    </div>
                    <div className="tabContainer">
                        <ul className="tabs">
                            <li className={this.state.tabStatus[0] ? "tabOn" : ""}
                                onClick={this.tabClick.bind(this, 0)}>Goals
                            </li>
                            <li className={this.state.tabStatus[1] ? "tabOn" : ""}
                                onClick={this.tabClick.bind(this, 1)}>Nutrition
                            </li>
                            <li className={this.state.tabStatus[2] ? "tabOn" : ""}
                                onClick={this.tabClick.bind(this, 2)}>Most Eaten
                            </li>
                        </ul>
                        <div className={this.state.tabStatus[0] ? "tabDiv" : "hide"}>
                            Goals
                        </div>
                        <div className={this.state.tabStatus[1] ? "tabDiv" : "hide"}>
                            Nutrition
                        </div>
                        <div className={this.state.tabStatus[2] ? "tabDiv" : "hide"}>
                            Most Eaten
                        </div>
                    </div>
                </div>
                <div className="daySelector" onClick={this.menuClick.bind(this, 1)}>
                    <p className="days">Tuesday</p>
                    <img src={arrow} className={this.state.menuStatus[1] ? "arrow-active" : "arrow"} alt=""/>
                </div>
                <div className={this.state.menuStatus[1] ? "boxes-active" : "boxes"}>
                    <div className="profile">
                        <img src={defaultPhoto} className="photo" alt=""/>
                        <p className="name">Mr Test</p>
                    </div>
                    <div className="tabContainer">
                        <ul className="tabs">
                            <li className={this.state.tabStatus[0] ? "tabOn" : ""}
                                onClick={this.tabClick.bind(this, 0)}>Goals
                            </li>
                            <li className={this.state.tabStatus[1] ? "tabOn" : ""}
                                onClick={this.tabClick.bind(this, 1)}>Nutrition
                            </li>
                            <li className={this.state.tabStatus[2] ? "tabOn" : ""}
                                onClick={this.tabClick.bind(this, 2)}>Most Eaten
                            </li>
                        </ul>
                        <div className={this.state.tabStatus[0] ? "tabDiv" : "hide"}>
                            Goals
                        </div>
                        <div className={this.state.tabStatus[1] ? "tabDiv" : "hide"}>
                            Nutrition
                        </div>
                        <div className={this.state.tabStatus[2] ? "tabDiv" : "hide"}>
                            Most Eaten
                        </div>
                    </div>
                </div>
                <div className="daySelector" onClick={this.menuClick.bind(this, 2)}>
                    <p className="days">Wednesday</p>
                    <img src={arrow} className={this.state.menuStatus[2] ? "arrow-active" : "arrow"} alt=""/>
                </div>
                <div className={this.state.menuStatus[2] ? "boxes-active" : "boxes"}>
                    <div className="profile">
                        <img src={defaultPhoto} className="photo" alt=""/>
                        <p className="name">Mr Test</p>
                    </div>
                    <div className="tabContainer">
                        <ul className="tabs">
                            <li className={this.state.tabStatus[0] ? "tabOn" : ""}
                                onClick={this.tabClick.bind(this, 0)}>Goals
                            </li>
                            <li className={this.state.tabStatus[1] ? "tabOn" : ""}
                                onClick={this.tabClick.bind(this, 1)}>Nutrition
                            </li>
                            <li className={this.state.tabStatus[2] ? "tabOn" : ""}
                                onClick={this.tabClick.bind(this, 2)}>Most Eaten
                            </li>
                        </ul>
                        <div className={this.state.tabStatus[0] ? "tabDiv" : "hide"}>
                            Goals
                        </div>
                        <div className={this.state.tabStatus[1] ? "tabDiv" : "hide"}>
                            Nutrition
                        </div>
                        <div className={this.state.tabStatus[2] ? "tabDiv" : "hide"}>
                            Most Eaten
                        </div>
                    </div>
                </div>
                <div className="daySelector" onClick={this.menuClick.bind(this, 3)}>
                    <p className="days">Thursday</p>
                    <img src={arrow} className={this.state.menuStatus[3] ? "arrow-active" : "arrow"} alt=""/>
                </div>
                <div className={this.state.menuStatus[3] ? "boxes-active" : "boxes"}>
                    <div className="profile">
                        <img src={defaultPhoto} className="photo" alt=""/>
                        <p className="name">Mr Test</p>
                    </div>
                    <div className="tabContainer">
                        <ul className="tabs">
                            <li className={this.state.tabStatus[0] ? "tabOn" : ""}
                                onClick={this.tabClick.bind(this, 0)}>Goals
                            </li>
                            <li className={this.state.tabStatus[1] ? "tabOn" : ""}
                                onClick={this.tabClick.bind(this, 1)}>Nutrition
                            </li>
                            <li className={this.state.tabStatus[2] ? "tabOn" : ""}
                                onClick={this.tabClick.bind(this, 2)}>Most Eaten
                            </li>
                        </ul>
                        <div className={this.state.tabStatus[0] ? "tabDiv" : "hide"}>
                            Goals
                        </div>
                        <div className={this.state.tabStatus[1] ? "tabDiv" : "hide"}>
                            Nutrition
                        </div>
                        <div className={this.state.tabStatus[2] ? "tabDiv" : "hide"}>
                            Most Eaten
                        </div>
                    </div>
                </div>
                <div className="daySelector" onClick={this.menuClick.bind(this, 4)}>
                    <p className="days">Friday</p>
                    <img src={arrow} className={this.state.menuStatus[4] ? "arrow-active" : "arrow"} alt=""/>
                </div>
                <div className={this.state.menuStatus[4] ? "boxes-active" : "boxes"}>
                    <div className="profile">
                        <img src={defaultPhoto} className="photo" alt=""/>
                        <p className="name">Mr Test</p>
                    </div>
                    <div className="tabContainer">
                        <ul className="tabs">
                            <li className={this.state.tabStatus[0] ? "tabOn" : ""}
                                onClick={this.tabClick.bind(this, 0)}>Goals
                            </li>
                            <li className={this.state.tabStatus[1] ? "tabOn" : ""}
                                onClick={this.tabClick.bind(this, 1)}>Nutrition
                            </li>
                            <li className={this.state.tabStatus[2] ? "tabOn" : ""}
                                onClick={this.tabClick.bind(this, 2)}>Most Eaten
                            </li>
                        </ul>
                        <div className={this.state.tabStatus[0] ? "tabDiv" : "hide"}>
                            Goals
                        </div>
                        <div className={this.state.tabStatus[1] ? "tabDiv" : "hide"}>
                            Nutrition
                        </div>
                        <div className={this.state.tabStatus[2] ? "tabDiv" : "hide"}>
                            Most Eaten
                        </div>
                    </div>
                </div>
                <div className="daySelector" onClick={this.menuClick.bind(this, 5)}>
                    <p className="days">Saturday</p>
                    <img src={arrow} className={this.state.menuStatus[5] ? "arrow-active" : "arrow"} alt=""/>
                </div>
                <div className={this.state.menuStatus[5] ? "boxes-active" : "boxes"}>
                    <div className="profile">
                        <img src={defaultPhoto} className="photo" alt=""/>
                        <p className="name">Mr Test</p>
                    </div>
                    <div className="tabContainer">
                        <ul className="tabs">
                            <li className={this.state.tabStatus[0] ? "tabOn" : ""}
                                onClick={this.tabClick.bind(this, 0)}>Goals
                            </li>
                            <li className={this.state.tabStatus[1] ? "tabOn" : ""}
                                onClick={this.tabClick.bind(this, 1)}>Nutrition
                            </li>
                            <li className={this.state.tabStatus[2] ? "tabOn" : ""}
                                onClick={this.tabClick.bind(this, 2)}>Most Eaten
                            </li>
                        </ul>
                        <div className={this.state.tabStatus[0] ? "tabDiv" : "hide"}>
                            Goals
                        </div>
                        <div className={this.state.tabStatus[1] ? "tabDiv" : "hide"}>
                            Nutrition
                        </div>
                        <div className={this.state.tabStatus[2] ? "tabDiv" : "hide"}>
                            Most Eaten
                        </div>
                    </div>
                </div>
                <div className="daySelector" onClick={this.menuClick.bind(this, 6)}>
                    <p className="days">Sunday</p>
                    <img src={arrow} className={this.state.menuStatus[6] ? "arrow-active" : "arrow"} alt=""/>
                </div>
                <div className={this.state.menuStatus[6] ? "boxes-active" : "boxes"}>
                    <div className="profile">
                        <img src={defaultPhoto} className="photo" alt=""/>
                        <p className="name">Mr Test</p>
                    </div>
                    <div className="tabContainer">
                        <ul className="tabs">
                            <li className={this.state.tabStatus[0] ? "tabOn" : ""}
                                onClick={this.tabClick.bind(this, 0)}>Goals
                            </li>
                            <li className={this.state.tabStatus[1] ? "tabOn" : ""}
                                onClick={this.tabClick.bind(this, 1)}>Nutrition
                            </li>
                            <li className={this.state.tabStatus[2] ? "tabOn" : ""}
                                onClick={this.tabClick.bind(this, 2)}>Most Eaten
                            </li>
                        </ul>
                        <div className={this.state.tabStatus[0] ? "tabDiv" : "hide"}>
                            Goals
                        </div>
                        <div className={this.state.tabStatus[1] ? "tabDiv" : "hide"}>
                            Nutrition
                        </div>
                        <div className={this.state.tabStatus[2] ? "tabDiv" : "hide"}>
                            Most Eaten
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DietPlanner;
