import React, {Component} from "react";
import Firebase from "./firebaseConfig";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
        email:"",
        password:"",
        error: null
        };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value });
      }
    
      handleSubmit(event) {
        //when user submits, it takes the state email and password and
        // sends to firebase auth and signin functions
        event.preventDefault(); //stop default behaviour and allow our error checking
        const { email, password } = this.state;
        Firebase.auth()
          .signInWithEmailAndPassword(email, password)
          .then((user) => {
            // once successfully authenticated set state in the Parent
            // for the authenticated variable.
            console.log("User logged on");
          })
          .catch((error) => {
            //if error occurs, push to error state
            this.setState({ error: error });
          });
      }


    render() {
        const { email, password, error} = this.state;

        const handleInput = this.handleInputChange;
        return (
            <div id="login">
            {error && (
                    <p>
                        <strong>ERROR: {error.message} </strong>
                    </p>
                    )}
                
                <p id="temp">need a logo and App name</p>
                
                <form onSubmit={this.handleSubmit}>

                    <input name="email" type="email" required="required" placeholder="email" value={email} onChange={handleInput}/> 

                    <input name="password" type="password" required="required" placeholder="Password" value={password} onChange={handleInput}/>

                    {/* <p id="tip">Incorrect email or password</p> */}
                    
                    <button type="submit"> Sign in</button>

                    <button type="button">Sign up</button>
                    
                </form>
            </div>
        );
    };
} export default Login;