import React, { Component } from "react";
import "./Profile.css";
import userSelected from "../jsonData/localData.json";
import arrow from "../img/arrow.png";
import ValidationCaloriesPerDay from "./Validation/ValidationCaloriesPerDay.js";
import ValidationCurrentWeight from "./Validation//ValidationCurrentWeight.js";
import ValidationIdealWeight from "./Validation//ValidationIdealWeight.js";

class Profile extends Component {
    
    constructor(props) {
        super(props);
        // set two state variable to handle user current page and sidebar toggle
        this.state = {
            menuStatus: [false, false, false, false, false, false, false],
            tabStatus: [false, true, false],
            weekWeightLossTarget: "",
            currentWeight: "",
            idealWeight: "",
            caloriesPerDay: "", 
            formErrorsCaloriesPerDay: { caloriesPerDay: "" },
            caloriesPerDayValid: false,
            formValidCaloriesPerDay: false,
            isCaloriesPerDaySubmitted: false,
            formErrorsCurrentWeight: { currentWeight: "" },
            currentWeightValid: false,
            formValidCurrentWeight: false,
            isCurrentWeightSubmitted: false,
            formErrorsIdealWeight: { idealWeight: "" },
            idealWeightValid: false,
            formValidIdealWeight: false,
            isIdealWeightSubmitted: false
            
            
        };
        ////////THE GOAL FORMS SECTION BINDED FUNCTIONS/////////////  
        this.handleChangeCaloriesPerDayBox = this.handleChangeCaloriesPerDayBox.bind(this);
        this.validateCaloriesPerDay = this.validateCaloriesPerDay.bind(this);
        this.submitCaloriesPerDayClick = this.submitCaloriesPerDayClick.bind(this);
        this.handleChangeCurrentWeightBox = this.handleChangeCurrentWeightBox.bind(this);
        this.validateCurrentWeight = this.validateCurrentWeight.bind(this);
        this.submitCurrentWeightClick = this.submitCurrentWeightClick.bind(this);
        this.handleChangeIdealWeightBox = this.handleChangeIdealWeightBox.bind(this);
        this.validateIdealWeight = this.validateIdealWeight.bind(this);
        this.submitIdealWeightClick = this.submitIdealWeightClick.bind(this);
        ////////THE BREAKDOWN SECTION BINDED FUNCTIONS/////////////  
        this.weightLossGoal = this.weightLossGoal.bind(this);
        this.WeightCalculation= this.WeightCalculation.bind(this);
        this.WeightCalculation= this.WeightCalculation.bind(this);
        this.weightLossGoal = this.weightLossGoal.bind(this);
        this.mealPlanner = this.mealPlanner.bind(this);   
        this.weightLossStats = this.weightLossStats.bind(this);
        this.weightLossStats = this.weightLossStats.bind(this);
        this.weightLossStats2 = this.weightLossStats2.bind(this);
        this.weightLossStats2 = this.weightLossStats2.bind(this);
        
    }

 ////////////////////////////GOALS FORM FUNCTIONALITY//////////////////////////////////////////////////
 //////////////////////////////////////////////////////////////////////////////////////////////////////


  handleChangeCaloriesPerDayBox(event) {
    this.setState({ caloriesPerDay: event.target.value.trim() });
    this.setState({ isCaloriesPerDaySubmitted: true });
    this.validateCaloriesPerDay(event.target.value.trim());
  } //COR

