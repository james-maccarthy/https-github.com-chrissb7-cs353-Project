import React, { Component } from "react";
import "./Profile.css";
import userSelected from "../jsonData/localData.json";


// let newdata = userSelected.map((user, index)=>{return(parseInt(user.meal.calorie))});
// let totalCal= newdata.reduce((acc, cals)=>{return acc+cals}, 0);

class Profile extends Component {


    test123() {
        console.log(userSelected);
        let newdata = userSelected.map((user, index)=>{return(parseInt(user.meal.calorie))});
        let totalCal= newdata.reduce((acc, cals)=>{return acc+cals}, 0);
        return totalCal;
    }
    render() {
        return (
            <div>
                <div>Goals</div>
                {/*<div>{totalCal}</div>*/}
                <div>{this.test123()}</div>
            </div>
        );
    }
}
export default Profile;
