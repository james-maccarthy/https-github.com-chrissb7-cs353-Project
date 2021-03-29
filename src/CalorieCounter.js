import React, { Component } from "react";
import ValidationCycling from "./ValidationCycling";
import ValidationWalking from "./ValidationWalking";
import ValidationRunning from "./ValidationRunning";
import ValidationRowing from "./ValidationRowing";
import ValidationTeamSport from "./ValidationTeamSport";
import ValidationGrams from "./ValidationGrams";

class CalorieCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      caloriesLeft: 2000,
      caloriesConsumed: 0,
      numberOfMinutesCycling: "",
      numberOfMinutesRunning: "",
      numberOfMinutesWalking: "",
      numberOfMinutesTeamSport: "",
      numberOfMinutesRowing: "",
      activityLevelCycling: "",
      activityLevelWalking: "",
      activityLevelRunning: "",
      activityLevelRowing: "",
      formErrorsMinutesCycling: { numberOfMinutesCycling: "" },
      minutesCyclingValid: false,
      formValidMinutesCycling: false,
      formErrorsMinutesWalking: { numberOfMinutesWalking: "" },
      minutesWalkingValid: false,
      formValidMinutesWalking: false,
      formErrorsMinutesRunning: { numberOfMinutesRunning: "" },
      minutesRunningValid: false,
      formValidMinutesRunning: false,
      formErrorsMinutesRowing: { numberOfMinutesRowing: "" },
      minutesRowingValid: false,
      formValidMinutesRowing: false,
      formErrorsMinutesTeamSport: { numberOfMinutesTeamSport: "" },
      minutesTeamSportValid: false,
      formValidMinutesTeamSport: false,
      isMinutesCyclingSubmitted: true,
      isMinutesWalkingSubmitted: true,
      isMinutesRunningSubmitted: true,
      isMinutesRowingSubmitted: true,
      isCyclingActivityLevelLow: false,
      isCyclingActivityLevelModerate: false,
      isCyclingActivityLevelHigh: false,
      isWalkingActivityLevelLow: false,
      isWalkingActivityLevelModerate: false,
      isWalkingingActivityLevelHigh: false,
      isRunningActivityLevelLow: false,
      isRunningActivityLevelModerate: false,
      isRunningActivityLevelHigh: false,
      isRowingActivityLevelLow: false,
      isRowingActivityLevelModerate: false,
      isRowingActivityLevelHigh: false,
      activityArray: [],
      validActivity: "",
      foodArray: [
        ["carrots", 0, 40, 0],
        ["cucumbers", 0, 50, 0],
        ["burgers", 0, 60, 0]
      ],
      validFood: false,
      validFood2: false,
      validNumber: false,
      chosenFoods: [],
      weightInGrams: 0,
      foodChoice: "",
      foodRemoveChoice: "",
      numberOfGrams: 0,
      formErrorsGramsValid: { numberOfGrams: "" },
      gramsValid: false,
      formValidGrams: false
    };
    this.handleCyclingActivityLevelLowClick = this.handleCyclingActivityLevelLowClick.bind(
      this
    );
    this.handleCyclingActivityLevelModerateClick = this.handleCyclingActivityLevelModerateClick.bind(
      this
    );
    this.handleCyclingActivityLevelHighClick = this.handleCyclingActivityLevelHighClick.bind(
      this
    );
    this.handleWalkingActivityLevelLowClick = this.handleWalkingActivityLevelLowClick.bind(
      this
    );
    this.handleWalkingActivityLevelModerateClick = this.handleWalkingActivityLevelModerateClick.bind(
      this
    );
    this.handleWalkingActivityLevelHighClick = this.handleWalkingActivityLevelHighClick.bind(
      this
    );
    this.handleRunningActivityLevelLowClick = this.handleRunningActivityLevelLowClick.bind(
      this
    );
    this.handleRunningActivityLevelModerateClick = this.handleRunningActivityLevelModerateClick.bind(
      this
    );
    this.handleRunningActivityLevelHighClick = this.handleRunningActivityLevelHighClick.bind(
      this
    );
    this.handleRowingActivityLevelLowClick = this.handleRowingActivityLevelLowClick.bind(
      this
    );
    this.handleRowingActivityLevelModerateClick = this.handleRowingActivityLevelModerateClick.bind(
      this
    );
    this.handleRowingActivityLevelHighClick = this.handleRowingActivityLevelHighClick.bind(
      this
    );
    this.handleChangeCyclingTimeBox = this.handleChangeCyclingTimeBox.bind(
      this
    );
    this.handleChangeWalkingTimeBox = this.handleChangeWalkingTimeBox.bind(
      this
    );
    this.handleChangeRunningTimeBox = this.handleChangeRunningTimeBox.bind(
      this
    );
    this.handleChangeRowingTimeBox = this.handleChangeRowingTimeBox.bind(this);
    this.handleChangeTeamSportTimeBox = this.handleChangeTeamSportTimeBox.bind(
      this
    );
    this.submitMinutesCyclingClick = this.submitMinutesCyclingClick.bind(this);
    this.validateMinutesCycling = this.validateMinutesCycling.bind(this);
    this.submitMinutesWalkingClick = this.submitMinutesWalkingClick.bind(this);
    this.validateMinutesWalking = this.validateMinutesWalking.bind(this);
    this.submitMinutesRunningClick = this.submitMinutesRunningClick.bind(this);
    this.validateMinutesRunning = this.validateMinutesRunning.bind(this);
    this.submitMinutesRowingClick = this.submitMinutesRowingClick.bind(this);
    this.validateMinutesRowing = this.validateMinutesRowing.bind(this);
    this.submitMinutesTeamSportClick = this.submitMinutesTeamSportClick.bind(
      this
    );
    this.validateMinutesTeamSport = this.validateMinutesTeamSport.bind(this);
    this.onDeleteFormChange = this.onDeleteFormChange.bind(this);
    this.deleteActivityType = this.deleteActivityType.bind(this);
    this.onSearchFormChange = this.onSearchFormChange.bind(this);
    this.submitFoodType = this.submitFoodType.bind(this);
    this.handleGramTextBox = this.handleGramTextBox.bind(this);
    this.validateWeightInGramsbox = this.validateWeightInGramsbox.bind(this);
    this.onDeleteFormChange2 = this.onDeleteFormChange2.bind(this);
    this.deleteFoodType = this.deleteFoodType.bind(this);
  }

  handleCyclingActivityLevelLowClick() {
    this.setState({ activityLevelCycling: 5 });
    this.setState({ isCyclingActivityLevelLow: true });
    this.setState({ isMinutesCyclingSubmitted: true });
  }

  handleCyclingActivityLevelModerateClick() {
    this.setState({ activityLevelCycling: 7 });
    this.setState({ isCyclingActivityLevelModerate: true });
    this.setState({ isMinutesCyclingSubmitted: true });
  }

  handleCyclingActivityLevelHighClick() {
    this.setState({ activityLevelCycling: 10 });
    this.setState({ isCyclingActivityLevelHigh: true });
    this.setState({ isMinutesCyclingSubmitted: true });
  }

  handleWalkingActivityLevelLowClick() {
    this.setState({ activityLevelWalking: 3 });
    this.setState({ isWalkingActivityLevelLow: true });
    this.setState({ isMinutesWalkingSubmitted: true });
  }

  handleWalkingActivityLevelModerateClick() {
    this.setState({ activityLevelWalking: 4.5 });
    this.setState({ isWalkingActivityLevelModerate: true });
    this.setState({ isMinutesWalkingSubmitted: true });
  }

  handleWalkingActivityLevelHighClick() {
    this.setState({ activityLevelWalking: 6 });
    this.setState({ isWalkingActivityLevelHigh: true });
    this.setState({ isMinutesWalkingSubmitted: true });
  }

  handleRunningActivityLevelLowClick() {
    this.setState({ activityLevelRunning: 7 });
    this.setState({ isRunningActivityLevelLow: true });
    this.setState({ isMinutesRunningSubmitted: true });
  }

  handleRunningActivityLevelModerateClick() {
    this.setState({ activityLevelRunning: 10 });
    this.setState({ isRunningActivityLevelModerate: true });
    this.setState({ isMinutesRunningSubmitted: true });
  }

  handleRunningActivityLevelHighClick() {
    this.setState({ activityLevelRunning: 15 });
    this.setState({ isRunningActivityLevelHigh: true });
    this.setState({ isMinutesRunningSubmitted: true });
  }

  handleRowingActivityLevelLowClick() {
    this.setState({ activityLevelRowing: 5 });
    this.setState({ isRowingActivityLevelLow: true });
    this.setState({ isMinutesRowingSubmitted: true });
  }

  handleRowingActivityLevelModerateClick() {
    this.setState({ activityLevelRowing: 7 });
    this.setState({ isRowingActivityLevelModerate: true });
    this.setState({ isMinutesRowingSubmitted: true });
  }

  handleRowingActivityLevelHighClick() {
    this.setState({ activityLevelRowing: 10 });
    this.setState({ isRowingActivityLevelHigh: true });
    this.setState({ isMinutesRowingSubmitted: true });
  }

  handleChangeCyclingTimeBox(event) {
    this.setState({ numberOfMinutesCycling: event.target.value.trim() });
    this.validateMinutesCycling(event.target.value.trim());
  }

  validateMinutesCycling(minutes) {
    let localFormErrors = this.state.formErrorsMinutesCycling;
    let localValid = this.state.minutesCyclingValid;

    if (isNaN(minutes)) {
      localValid = false;
      this.setState({ isCyclingActivityLevelLow: false });
      this.setState({ isCyclingActivityLevelModerate: false });
      this.setState({ isCyclingActivityLevelHigh: false });
      localFormErrors.numberOfMinutesCycling = "Please enter a positive number";
    } else if (minutes.trim().length <= 0) {
      localValid = false;
      this.setState({ isCyclingActivityLevelLow: false });
      this.setState({ isCyclingActivityLevelModerate: false });
      this.setState({ isCyclingActivityLevelHigh: false });
      localFormErrors.numberOfMinutesCycling = "No number entered";
    } else if (/^0+$/.test(minutes)) {
      localValid = false;
      this.setState({ isCyclingActivityLevelLow: false });
      this.setState({ isCyclingActivityLevelModerate: false });
      this.setState({ isCyclingActivityLevelHigh: false });
      localFormErrors.numberOfMinutesCycling = "Please enter a positive number";
    } else if (!/^\d+$/.test(minutes)) {
      localValid = false;
      this.setState({ isCyclingActivityLevelLow: false });
      this.setState({ isCyclingActivityLevelModerate: false });
      this.setState({ isCyclingActivityLevelHigh: false });
      localFormErrors.numberOfMinutesCycling =
        "Decimals? Pretty precise! Or a negative number? Please enter a positive whole number";
    } else if (minutes.trim().length >= 4) {
      localValid = false;
      this.setState({ isCyclingActivityLevelLow: false });
      this.setState({ isCyclingActivityLevelModerate: false });
      this.setState({ isCyclingActivityLevelHigh: false });
      localFormErrors.numberOfMinutesCycling =
        "You've been cycling all day! When did you sleep? Or did you start with a 0? Please enter a number less than 1000.";
    } else {
      localValid = true;
      localFormErrors.numberOfMinutesCycling = "Please enter exercise level";
    }

    this.setState({ minutesCyclingValid: localValid });

    this.setState({ formErrorsMinutesCycling: localFormErrors });

    this.setState({
      formValidMinutesCycling: localValid
    });
  }

  submitMinutesCyclingClick() {
    this.state.formErrorsMinutesCycling.numberOfMinutesCycling =
      "Thanks for your details";

    this.setState({
      formErrorsMinutesCycling: this.state.formErrorsMinutesCycling
    });

    let singleItemArray = [
      [
        "Cycling",
        this.state.activityLevelCycling,
        this.state.numberOfMinutesCycling
      ]
    ];

    this.setState({
      activityArray: this.state.activityArray.concat(singleItemArray)
    });

    this.setState({
      caloriesLeft:
        this.state.caloriesLeft +
        this.state.activityLevelCycling * this.state.numberOfMinutesCycling
    });

    this.setState({ isMinutesCyclingSubmitted: false });
  }

  handleChangeWalkingTimeBox(event) {
    this.setState({ numberOfMinutesWalking: event.target.value.trim() });
    this.validateMinutesWalking(event.target.value.trim());
  }

  validateMinutesWalking(minutes) {
    let localFormErrors = this.state.formErrorsMinutesWalking;
    let localValid = this.state.minutesWalkingValid;

    if (isNaN(minutes)) {
      localValid = false;
      this.setState({ isWalkingActivityLevelLow: false });
      this.setState({ isWalkingActivityLevelModerate: false });
      this.setState({ isWalkingActivityLevelHigh: false });
      localFormErrors.numberOfMinutesWalking = "Please enter a positive number";
    } else if (minutes.trim().length <= 0) {
      localValid = false;
      this.setState({ isWalkingActivityLevelLow: false });
      this.setState({ isWalkingActivityLevelModerate: false });
      this.setState({ isWalkingActivityLevelHigh: false });
      localFormErrors.numberOfMinutesWalking = "No number entered";
    } else if (/^0+$/.test(minutes)) {
      localValid = false;
      this.setState({ isWalkingActivityLevelLow: false });
      this.setState({ isWalkingActivityLevelModerate: false });
      this.setState({ isWalkingActivityLevelHigh: false });
      localFormErrors.numberOfMinutesWalking = "Please enter a positive number";
    } else if (!/^\d+$/.test(minutes)) {
      localValid = false;
      this.setState({ isWalkingActivityLevelLow: false });
      this.setState({ isWalkingActivityLevelModerate: false });
      this.setState({ isWalkingActivityLevelHigh: false });
      localFormErrors.numberOfMinutesWalking =
        "Decimals? Pretty precise! Or a negative number? Please enter a positive whole number";
    } else if (minutes.trim().length >= 4) {
      localValid = false;
      this.setState({ isWalkingActivityLevelLow: false });
      this.setState({ isWalkingActivityLevelModerate: false });
      this.setState({ isWalkingActivityLevelHigh: false });
      localFormErrors.numberOfMinutesWalking =
        "You've been walking all day! When did you sleep? Or did you start with a 0? Please enter a number less than 1000.";
    } else {
      localValid = true;
      localFormErrors.numberOfMinutesWalking = "Please enter exercise level";
    }

    this.setState({ minutesWalkingValid: localValid });

    this.setState({ formErrorsMinutesWalking: localFormErrors });

    this.setState({
      formValidMinutesWalking: localValid
    });
  }

  submitMinutesWalkingClick() {
    this.state.formErrorsMinutesWalking.numberOfMinutesWalking =
      "Thanks for your details";

    this.setState({
      formErrorsMinutesWalking: this.state.formErrorsMinutesWalking
    });

    let singleItemArray = [
      [
        "Walking",
        this.state.activityLevelWalking,
        this.state.numberOfMinutesWalking
      ]
    ];

    this.setState({
      activityArray: this.state.activityArray.concat(singleItemArray)
    });

    this.setState({
      caloriesLeft:
        this.state.caloriesLeft +
        this.state.activityLevelWalking * this.state.numberOfMinutesWalking
    });

    this.setState({ isMinutesWalkingSubmitted: false });
  }

  submitMinutesRunningClick() {
    this.state.formErrorsMinutesRunning.numberOfMinutesRunning =
      "Thanks for your details";

    this.setState({
      formErrorsMinutesRunning: this.state.formErrorsMinutesRunning
    });

    let singleItemArray = [
      [
        "Running",
        this.state.activityLevelRunning,
        this.state.numberOfMinutesRunning
      ]
    ];

    this.setState({
      activityArray: this.state.activityArray.concat(singleItemArray)
    });

    this.setState({
      caloriesLeft:
        this.state.caloriesLeft +
        this.state.activityLevelRunning * this.state.numberOfMinutesRunning
    });

    this.setState({ isMinutesRunningSubmitted: false });
  }

  handleChangeRunningTimeBox(event) {
    this.setState({ numberOfMinutesRunning: event.target.value.trim() });
    this.validateMinutesRunning(event.target.value.trim());
  }

  validateMinutesRunning(minutes) {
    let localFormErrors = this.state.formErrorsMinutesRunning;
    let localValid = this.state.minutesRunningValid;

    if (isNaN(minutes)) {
      localValid = false;
      this.setState({ isRunningActivityLevelLow: false });
      this.setState({ isRunningActivityLevelModerate: false });
      this.setState({ isRunningActivityLevelHigh: false });
      localFormErrors.numberOfMinutesRunning = "Please enter a positive number";
    } else if (minutes.trim().length <= 0) {
      this.setState({ isRunningActivityLevelLow: false });
      this.setState({ isRunningActivityLevelModerate: false });
      this.setState({ isRunningActivityLevelHigh: false });
      localValid = false;
      localFormErrors.numberOfMinutesRunning = "No number entered";
    } else if (/^0+$/.test(minutes)) {
      localValid = false;
      this.setState({ isRunningActivityLevelLow: false });
      this.setState({ isRunningActivityLevelModerate: false });
      this.setState({ isRunningActivityLevelHigh: false });
      localFormErrors.numberOfMinutesRunning = "Please enter a positive number";
    } else if (!/^\d+$/.test(minutes)) {
      localValid = false;
      this.setState({ isRunningActivityLevelLow: false });
      this.setState({ isRunningActivityLevelModerate: false });
      this.setState({ isRunningActivityLevelHigh: false });
      localFormErrors.numberOfMinutesRunning =
        "Decimals? Pretty precise! Or a negative number? Please enter a positive whole number";
    } else if (minutes.trim().length >= 4) {
      localValid = false;
      this.setState({ isRunningActivityLevelLow: false });
      this.setState({ isRunningActivityLevelModerate: false });
      this.setState({ isRunningActivityLevelHigh: false });
      localFormErrors.numberOfMinutesRunning =
        "You've been running all day! When did you sleep? Or did you start with a 0? Please enter a number less than 1000.";
    } else {
      localValid = true;
      localFormErrors.numberOfMinutesRunning = "Please enter exercise level";
    }
    this.setState({ minutesRunningValid: localValid });
    this.setState({ formErrorsMinutesRunning: localFormErrors });
    this.setState({
      formValidMinutesRunning: localValid
    });
  }

  handleChangeRowingTimeBox(event) {
    this.setState({ numberOfMinutesRowing: event.target.value.trim() });
    this.validateMinutesRowing(event.target.value.trim());
  }

  validateMinutesRowing(minutes) {
    let localFormErrors = this.state.formErrorsMinutesRowing;

    let localValid = this.state.minutesRowingValid;

    if (isNaN(minutes)) {
      localValid = false;
      this.setState({ isRowingActivityLevelLow: false });
      this.setState({ isRowingActivityLevelModerate: false });
      this.setState({ isRowingActivityLevelHigh: false });
      localFormErrors.numberOfMinutesRowing = "Please enter a positive number";
    } else if (minutes.trim().length <= 0) {
      localValid = false;
      this.setState({ isRowingActivityLevelLow: false });
      this.setState({ isRowingActivityLevelModerate: false });
      this.setState({ isRowingActivityLevelHigh: false });
      localFormErrors.numberOfMinutesRowing = "No number entered";
    } else if (/^0+$/.test(minutes)) {
      localValid = false;
      this.setState({ isRowingActivityLevelLow: false });
      this.setState({ isRowingActivityLevelModerate: false });
      this.setState({ isRowingActivityLevelHigh: false });
      localFormErrors.numberOfMinutesRowing = "Please enter a positive number";
    } else if (!/^\d+$/.test(minutes)) {
      localValid = false;
      this.setState({ isRowingActivityLevelLow: false });
      this.setState({ isRowingActivityLevelModerate: false });
      this.setState({ isRowingActivityLevelHigh: false });
      localFormErrors.numberOfMinutesRowing =
        "Decimals? Pretty precise! Or a negative number? Please enter a positive whole number";
    } else if (minutes.trim().length >= 4) {
      localValid = false;
      this.setState({ isRowingActivityLevelLow: false });
      this.setState({ isRowingActivityLevelModerate: false });
      this.setState({ isRowingActivityLevelHigh: false });
      localFormErrors.numberOfMinutesRowing =
        "You've been rowing all day! When did you sleep? Or did you start with a 0? Please enter a number less than 1000.";
    } else {
      localValid = true;
      localFormErrors.numberOfMinutesRowing = "Please enter exercise level";
    }

    this.setState({ minutesRowingValid: localValid });

    this.setState({ formErrorsMinutesRowing: localFormErrors });

    this.setState({
      formValidMinutesRowing: localValid
    });
  }

  submitMinutesRowingClick() {
    this.state.formErrorsMinutesRowing.numberOfMinutesRowing =
      "Thanks for your details";

    this.setState({
      formErrorsMinutesRowing: this.state.formErrorsMinutesRowing
    });

    let singleItemArray = [
      [
        "Rowing",
        this.state.activityLevelRowing,
        this.state.numberOfMinutesRowing
      ]
    ];

    this.setState({
      activityArray: this.state.activityArray.concat(singleItemArray)
    });

    this.setState({
      caloriesLeft:
        this.state.caloriesLeft +
        this.state.activityLevelRowing * this.state.numberOfMinutesRowing
    });

    this.setState({ isMinutesRowingSubmitted: false });
  }

  handleChangeTeamSportTimeBox(event) {
    this.setState({ numberOfMinutesTeamSport: event.target.value.trim() });
    this.validateMinutesTeamSport(event.target.value.trim());
  }

  validateMinutesTeamSport(minutes) {
    let localFormErrors = this.state.formErrorsMinutesTeamSport;
    let localValid = this.state.minutesTeamSportValid;

    if (isNaN(minutes)) {
      localValid = false;
      localFormErrors.numberOfMinutesTeamSport =
        "Please enter a positive number";
    } else if (minutes.trim().length <= 0) {
      localValid = false;
      localFormErrors.numberOfMinutesTeamSport = "No number entered";
    } else if (/^0+$/.test(minutes)) {
      localValid = false;
      localFormErrors.numberOfMinutesTeamSport =
        "Please enter a positive number";
    } else if (!/^\d+$/.test(minutes)) {
      localValid = false;
      localFormErrors.numberOfMinutesTeamSport =
        "Decimals? Pretty precise! Or a negative number? Please enter a positive whole number";
    } else if (minutes.trim().length >= 4) {
      localFormErrors.numberOfMinutesTeamSport =
        "You've been playing sport all day! When did you sleep? Or did you start with a 0? Please enter a number less than 1000.";
    } else {
      localValid = true;
      localFormErrors.numberOfMinutesTeamSport = "Please submit details";
    }

    this.setState({ minutesTeamSportValid: localValid });

    this.setState({ formErrorsMinutesTeamSport: localFormErrors });

    this.setState({
      formValidMinutesTeamSport: localValid
    });
  }

  submitMinutesTeamSportClick() {
    this.state.formErrorsMinutesTeamSport.numberOfMinutesTeamSport =
      "Thanks for your details";

    this.setState({
      formErrorsMinutesTeamSport: this.state.formErrorsMinutesTeamSport
    });

    let singleItemArray = [
      ["Team Sport", 10, this.state.numberOfMinutesTeamSport]
    ];

    this.setState({
      activityArray: this.state.activityArray.concat(singleItemArray)
    });

    this.setState({
      caloriesLeft:
        this.state.caloriesLeft + 10 * this.state.numberOfMinutesTeamSport
    });
  }

  onDeleteFormChange(event) {
    this.setState({ activityRemoveChoice: event.target.value });

    var i;
    var foundIt = false;
    var myArray = this.state.activityArray;
    for (i = 0; i < myArray.length; i++) {
      if (
        event.target.value
          .toLowerCase()
          .localeCompare(myArray[i][0].toLowerCase()) === 0
      ) {
        foundIt = true;
        break;
      }
    }

    if (foundIt === true) {
      this.setState({ validActivity: true });
    } else {
      this.setState({ validActivity: false });
    }
  }

  deleteActivityType() {
    var foundIt;
    var i;
    var myArray = this.state.activityArray;
    for (i = 0; i < myArray.length; i++) {
      if (
        this.state.activityRemoveChoice
          .toLowerCase()
          .localeCompare(myArray[i][0].toLowerCase()) === 0
      ) {
        foundIt = true;
        break;
      }
    }
    if (foundIt === true) {
      this.setState({
        caloriesLeft: this.state.caloriesLeft - myArray[i][1] * myArray[i][2]
      });
    }

    let currentActivityArray = this.state.activityArray;

    currentActivityArray.splice(i, 1);

    if (foundIt === true) {
      this.setState({ activityArray: currentActivityArray });
    }
  }

  onSearchFormChange(event) {
    this.setState({ foodChoice: event.target.value });

    var i;
    var foundIt = false;
    var myArray = this.state.foodArray;
    for (i = 0; i < myArray.length; i++) {
      if (
        event.target.value
          .toLowerCase()
          .localeCompare(myArray[i][0].toLowerCase()) === 0
      ) {
        foundIt = true;
        break;
      }
    }

    if (foundIt === true) {
      this.setState({ validFood: true });
    } else {
      this.setState({ validFood: false });
    }
  }

  handleGramTextBox(event) {
    this.setState({ weightInGrams: event.target.value });

    this.validateWeightInGramsbox(event.target.value);
  }

  validateWeightInGramsbox(grams) {
    let localFormErrors = this.state.formErrorsGramsValid;
    let localValid = this.state.gramsValid;

    if (isNaN(grams)) {
      localValid = false;
      localFormErrors.numberOfGrams = "Please enter a positive number";
    } else if (grams.length <= 0) {
      localValid = false;
      localFormErrors.numberOfGrams = "No number entered";
    } else if (/^0+$/.test(grams)) {
      localValid = false;
      localFormErrors.numberOfGrams = "Please enter a positive number";
    } else if (!/^\d+$/.test(grams)) {
      localValid = false;
      localFormErrors.numberOfGrams =
        "Decimals? Pretty precise! Or a negative number? Please enter a positive whole number";
    } else if (grams.length >= 5) {
      localValid = false;
      localFormErrors.numberOfGrams =
        "How much did you eat? Or did you start with a 0? Please enter a number less than 10000.";
    } else {
      localValid = true;
      localFormErrors.numberOfGrams = "Please submit details";
    }
    this.setState({ gramsValid: localValid });
    this.setState({ formErrorsGramsValid: localFormErrors });
    this.setState({
      formValidGrams: localValid
    });
  }

  submitFoodType() {
    var foundIt;
    var foodChosen;
    var i;
    var myArray = this.state.foodArray;
    for (i = 0; i < myArray.length; i++) {
      if (
        this.state.foodChoice
          .toLowerCase()
          .localeCompare(myArray[i][0].toLowerCase()) === 0
      ) {
        foundIt = true;
        myArray[i][1] = this.state.weightInGrams;
        myArray[i][3] = (myArray[i][1] * myArray[i][2]) / 100;
        foodChosen = [
          [myArray[i][0], myArray[i][1], myArray[i][2], myArray[i][3]]
        ];

        this.setState({
          caloriesConsumed: this.state.caloriesConsumed + myArray[i][3]
        });
        break;
      }
    }

    if (foundIt === true) {
      this.setState({ chosenFoods: this.state.chosenFoods.concat(foodChosen) });

      console.log(this.state.chosenFoods);
    }

    this.state.formErrorsGramsValid.numberOfGrams = "Thanks for your details";

    this.setState({
      formErrorsGramsValid: this.state.formErrorsGramsValid
    });
  }

  onDeleteFormChange2(event) {
    this.setState({ foodRemoveChoice: event.target.value });

    var i;
    var foundIt = false;
    var myArray = this.state.chosenFoods;
    for (i = 0; i < myArray.length; i++) {
      if (
        event.target.value
          .toLowerCase()
          .localeCompare(myArray[i][0].toLowerCase()) === 0
      ) {
        foundIt = true;
        break;
      }
    }

    if (foundIt === true) {
      this.setState({ validFood2: true });
    } else {
      this.setState({ validFood2: false });
    }
  }

  deleteFoodType() {
    var foundIt;
    var i;
    var myArray = this.state.chosenFoods;
    for (i = 0; i < myArray.length; i++) {
      if (
        this.state.foodRemoveChoice
          .toLowerCase()
          .localeCompare(myArray[i][0].toLowerCase()) === 0
      ) {
        foundIt = true;
        break;
      }
    }
    if (foundIt === true) {
      this.setState({
        calorieCount: this.state.calorieCount - myArray[i][3]
      });
    }

    let currentChosenFoods = this.state.chosenFoods;

    currentChosenFoods.splice(i, 1);

    if (foundIt === true) {
      this.setState({ chosenFoods: currentChosenFoods });
    }
  }

  render() {
    return (
      <div className="CalorieCounter">
        <form>
          <div className="form-group">
            <label>
              <strong className="text-success mb-2">Minutes Cycling:</strong>
              <input
                type="text"
                value={this.state.numberOfMinutesCycling}
                name="getDist"
                onChange={this.handleChangeCyclingTimeBox}
              />
            </label>
            <br />
          </div>
        </form>
        <div>
          <button onClick={() => this.handleCyclingActivityLevelLowClick()}>
            {" "}
            Low{" "}
          </button>
          <button
            onClick={() => this.handleCyclingActivityLevelModerateClick()}
          >
            {" "}
            Moderate{" "}
          </button>
          <button onClick={() => this.handleCyclingActivityLevelHighClick()}>
            {" "}
            High{" "}
          </button>
          <br />
          <button
            disabled={
              !(
                this.state.formValidMinutesCycling &&
                (this.state.isCyclingActivityLevelLow ||
                  this.state.isCyclingActivityLevelModerate ||
                  this.state.isCyclingActivityLevelHigh) &&
                this.state.isMinutesCyclingSubmitted
              )
            }
            onClick={this.submitMinutesCyclingClick}
            type="button"
            className="btn btn-warning btn-lg"
          >
            Submit Details
          </button>
        </div>
        <ValidationCycling
          formErrorsMinutesCycling={this.state.formErrorsMinutesCycling}
        />
        <br />
        <form>
          <div className="form-group">
            <label>
              <strong className="text-success mb-2">Minutes Walking:</strong>
              <input
                type="text"
                value={this.state.numberOfMinutesWalking}
                name="getDist"
                onChange={this.handleChangeWalkingTimeBox}
              />
            </label>
            <br />
          </div>
        </form>
        <div>
          <button onClick={() => this.handleWalkingActivityLevelLowClick()}>
            {" "}
            Low{" "}
          </button>
          <button
            onClick={() => this.handleWalkingActivityLevelModerateClick()}
          >
            {" "}
            Moderate{" "}
          </button>
          <button onClick={() => this.handleWalkingActivityLevelHighClick()}>
            {" "}
            High{" "}
          </button>
          <br />
          <button
            disabled={
              !(
                this.state.formValidMinutesWalking &&
                (this.state.isWalkingActivityLevelLow ||
                  this.state.isWalkingActivityLevelModerate ||
                  this.state.isWalkingActivityLevelHigh) &&
                this.state.isMinutesWalkingSubmitted
              )
            }
            onClick={this.submitMinutesWalkingClick}
            type="button"
            className="btn btn-warning btn-lg"
          >
            Submit Details
          </button>
        </div>
        <ValidationWalking
          formErrorsMinutesWalking={this.state.formErrorsMinutesWalking}
        />
        <br />
        <form>
          <div className="form-group">
            <label>
              <strong className="text-success mb-2">Minutes Running:</strong>
              <input
                type="text"
                value={this.state.numberOfMinutesRunning}
                name="getDist"
                onChange={this.handleChangeRunningTimeBox}
              />
            </label>
            <br />
          </div>
        </form>
        <div>
          <button onClick={() => this.handleRunningActivityLevelLowClick()}>
            {" "}
            Low{" "}
          </button>
          <button
            onClick={() => this.handleRunningActivityLevelModerateClick()}
          >
            {" "}
            Moderate{" "}
          </button>
          <button onClick={() => this.handleRunningActivityLevelHighClick()}>
            {" "}
            High{" "}
          </button>
          <br />
          <button
            disabled={
              !(
                this.state.formValidMinutesRunning &&
                (this.state.isRunningActivityLevelLow ||
                  this.state.isRunningActivityLevelModerate ||
                  this.state.isRunningActivityLevelHigh) &&
                this.state.isMinutesRunningSubmitted
              )
            }
            onClick={this.submitMinutesRunningClick}
            type="button"
            className="btn btn-warning btn-lg"
          >
            Submit Details
          </button>
        </div>
        <ValidationRunning
          formErrorsMinutesRunning={this.state.formErrorsMinutesRunning}
        />
        <br />
        <form>
          <div className="form-group">
            <label>
              <strong className="text-success mb-2">Minutes Rowing:</strong>
              <input
                type="text"
                value={this.state.numberOfMinutesRowing}
                name="getDist"
                onChange={this.handleChangeRowingTimeBox}
              />
            </label>
            <br />
          </div>
        </form>
        <div>
          <button onClick={() => this.handleRowingActivityLevelLowClick()}>
            {" "}
            Low{" "}
          </button>
          <button onClick={() => this.handleRowingActivityLevelModerateClick()}>
            {" "}
            Moderate{" "}
          </button>
          <button onClick={() => this.handleRowingActivityLevelHighClick()}>
            {" "}
            High{" "}
          </button>
          <br />
          <button
            disabled={
              !(
                this.state.formValidMinutesRowing &&
                (this.state.isRowingActivityLevelLow ||
                  this.state.isRowingActivityLevelModerate ||
                  this.state.isRowingActivityLevelHigh) &&
                this.state.isMinutesRowingSubmitted
              )
            }
            onClick={this.submitMinutesRowingClick}
            type="button"
            className="btn btn-warning btn-lg"
          >
            Submit Details
          </button>
        </div>
        <ValidationRowing
          formErrorsMinutesRowing={this.state.formErrorsMinutesRowing}
        />
        <form>
          <br />
          <div className="form-group">
            <label>
              <strong className="text-success mb-2">Minutes Team Sport:</strong>
              <input
                type="text"
                value={this.state.numberOfMinutesTeamSport}
                name="getDist"
                onChange={this.handleChangeTeamSportTimeBox}
              />
            </label>
            <br />
            <button
              disabled={!this.state.formValidMinutesTeamSport}
              onClick={this.submitMinutesTeamSportClick}
              type="button"
              className="btn btn-warning btn-lg"
            >
              Submit Details
            </button>
            <ValidationTeamSport
              formErrorsMinutesTeamSport={this.state.formErrorsMinutesTeamSport}
            />
            <form>
              <br />
              <b>Delete item: </b>
              <input
                type="text"
                name="removeFood"
                onChange={this.onDeleteFormChange}
              />
            </form>
            <button
              disabled={!this.state.validActivity}
              onClick={this.deleteActivityType}
              type="button"
              className="Ciaran"
            >
              Submit Details
            </button>
            <br />
            <br />
            Your choices
            <br />
            <br />
            {this.state.activityArray.map((b, index) => (
              <option key={index}>
                {this.state.activityArray[index][0] +
                  "; Activity Level: " +
                  this.state.activityArray[index][1] +
                  "; Minutes: " +
                  this.state.activityArray[index][2]}
              </option>
            ))}
            <br />
          </div>
        </form>
        Your recommended daily calorie intake is {this.state.caloriesLeft}{" "}
        calories
        <br />
        <br />
        <hr />
        <form>
          <b>Type your food search here: </b>
          <input
            type="text"
            name="getFood"
            onChange={this.onSearchFormChange}
          />
        </form>
        {this.state.validFood === false && <p>Food not found</p>}
        {this.state.validFood === true && <p>Food found!</p>}
        <form>
          <b>Enter weight in grams: </b>
          <input
            type="text"
            name="getWeight"
            disabled={!this.state.validFood}
            onChange={this.handleGramTextBox}
          />
        </form>
        <button
          disabled={!(this.state.validFood && this.state.gramsValid)}
          onClick={this.submitFoodType}
          type="button"
          className="Ciar"
        >
          Submit Details
        </button>
        <ValidationGrams
          formErrorsGramsValid={this.state.formErrorsGramsValid}
        />
        <br />
        <form>
          <b>Delete item: </b>
          <input
            type="text"
            name="removeFood"
            onChange={this.onDeleteFormChange2}
          />
        </form>
        <button
          disabled={!this.state.validFood2}
          onClick={this.deleteFoodType}
          type="button"
          className="Ciaran"
        >
          Submit Details
        </button>
        <br />
        <br />
        Your choices
        <br />
        <br />
        {this.state.chosenFoods.map((b, index) => (
          <option key={index}>
            {this.state.chosenFoods[index][0] +
              ", " +
              this.state.chosenFoods[index][1] +
              " grams, " +
              this.state.chosenFoods[index][2] +
              " calories per 100 grams, " +
              this.state.chosenFoods[index][3] +
              " calories"}
          </option>
        ))}
        <br />
        Your calorie intake is {Math.round(this.state.caloriesConsumed)}{" "}
        calories.
        <hr />
        {this.state.caloriesConsumed > this.state.caloriesLeft && (
          <p>
            You have exceeded your daily calorie intake by{" "}
            {Math.round(this.state.caloriesConsumed - this.state.caloriesLeft)}
          </p>
        )}
        {this.state.caloriesLeft >= this.state.caloriesConsumed && (
          <p>
            You can eat{" "}
            {Math.round(this.state.caloriesLeft - this.state.caloriesConsumed)}{" "}
            more calories to achieve your recommended daily calorie intake.
          </p>
        )}
      </div>
    );
  }
}
export default CalorieCounter;