  validateCaloriesPerDay(calories) {
    let localFormErrors = this.state.formErrorsCaloriesPerDay;
    let localValid = this.state.caloriesPerDayValid;

    if (isNaN(calories)) {
      localValid = false;
      localFormErrors.caloriesPerDay = "Please enter a positive number";
    } else if (calories.trim().length <= 0) {
      localValid = false;
      localFormErrors.caloriesPerDay = "No number entered";
    } else if (/^0+$/.test(calories) || /^-/.test(calories)) {
      localValid = false;
      localFormErrors.caloriesPerDay = "Please enter a positive number";
    } else if (!/^\d+$/.test(calories)) {
      localValid = false;
      localFormErrors.caloriesPerDay =
        "Decimals? Pretty precise! Please enter a positive whole number";
    } else if (calories.trim().length >= 5) {
      localValid = false;
      localFormErrors.caloriesPerDay =
        "That's a lot of calories in one day! Please enter a number less than 10000.";
    } else {
      localValid = true;
      localFormErrors.caloriesPerDay = "Please submit your details";
    }
    this.setState({ caloriesPerDayValid: localValid });
    this.setState({ formErrorsCaloriesPerDay: localFormErrors });
    this.setState({
      formValidCaloriesPerDay: localValid
    });
  } //COR

  submitCaloriesPerDayClick() {
    let localFormErrors = this.state.formErrorsCaloriesPerDay;
    localFormErrors.caloriesPerDay = "Thanks for your details";

    this.setState({ isCaloriesPerDaySubmitted: false });
  } //COR

  handleChangeCurrentWeightBox(event) {
    this.setState({ currentWeight: event.target.value.trim() });
    this.setState({ isCurrentWeightSubmitted: true });
    this.validateCurrentWeight(event.target.value.trim());
  } //COR

  validateCurrentWeight(kilos) {
    let localFormErrors = this.state.formErrorsCurrentWeight;
    let localValid = this.state.currentWeightValid;

    if (isNaN(kilos)) {
      localValid = false;
      localFormErrors.currentWeight = "Please enter a positive number";
    } else if (kilos.trim().length <= 0) {
      localValid = false;
      localFormErrors.currentWeight = "No number entered";
    } else if (/^0+$/.test(kilos) || /^-/.test(kilos)) {
      localValid = false;
      localFormErrors.currentWeight = "Please enter a positive number";
    } else if (kilos.trim() >= 500) {
      localValid = false;
      localFormErrors.currentWeight =
        "Please enter a number less than or equal to 500.";
    } else {
      localValid = true;
      localFormErrors.currentWeight = "Please submit your details";
    }
    this.setState({ currentWeightValid: localValid });
    this.setState({ formErrorsCurrentWeight: localFormErrors });
    this.setState({
      formValidCurrentWeight: localValid
    });
  } //COR

  submitCurrentWeightClick() {
    let localFormErrors = this.state.formErrorsCurrentWeight;
    localFormErrors.currentWeight = "Thanks for your details";

    this.setState({ isCurrentWeightSubmitted: false });
  } //COR

  handleChangeIdealWeightBox(event) {
    this.setState({ idealWeight: event.target.value.trim() });
    this.setState({ isIdealWeightSubmitted: true });
    this.validateIdealWeight(event.target.value.trim());
  } //COR

  validateIdealWeight(kilos) {
    let localFormErrors = this.state.formErrorsIdealWeight;
    let localValid = this.state.idealWeightValid;

    if (isNaN(kilos)) {
      localValid = false;
      localFormErrors.idealWeight = "Please enter a positive number";
    } else if (kilos.trim().length <= 0) {
      localValid = false;
      localFormErrors.idealWeight = "No number entered";
    } else if (/^0+$/.test(kilos) || /^-/.test(kilos)) {
      localValid = false;
      localFormErrors.idealWeight = "Please enter a positive number";
    } else if (kilos.trim() >= 500) {
      localValid = false;
      localFormErrors.idealWeight =
        "Please enter a number less than or equal to 500.";
    } else {
      localValid = true;
      localFormErrors.idealWeight = "Please submit your details";
    }
    this.setState({ idealWeightValid: localValid });
    this.setState({ formErrorsIdealWeight: localFormErrors });
    this.setState({
      formValidIdealWeight: localValid
    });
  } //COR

  submitIdealWeightClick() {
    let localFormErrors = this.state.formErrorsIdealWeight;
    localFormErrors.idealWeight = "Thanks for your details";

    this.setState({ isIdealWeightSubmitted: false });
  } //COR




