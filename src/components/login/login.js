import React, {Component} from "react";
import Firebase from "../databaseConfig/firebaseConfig";
import "./login.css";
import $ from "jquery";

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
        $("#tip").hide();
        if ($("#signUp input:nth-child(2)").val() !== $("#signUp input:nth-child(3)").val()) {
            $("#tip").show();
        } else {
            console.log("Email: " + $("#signUp input:nth-child(1)").val());
            console.log("Password: " + $("#signUp input:nth-child(2)").val());
            //need to connect database
            //......................

            $("#signUp").hide();
        }
    }

    showSignUp() {
        $("#signUp").show();
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
                    <p id="temp">need a logo and App name</p>
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
                    <form onSubmit={this.handleSignUpSubmit}>
                        <input name="email" type="email" required="required" placeholder="Email"/>
                        <input name="password" type="password" required="required" placeholder="Password"/>
                        <input name="confirm" type="password" required="required" placeholder="Confirm Password"/>
                        <p id="tip"><strong>password in two field must be same!</strong></p>
                        <button type="submit">submit</button>
                    </form>
                </div>
            </div>
        );
    };
}

export default Login;