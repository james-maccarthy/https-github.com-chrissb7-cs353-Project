import React, { Component } from "react";
import "./Profile.css";
import userSelected from "../jsonData/localData.json";

// const user = require("../jsonData/localData.json");

const newdata = 
userSelected.map((user, index)=>{return(parseInt(user.meal.calorie))})

const totalCal= 
newdata.reduce((acc, cals)=>{return acc+cals}, 0);


class Profile extends Component {
  
    render() {
        return (
            <div>
            <div>Goals</div>
            <div>{totalCal}</div>
            </div>
        );
    }
}
export default Profile;