  //////////////////////////// BREAKDOWN SECTION FUNCTIONALITY/////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////


    WeightCalculation(){
        if(this.state.currentWeight>0){
           return(
            <div id="rcorners3">
                <h3>Your Current weight is:</h3>
                <div>{this.state.currentWeight} KG</div>
                </div>
           )      
        }
        else{
            return(
                <div id="rcorners3">
                <h3>Your Current weight is:</h3>
                <div>Please enter weight in goals section</div>
                </div>  
            );}}//CHRIS

    weightLossGoal(){
            if(this.state.currentWeight>0&&this.state.idealWeight>0){
                var currentWeight=this.state.currentWeight;
                var idealWeight=this.state.idealWeight
                var weighAvg1 =currentWeight-idealWeight;
                var weighAvg2 = (this.state.currentWeight-this.state.idealWeight)*7700
                return(
                    <div>
                    <h3>Your weight loss goal in KG is:</h3>
                    <div>{weighAvg1} KG</div>
                    <h3>In calories your weight loss goal is:</h3>
                    <div>{weighAvg2} KCAL/Calories</div>
                    </div>
                )}
            
            else{
                return(<div>
                    <h3>Your weight loss goal in KG is:</h3>
                    <div>Please enter current weight & ideal weight fields in goals
                    </div>
                    </div>
                )}}//CHRIS


    mealPlanner() {
        console.log(userSelected);
        let newdata = userSelected.map((user, index)=>{return(parseInt(user.meal.calorie))});
        let totalCal= newdata.reduce((acc, cals)=>{return acc+cals}, 0);
        this.state.caloriesUser=totalCal;  //Calories from user Data 
        let avgCals = Math.round(totalCal/7);
        if(this.state.caloriesUser.length==0){
            return(
                <div>
                <h3>Your weekly Calories from meals:</h3>
                <div>Please add food items to Weekly Planner</div>
                </div>
            );
        }
        else{
            return(<div>
                <h3>Your weekly Calories from meals:</h3>
                <div>{totalCal} KCAL/Calories</div>
                <h3>Your average Daily calories from meals:</h3>
                 <div>{avgCals} KCAL/Calories</div>   
                </div>
                
            );}}//CHRIS

    weightLossStats(){
        let newdata = userSelected.map((user, index)=>{return(parseInt(user.meal.calorie))});
        let totalCal= newdata.reduce((acc, cals)=>{return acc+cals}, 0);
        this.state.caloriesUser=totalCal;   
        let avgCals = (totalCal/7);
        let avgCalsDaily = this.state.caloriesPerDay;
        
        if(this.state.caloriesPerDay>0&&this.state.caloriesUser>0){
            
            if(avgCals>avgCalsDaily){
                let caloriesOver = Math.round(avgCals-avgCalsDaily);
               return(
                <div>
                <h3>Daily Calories & Weekly Calories:</h3>
                <div>You have gone over your set daily calorie limit by {caloriesOver} calories</div>
                <div>Or, {caloriesOver*7} Calories over the limit for the week</div>

                </div>);}
                if(avgCals<avgCalsDaily){ 
                    let caloriesLeft = Math.round(avgCalsDaily-avgCals);
                return(
                    <div>
                    <h3>Daily Calories & Weekly Calories:</h3>
                    <div>You have {caloriesLeft} Calories left to use for each day!</div>
                    <div>Or, {caloriesLeft*7} Calories left for the week</div>
                    <div></div>
    
                    </div>);}
            }

            else{
                return(
                    <div>
                    <h3>Daily Calories & Weekly Calories:</h3>
                    <div>Please enter calories in goals & add food to weekly planner</div>
                    </div>
                        );}}//CHRIS

