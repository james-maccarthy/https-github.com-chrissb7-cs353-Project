import React, {Component} from "react";
// import components
// import LandingPage from "./views/LandingPage";
import DietPlanner from "./pages/DietPlanner";
import Menu from "./pages/Menu";
// import stylesheets
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        // set two state variable to handle user current page and sidebar toggle
        this.state = {
            currentPageSelection: "DietPlanner",
            sidebar: false
        };

        this.setSideBar = this.setSideBar.bind(this);
        this.MenuPageClick = this.MenuPageClick.bind(this);
        this.DietPlannerButtonClick = this.DietPlannerButtonClick.bind(this);
    }

    // function that toggles true/false on state to animate sliding sidebar
    setSideBar() {
        this.setState({sidebar: !this.state.sidebar});
    }

    // update state to display DietPlanner, hide side bar on button click
    DietPlannerButtonClick() {
        this.setState({currentPageSelection: "DietPlanner"});
        this.setSideBar();
    }

    // update state to display Menu, hide side bar on button click
    MenuPageClick() {
        this.setState({currentPageSelection: "Menu"});
        this.setSideBar();
    }

    render() {
        return (
            <div className="App">
                <nav id="bar">
                    <div className="burger" onClick={this.setSideBar}>
                        {/* animate burger on click by change of class depending on state the below rotates the two lines as per the styling */}
                        <div className={this.state.sidebar ? "top-active" : "top"}/>
                        <div className={this.state.sidebar ? "bottom-active" : "bottom"}/>
                    </div>
                    <div className="page-title">
                        <h3>{this.state.currentPageSelection}</h3>
                    </div>
                    {/* ? operator used to toggle the sliding sidebar, depending on state class changed */}
                    <ul className={this.state.sidebar ? "nav-links-active" : "nav-links"}>
                        <li className={this.state.currentPageSelection === "DietPlanner" ? "active" : ""}
                            onClick={this.DietPlannerButtonClick}>DietPlanner
                        </li>
                        <li className={this.state.currentPageSelection === "Menu" ? "active" : ""}
                            onClick={this.MenuPageClick}>Menu
                        </li>
                    </ul>
                </nav>


                {/* conditional rendering based on state, button handler functions change state and change view */}
                {this.state.currentPageSelection === "DietPlanner" && <DietPlanner/>}
                {this.state.currentPageSelection === "Menu" && <Menu/>}

                {/*<footer><span>Team Nickel</span><span>CS385</span></footer>*/}
            </div>
        );
    }
}

export default App;
