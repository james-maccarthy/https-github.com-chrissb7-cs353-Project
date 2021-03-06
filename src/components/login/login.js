import React, {Component} from "react";
import Firebase from "../databaseConfig/firebaseConfig";
import "./login.css";
import $ from "jquery";
import logo from "../../img/logo.ico";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
    
            error: null
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
        this.showSignUp = this.showSignUp.bind(this);
    }

    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleLoginSubmit(event) {
        //when user submits, it takes the state email and password and
        // sends to firebase auth and signin functions
        event.preventDefault(); //stop default behaviour and allow our error checking
        const {email, password} = this.state;
        Firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                // once successfully authenticated set state in the Parent
                // for the authenticated variable.
                console.log("User logged on");
            })
            .catch((error) => {
                //if error occurs, push to error state
                this.setState({error: error});
            });
    }

    handleSignUpSubmit(event) {
        event.preventDefault(); //stop default behaviour and allow our error checking
        const {email, password} = this.state;
        Firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // once successfully authenticated set state in the Parent
            // for the authenticated variable.
            console.log("User logged on");
        })
        .catch((error) => {
            //if error occurs, push to error state
            this.setState({error: error});
        });     
            $("#signUp").hide();
        
    }

    showSignUp() {
        $("#signUp").toggle();
    }

    render() {
        const {email, password, error} = this.state;
        const handleInput = this.handleInputChange;
        return (
            <div>
                <div id="login">
                    {error && (
                        <p>
                            <strong>ERROR: {error.message} </strong>
                        </p>
                    )}
                    <img className="logo" src={logo}/>
                    <form onSubmit={this.handleLoginSubmit}>
                        <input name="email" type="email" required="required" placeholder="email" value={email}
                               onChange={handleInput}/>
                        <input name="password" type="password" required="required" placeholder="Password"
                               value={password}
                               onChange={handleInput}/>
                        {/* <p id="tip">Incorrect email or password</p> */}
                        <button type="submit">Sign in</button>
                        <button type="button" onClick={this.showSignUp}>Sign up</button>
                    </form>
                </div>
                <div id="signUp">
                    <img className="logo" src={logo}/>
                    <form onSubmit={this.handleSignUpSubmit}>
                        <input name="email" type="email" required="required" placeholder="Email" value={email}
                        onChange={handleInput}/>
                        <input name="password" type="password" required="required" placeholder="Password"
                        value={password}
                        onChange={handleInput}/>
                        <input name="confirm" type="password" required="required" placeholder="Confirm Password"/>
                        <p id="tip"><strong>password in two field must be same!</strong></p>
                        <button type="submit">Submit</button>
                        <button type="button" onClick={this.showSignUp}>Cancel</button>
                    </form>
                </div>
            </div>
        );
    };
}

export default Login;