    weightLossStats2(){
        let currentWeight=this.state.currentWeight;
        let idealWeight=this.state.idealWeight
        let weightGoal= currentWeight-idealWeight;
        let burnCalsdaily = 2500-this.state.caloriesPerDay;    
        if(this.state.currentWeight>0&&this.state.idealWeight>0&&this.state.caloriesPerDay>0){
            var idealWeightCals=Math.round(weightGoal*7700);
            var days= Math.round(idealWeightCals/burnCalsdaily);
            return(
            <div>
                <h3>Days to burn calories:</h3>
                <strong>Based on an average of 2500 calories per day:</strong>
                <div>It will take {days} days on a calorie intake of {this.state.caloriesPerDay} KCAL/calories per day</div>
                </div>
            );}
        else{
            return(<div>
                <h3>Days to burn calories:</h3>
                <div>Please enter & submit fields in goals</div>
                </div>    
            );}}//CHRIS

 //////////////////////////// EXERCISE SECTION FUNCTIONALITY (COR)/////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////            

///////////////////FUNCTIONS FOR TABULAR BASED UI//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

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
                            onClick={this.tabClick.bind(this, 2)}>Exercise
                        </div>
                        </td>
                    </tr>
                    </thead>
                        <tbody>
                        <tr><td colSpan="3">
        <div className={this.state.tabStatus[0] ? "tabDiv" : "hide"}>
        

        <form>
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
                value={this.state.caloriesPerDay}
                onChange={this.handleChangeCaloriesPerDayBox}
              ></input>
              
            </div>
          </div>
          <button
            disabled={
              !(
                this.state.formValidCaloriesPerDay &&
                this.state.isCaloriesPerDaySubmitted
              )
            }
            onClick={this.submitCaloriesPerDayClick}
            type="button"
            className="btn btn-warning btn-lg"
          >
            Submit Details
          </button>
          <ValidationCaloriesPerDay
            formErrorsCaloriesPerDay={this.state.formErrorsCaloriesPerDay}
          />
        </form> 



        <form>
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
                value={this.state.currentWeight}
                onChange={this.handleChangeCurrentWeightBox}
              ></input>
              
            </div>
          </div>
          <button
            disabled={
              !(
                this.state.formValidCurrentWeight &&
                this.state.isCurrentWeightSubmitted
              )
            }
            onClick={this.submitCurrentWeightClick}
            type="button"
            className="btn btn-warning btn-lg"
          >
            Submit Details
          </button>
        </form>
        <ValidationCurrentWeight
          formErrorsCurrentWeight={this.state.formErrorsCurrentWeight}
        />


        <form>
          <div class="form-group">
            <label class="col-md-4 control-label" for="textinput">
              Ideal Weight
            </label>
            <div class="col-md-4">
              <input
                id="textinput"
                name="textinput"
                type="text"
                placeholder="Ideal weight in kg"
                class="form-control input-md"
                value={this.state.idealWeight}
                onChange={this.handleChangeIdealWeightBox}
              ></input>
              
            </div>
          </div>
          <button
            disabled={
              !(
                this.state.formValidIdealWeight &&
                this.state.isIdealWeightSubmitted
              )
            }
            onClick={this.submitIdealWeightClick}
            type="button"
            className="btn btn-warning btn-lg"
          >
            Submit Details
          </button>
        </form>
        <ValidationIdealWeight
          formErrorsIdealWeight={this.state.formErrorsIdealWeight}
        />
    </div>
    
<div className={this.state.tabStatus[1] ? "tabDiv" : "hide"}> 
    <body>
        <div >
            <h2>Calorie Breakdown:</h2>
            {this.mealPlanner()}
        </div>
        <div>
            <h2>Weight Statistics:</h2>
            {this.WeightCalculation()}
            {this.weightLossGoal()}
        </div>
        <div>
            <h2>Weight Loss in numbers</h2>
            {this.weightLossStats()}
            {this.weightLossStats2()}
         </div>
    </body> 
    </div>
    
    <div className={this.state.tabStatus[2] ? "tabDiv" : "hide"}> 
    
            {/* ENTER EXERCISE COMPONENT HERE */}
    
    </div>
    </td>
    </tr>
    </tbody>
    </table>
    </div>
    </div>
        );}
}
export default Profile;
