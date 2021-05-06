import React, { Component } from "react";
import "./Profile.css";
import userSelected from "../jsonData/localData.json";
import arrow from "../img/arrow.png";
import defaultPhoto from "../img/photo.jpg";


class Profile extends Component {
    
    constructor(props) {
        super(props);
        // set two state variable to handle user current page and sidebar toggle
        this.state = {
            menuStatus: [false, false, false, false, false, false, false],
            tabStatus: [false, true, false],
            hoursPerWeek: "",
            weekWeightLossTarget: "",
            caloriesPerday: "",
            currentWeight: "",
            idealWeight: ""
        };
    }

    menuClick(index) {
        let newMenuStatus = [false, false, false, false, false, false, false];
        newMenuStatus[index] = !this.state.menuStatus[index];
        this.setState({menuStatus: newMenuStatus});

    }

    tabClick(index) {
        let newTabStatus = [false, false, false];
        newTabStatus[index] = true;
        this.setState({tabStatus: newTabStatus});
    }

    test123() {
        console.log(userSelected);
        let newdata = userSelected.map((user, index)=>{return(parseInt(user.meal.calorie))});
        let totalCal= newdata.reduce((acc, cals)=>{return acc+cals}, 0);

    }


    render() {
        return (
            <div>
                <div className="daySelector" onClick={this.menuClick.bind(this, 0)}>
                    <p className="days">User Profile</p>
                    <img src={arrow} className={this.state.menuStatus[0] ? "arrow-active" : "arrow"} alt=""/>
                </div>
                <div className={this.state.menuStatus[0] ? "boxes-active" : "boxes"}>
                    <table className="tabs">
                        <thead>
                        <tr>
                            <td>
                                <div className={this.state.tabStatus[0] ? "tabOn" : ""}
                                     onClick={this.tabClick.bind(this, 0)}>Goals
                                </div>
                            </td>
                            <td>
                                <div className={this.state.tabStatus[1] ? "tabOn" : ""}
                                     onClick={this.tabClick.bind(this, 1)}>The Breakdown
                                </div>
                            </td>
                            <td>
                                <div className={this.state.tabStatus[2] ? "tabOn" : ""}
                                     onClick={this.tabClick.bind(this, 2)}>Most Eaten
                                </div>
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr><td colSpan="3">
        <div className={this.state.tabStatus[0] ? "tabDiv" : "hide"}>Goals <div>
        <form>
          <div class="form-group">
            <label class="col-md-4 control-label" for="textinput">
              Weekly Weight Loss goal
            </label>
            <div class="col-md-4">
              <input
                id="weightLossGoal"
                name="weightLossGoal"
                type="text"
                placeholder="Set in kg"
                class="form-control input-md"
              ></input>
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="textinput">
              Calories Per Day
            </label>
            <div class="col-md-4">
              <input
                id="textinput"
                name="textinput"
                type="text"
                placeholder="Calorie intake per day"
                class="form-control input-md"
              ></input>
              {/* <span class="help-block">help</span>//insert icon */}
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="textinput">
              Current weight
            </label>
            <div class="col-md-4">
              <input
                id="textinput"
                name="textinput"
                type="text"
                placeholder="Current weight in kg"
                class="form-control input-md"
              ></input>
              {/* <span class="help-block">help</span>//insert icon */}
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="textinput">
              Ideal Weight
            </label>
            <div class="col-md-4">
              <input
                id="textinput"
                name="textinput"
                type="text"
                placeholder="Weight in kg"
                class="form-control input-md"
              ></input>
              {/* <span class="help-block">help</span>//insert icon */}
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="exerciseChoice1">
              Please select exercise
            </label>
            <div class="col-md-4">
              <select
                id="exerciseChoice1"
                name="exerciseChoice1"
                class="form-control">
                <option value="1">-</option>
                <option value="2">Weight Lifting</option>
                <option value="3">Cardio</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="hourExercise">
              Hours Exercise per day
            </label>
            <div class="col-md-4">
              <select
                id="hourExercise"
                name="hourExercise"
                class="form-control"
              >
                <option value="1">-</option>
                <option value="2">1 Hours</option>
                <option value="3">2 Hours</option>
                <option value="">3 Hours</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div className={this.state.tabStatus[1] ? "tabDiv" : "hide"}>
    <body>

<div >
  <p>Display most eaten food</p>
</div>
<div>
  <p>Display most calorie rich food</p>
</div>

</body>
    
    </div>
    
    <div className={this.state.tabStatus[2] ? "tabDiv" : "hide"}> Most Eaten</div>
    </td>
    </tr>
    </tbody>
    </table>
    </div>
    </div>
        );
    }

}
export default Profile;
