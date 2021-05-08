import React, {Component} from "react";
import Firebase from "./components/databaseConfig/firebaseConfig";
import $ from "jquery";
import DietPlanner from "./pages/DietPlanner";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";
import Login from "./components/login/login";
// import stylesheets
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        authenticated: false,
        currentUser: null
        }

    }

    componentDidMount() {
        Firebase.auth().onAuthStateChanged((user) => {
          user
            ? this.setState(() => ({
                authenticated: true,
                currentUser: user
              }))
            : this.setState(() => ({
                authenticated: false,
                currentUser: null
              }));
        });
      }


    render() {
        return (
            <div className="App">
            
             {/* {this.state.authenticated ? <Main/> :
                    <Login/>} */}
                    
                    {this.state.authenticated && <Main/>}
                    {!this.state.authenticated && <Login/>}
                    {/*{this.state.authenticated && <Logout />}*/}


            </div>
        );
    }
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

    logOutUser() {
        // Make a call to firebase authentication
        // this API will log the user out now.
        Firebase.auth().signOut();
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
                        <li onClick={this.logOutUser.bind(this)}>Sign out</li>
                    </ul>
                </nav>
                {this.pageRouter(this.state.currentPageIndex)}
            </div>
        );
    };

}

export default App;
