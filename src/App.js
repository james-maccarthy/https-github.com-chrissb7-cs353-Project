import React, {Component} from "react";
// import components
// import LandingPage from "./views/LandingPage";
import $ from "jquery";
import DietPlanner from "./pages/DietPlanner";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile"
// import stylesheets
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {login: false};
    }

    setLogin() {
        this.setState({login: true});
    }

    setLogout() {
        this.setState({login: false});
    }

    render() {
        return (
            <div className="App">
                {this.state.login ? <Main setLogout={this.setLogout.bind(this)}/> :
                    <Login setLogin={this.setLogin.bind(this)}/>}
            </div>
        );
    }
}

class Login extends Component {
    login() {
        let username = $("#username").val();
        let password = $("#password").val();
        console.log("username: " + username + "\npassword: " + password);//for test
        if (username !== "" && password !== "") {
            //connect to database and check, now it has username test and password 123 for test
            if (username === "test" && password === "123") {
                $("#tip").hide();
                this.props.setLogin();
            } else {
                $("#tip").show();
            }
        }
    }

    signUp() {
        let username = $("#username").val();
        let password = $("#password").val();
        console.log("username: " + username + "\npassword: " + password);//for test
        if (username !== "" && password !== "") {
            //connect to database and register new user


        }
    }

    render() {
        return (
            <div id="login">
                <p id="temp">need a logo and App name</p>
                <form onSubmit={function (e) {
                    e.preventDefault();
                }}>
                    <input id="username" type="text" required="required" placeholder="Username"/>
                    <input id="password" type="password" required="required" placeholder="Password"/>
                    <p id="tip">Incorrect username or password</p>
                    <button type="submit" onClick={this.login.bind(this)}>Sign in</button>
                    <button type="button" onClick={this.signUp.bind(this)}>Sign up</button>
                </form>
            </div>
        );
    };
}

class Main extends Component {
    constructor(props) {
        super(props);
        // set two state variable to handle user currentPageIndex page and sidebar toggle
        this.state = {
            currentPageIndex: 0,
            currentPageSelection: "Profile",
            sidebar: false
        };
    }

    setSideBar() {
        this.setState({sidebar: !this.state.sidebar});
    }

    pageRouter(index) {
        switch (index) {
            case 0:
                return <Profile/>;
            case 1:
                return <DietPlanner setPage={this.setPage.bind(this)}/>;
            case 2:
                return <Menu/>;
            default:
                return "Error"
        }
    }

    sideMenuClick(e) {
        $(".active").removeClass("active");
        let clicked = $(e.target);
        clicked.addClass("active");
        this.setState({
            currentPageIndex: clicked.index(),
            currentPageSelection: clicked.text(),
            sidebar: false
        });
    }

    setPage(index) {
        $("#bar ul").children().eq(index).click();
    }

    render() {
        return (
            <div>
                <nav id="bar">
                    <div className="burger" onClick={this.setSideBar.bind(this)}>
                        {/* animate burger on click by change of class depending on state the below rotates the two lines as per the styling */}
                        <div className={this.state.sidebar ? "top-active" : "top"}/>
                        <div className={this.state.sidebar ? "bottom-active" : "bottom"}/>
                    </div>
                    <div className="page-title">
                        <h3>{this.state.currentPageSelection}</h3>
                    </div>
                    <ul className={this.state.sidebar ? "nav-links-active" : "nav-links"}>
                        <li onClick={this.sideMenuClick.bind(this)} className="active">Profile</li>
                        <li onClick={this.sideMenuClick.bind(this)}>Weekly Plan</li>
                        <li onClick={this.sideMenuClick.bind(this)}>Menu</li>
                        <li onClick={this.props.setLogout}>Sign out</li>
                    </ul>
                </nav>
                {this.pageRouter(this.state.currentPageIndex)}
            </div>
        );
    };

}

export default App;
