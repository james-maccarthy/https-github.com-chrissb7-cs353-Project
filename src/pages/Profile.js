import React, { Component } from "react";
import "./Profile.css";
import userSelected from "../jsonData/localData.json";
import ValidationCaloriesPerDay from "./Validation/ValidationCaloriesPerDay.js";
import ValidationCurrentWeight from "./Validation/ValidationCurrentWeight.js";
import ValidationIdealWeight from "./Validation/ValidationIdealWeight.js";
import ValidationCycling from "./Validation/ValidationCycling";
import ValidationWalking from "./Validation/ValidationWalking";
import ValidationRunning from "./Validation/ValidationRunning";
import ValidationRowing from "./Validation/ValidationRowing";
import ValidationTeamSport from "./Validation/ValidationTeamSport";
import ValidationWeightLifting from "./Validation/ValidationWeightLifting";
// various imports, see corresponding .js files

class Profile extends Component {
  constructor(props) {
    super(props);
    // set two state variable to handle user current page and sidebar toggle
    // various state variables are declared
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
      isIdealWeightSubmitted: false,
      // default number of calories left,
      // presuming no exercise and no food
      // intake
      caloriesLeft: 2000,
      // 6 variables below are assigned a
      // numeric value upon various text
      // box submissions
      numberOfMinutesCycling: "",
      numberOfMinutesRunning: "",
      numberOfMinutesWalking: "",
      numberOfMinutesTeamSport: "",
      numberOfMinutesRowing: "",
      numberOfMinutesWeightLifting: "",
      // 4 variables below are assigned an
      // activity level (numeric) upon
      // various button presses
      activityLevelCycling: "",
      activityLevelWalking: "",
      activityLevelRunning: "",
      activityLevelRowing: "",
      // relating to cycling text box,
      // various messages are printed
      // depending on valid or invalid input
      // default message is ""
      formErrorsMinutesCycling: { numberOfMinutesCycling: "" },
      // the next 2 are false if input
      // valid, changed to true otherwise
      minutesCyclingValid: false,
      formValidMinutesCycling: false,
      // next 3 variables behave the same as
      // above variables for cycling
      formErrorsMinutesWalking: { numberOfMinutesWalking: "" },
      minutesWalkingValid: false,
      formValidMinutesWalking: false,
      // next 3 as for cycling
      formErrorsMinutesRunning: { numberOfMinutesRunning: "" },
      minutesRunningValid: false,
      formValidMinutesRunning: false,
      // next 3 as for cycling
      formErrorsMinutesRowing: { numberOfMinutesRowing: "" },
      minutesRowingValid: false,
      formValidMinutesRowing: false,
      // next 3 as for cycling
      formErrorsMinutesTeamSport: { numberOfMinutesTeamSport: "" },
      minutesTeamSportValid: false,
      formValidMinutesTeamSport: false,
      // next 3 as for cycling
      formErrorsMinutesWeightLifting: { numberOfMinutesWeightLifting: "" },
      minutesWeightLiftingValid: false,
      formValidMinutesWeightLifting: false,
      // next 6 boolean variables are true
      // or false depending on whether the
      // various inputs CAN be submitted.
      // Once submitted, they change to
      // false again, (indicating they
      // cannot be submitted without a
      // a change to the text box)
      canMinutesCyclingBeSubmitted: false,
      canMinutesWalkingBeSubmitted: false,
      canMinutesRunningBeSubmitted: false,
      canMinutesRowingBeSubmitted: false,
      canMinutesTeamSportBeSubmitted: false,
      canMinutesWeightLiftingBeSubmitted: false,

      // next 12 boolean variables indicate
      // whether various activity levels are
      // low, moderate or high.
      // Once valid text box input is
      // recieved and the relevant buttons
      // are clicked, these change to true. // The booleans are set to false
      // again upon submission of details.
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
      // activityArray will hold details of
      // each activity the user chooses
      activityArray: []
    };

    ////////THE EXERCISE SECTION BINDED FUNCTIONS/////////////

    this.handleCyclingActivityLevelLowClick = this.handleCyclingActivityLevelLowClick.bind(this);
    this.handleCyclingActivityLevelModerateClick = this.handleCyclingActivityLevelModerateClick.bind(this);
    this.handleCyclingActivityLevelHighClick = this.handleCyclingActivityLevelHighClick.bind(this);
    this.handleWalkingActivityLevelLowClick = this.handleWalkingActivityLevelLowClick.bind(this);
    this.handleWalkingActivityLevelModerateClick = this.handleWalkingActivityLevelModerateClick.bind(this);
    this.handleWalkingActivityLevelHighClick = this.handleWalkingActivityLevelHighClick.bind(this);
    this.handleRunningActivityLevelLowClick = this.handleRunningActivityLevelLowClick.bind(this);
    this.handleRunningActivityLevelModerateClick = this.handleRunningActivityLevelModerateClick.bind(this);
    this.handleRunningActivityLevelHighClick = this.handleRunningActivityLevelHighClick.bind(this);
    this.handleRowingActivityLevelLowClick = this.handleRowingActivityLevelLowClick.bind(this);
    this.handleRowingActivityLevelModerateClick = this.handleRowingActivityLevelModerateClick.bind(this);
    this.handleRowingActivityLevelHighClick = this.handleRowingActivityLevelHighClick.bind(this);
    this.handleChangeCyclingTimeBox = this.handleChangeCyclingTimeBox.bind(this);
    this.handleChangeWalkingTimeBox = this.handleChangeWalkingTimeBox.bind(this);
    this.handleChangeRunningTimeBox = this.handleChangeRunningTimeBox.bind(this);
    this.handleChangeRowingTimeBox = this.handleChangeRowingTimeBox.bind(this);
    this.handleChangeTeamSportTimeBox = this.handleChangeTeamSportTimeBox.bind(this);
    this.handleChangeWeightLiftingTimeBox = this.handleChangeWeightLiftingTimeBox.bind(this);
    this.submitMinutesCyclingClick = this.submitMinutesCyclingClick.bind(this);
    this.validateMinutesCycling = this.validateMinutesCycling.bind(this);
    this.submitMinutesWalkingClick = this.submitMinutesWalkingClick.bind(this);
    this.validateMinutesWalking = this.validateMinutesWalking.bind(this);
    this.submitMinutesRunningClick = this.submitMinutesRunningClick.bind(this);
    this.validateMinutesRunning = this.validateMinutesRunning.bind(this);
    this.submitMinutesRowingClick = this.submitMinutesRowingClick.bind(this);
    this.validateMinutesRowing = this.validateMinutesRowing.bind(this);
    this.submitMinutesTeamSportClick = this.submitMinutesTeamSportClick.bind(this);
    this.validateMinutesTeamSport = this.validateMinutesTeamSport.bind(this);
    this.submitMinutesWeightLiftingClick = this.submitMinutesWeightLiftingClick.bind(this);
    this.validateMinutesWeightLifting = this.validateMinutesWeightLifting.bind(this);

    ////////THE GOAL SECTION BINDED FUNCTIONS/////////////
    this.onDeleteFormChange = this.onDeleteFormChange.bind(this);
    this.deleteActivityType = this.deleteActivityType.bind(this);
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
    this.WeightCalculation = this.WeightCalculation.bind(this);
    this.WeightCalculation = this.WeightCalculation.bind(this);
    this.weightLossGoal = this.weightLossGoal.bind(this);
    this.mealPlanner = this.mealPlanner.bind(this);
    this.weightLossStats = this.weightLossStats.bind(this);
    this.weightLossStats = this.weightLossStats.bind(this);
    this.weightLossStats2 = this.weightLossStats2.bind(this);
    this.weightLossStats2 = this.weightLossStats2.bind(this);
  }

  // next 12 functions behave in a similar
  // fashion. The first is commented.

  // handles clicking the minutes cycling
  // (activity level) low button.
  // Sets activityLevelCycling to 5
  // (calories burned per minute).
  // Sets two booleans to be true, both of
  // which are needed to enable the submit
  // details button for cycling
  // (UNLESS the user chooses moderate or
  // high activity)

  handleCyclingActivityLevelLowClick() {
    this.setState({ activityLevelCycling: 5 });
    this.setState({ isCyclingActivityLevelLow: true });
    this.setState({ canMinutesCyclingBeSubmitted: true });
  } // COR

  handleCyclingActivityLevelModerateClick() {
    this.setState({ activityLevelCycling: 7 });
    this.setState({ isCyclingActivityLevelModerate: true });
    this.setState({ canMinutesCyclingBeSubmitted: true });
  } // COR

  handleCyclingActivityLevelHighClick() {
    this.setState({ activityLevelCycling: 10 });
    this.setState({ isCyclingActivityLevelHigh: true });
    this.setState({ canMinutesCyclingBeSubmitted: true });
  } // COR

  handleWalkingActivityLevelLowClick() {
    this.setState({ activityLevelWalking: 3 });
    this.setState({ isWalkingActivityLevelLow: true });
    this.setState({ canMinutesWalkingBeSubmitted: true });
  } // COR

  handleWalkingActivityLevelModerateClick() {
    this.setState({ activityLevelWalking: 4.5 });
    this.setState({ isWalkingActivityLevelModerate: true });
    this.setState({ canMinutesWalkingBeSubmitted: true });
  } // COR

  handleWalkingActivityLevelHighClick() {
    this.setState({ activityLevelWalking: 6 });
    this.setState({ isWalkingActivityLevelHigh: true });
    this.setState({ canMinutesWalkingBeSubmitted: true });
  } // COR

  handleRunningActivityLevelLowClick() {
    this.setState({ activityLevelRunning: 7 });
    this.setState({ isRunningActivityLevelLow: true });
    this.setState({ canMinutesRunningBeSubmitted: true });
  } // COR

  handleRunningActivityLevelModerateClick() {
    this.setState({ activityLevelRunning: 10 });
    this.setState({ isRunningActivityLevelModerate: true });
    this.setState({ canMinutesRunningBeSubmitted: true });
  } // COR

  handleRunningActivityLevelHighClick() {
    this.setState({ activityLevelRunning: 15 });
    this.setState({ isRunningActivityLevelHigh: true });
    this.setState({ canMinutesRunningBeSubmitted: true });
  } // COR

  handleRowingActivityLevelLowClick() {
    this.setState({ activityLevelRowing: 5 });
    this.setState({ isRowingActivityLevelLow: true });
    this.setState({ canMinutesRowingBeSubmitted: true });
  } // COR

  handleRowingActivityLevelModerateClick() {
    this.setState({ activityLevelRowing: 7 });
    this.setState({ isRowingActivityLevelModerate: true });
    this.setState({ canMinutesRowingBeSubmitted: true });
  } // COR

  handleRowingActivityLevelHighClick() {
    this.setState({ activityLevelRowing: 10 });
    this.setState({ isRowingActivityLevelHigh: true });
    this.setState({ canMinutesRowingBeSubmitted: true });
  } // COR

  // END HANDLERS FOR ACTIVITY LEVELS

  // the next 3 functions handle the cycling
  // form.

  // The first, below, sets
  // numberOfMinutesCycling to the value
  // entered in the minutes cycling text box
  // It then calls validateMinutesCycling
  // on this value to check for valid input
  // see below for validateMinutesCycling

  handleChangeCyclingTimeBox(event) {
    this.setState({ numberOfMinutesCycling: event.target.value.trim() });
    this.validateMinutesCycling(event.target.value.trim());
  } // COR

  // function to check for valid or invalid
  // input.

  validateMinutesCycling(minutes) {
    // localFormErrors will be assigned an
    // error message if input is not valid
    let localFormErrors = this.state.formErrorsMinutesCycling;
    // localValid is set to false if input
    // is invalid, later used to disable
    // buttons
    let localValid = this.state.minutesCyclingValid;

    // if input is not a number, input is
    // invalid and cycling activity levels
    // are all set to false (to disable
    // cycling form submit button)
    // localFormErrors is assigned an
    // appropriate error message
    if (isNaN(minutes)) {
      localValid = false;
      this.setState({ isCyclingActivityLevelLow: false });
      this.setState({ isCyclingActivityLevelModerate: false });
      this.setState({ isCyclingActivityLevelHigh: false });
      localFormErrors.numberOfMinutesCycling = "Please enter a positive number";
      // else if the entry has 0 length (or
      // less!), do the same as first if
      // statement, except a different
      // error message
    } else if (minutes.trim().length <= 0) {
      localValid = false;
      this.setState({ isCyclingActivityLevelLow: false });
      this.setState({ isCyclingActivityLevelModerate: false });
      this.setState({ isCyclingActivityLevelHigh: false });
      localFormErrors.numberOfMinutesCycling = "No number entered";
      // else if the entry is all zeros or
      // starts with a minus sign, do the same as first if statement
    } else if (/^0+$/.test(minutes) || /^-/.test(minutes)) {
      localValid = false;
      this.setState({ isCyclingActivityLevelLow: false });
      this.setState({ isCyclingActivityLevelModerate: false });
      this.setState({ isCyclingActivityLevelHigh: false });
      localFormErrors.numberOfMinutesCycling = "Please enter a positive number";
      // else if entry is not all digits,
      // it must be a decimal! Do the same
      // as first if statement, except a
      // different error message
    } else if (!/^\d+$/.test(minutes)) {
      localValid = false;
      this.setState({ isCyclingActivityLevelLow: false });
      this.setState({ isCyclingActivityLevelModerate: false });
      this.setState({ isCyclingActivityLevelHigh: false });
      localFormErrors.numberOfMinutesCycling =
        "Decimals? Pretty precise! Please enter a positive whole number";
      // else if the input is bigger than
      // or equal to 1000,
      // or possibly starts with a 0,
      // do the same as
      // first if statement, except a
      // different error message
    } else if (minutes.trim().length >= 4) {
      localValid = false;
      this.setState({ isCyclingActivityLevelLow: false });
      this.setState({ isCyclingActivityLevelModerate: false });
      this.setState({ isCyclingActivityLevelHigh: false });
      localFormErrors.numberOfMinutesCycling =
        "You've been cycling all day! When did you sleep? Or did you start with a 0? Please enter a number less than 1000.";
      // otherwise, the input is valid, and
      // localValid is set to true (used to
      // help enable submission button), and
      // an appropriate message is displayed
    } else {
      localValid = true;
      localFormErrors.numberOfMinutesCycling = "Please enter exercise level";
    }

    // minutesCyclingValid takes the value
    // of localValid
    this.setState({ minutesCyclingValid: localValid });

    // formErrorsMinutesCycling is assigned
    // to localFormErrors
    this.setState({ formErrorsMinutesCycling: localFormErrors });

    // formValidMinutesCycling takes the
    // value of localValid
    this.setState({
      formValidMinutesCycling: localValid
    });
  } // COR

  // function to handle submit details
  // button for cycling form

  submitMinutesCyclingClick() {
    // if this button is clicked,
    // an appropriate message is displayed
    let localFormErrors = this.state.formErrorsMinutesCycling;
    localFormErrors.numberOfMinutesCycling = "Thanks for your details";

    // singleItemArray has one entry, an
    // array of 4 entries:
    // 1. Cycling
    // 2. the current value of activityLevelCycling
    // 3. the current value of numberOfMinutesCycling
    // 4. the product of 2 and 3,
    // representing the amount of calories burned
    // these are returned in the render
    let singleItemArray = [
      [
        "Cycling",
        this.state.activityLevelCycling,
        this.state.numberOfMinutesCycling,
        this.state.activityLevelCycling * this.state.numberOfMinutesCycling
      ]
    ];

    // the activityArray is updated, accepting
    // singleItemArray as an entry
    this.setState({
      activityArray: this.state.activityArray.concat(singleItemArray)
    });

    // caloriesLeft is updated:
    // the current value plus calories burned
    this.setState({
      caloriesLeft:
        this.state.caloriesLeft +
        this.state.activityLevelCycling * this.state.numberOfMinutesCycling
    });

    // this boolean is set to false to
    // disable the submit button, now that
    // the details have been submitted
    this.setState({ canMinutesCyclingBeSubmitted: false });
  } // COR

  // the next 3 functions handle the walking
  // form. They behave in the same way as
  // for the cycling form

  handleChangeWalkingTimeBox(event) {
    this.setState({ numberOfMinutesWalking: event.target.value.trim() });
    this.validateMinutesWalking(event.target.value.trim());
  } // COR

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
    } else if (/^0+$/.test(minutes) || /^-/.test(minutes)) {
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
        "Decimals? Pretty precise! Please enter a positive whole number";
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
  } // COR

  submitMinutesWalkingClick() {
    let localFormErrors = this.state.formErrorsMinutesWalking;

    localFormErrors.numberOfMinutesWalking = "Thanks for your details";

    let singleItemArray = [
      [
        "Walking",
        this.state.activityLevelWalking,
        this.state.numberOfMinutesWalking,
        this.state.activityLevelWalking * this.state.numberOfMinutesWalking
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

    this.setState({ canMinutesWalkingBeSubmitted: false });
  } // COR

  // the next 3 functions handle the running
  // form. They behave in the same way as
  // for the cycling form

  submitMinutesRunningClick() {
    let localFormErrors = this.state.formErrorsMinutesRunning;

    localFormErrors.numberOfMinutesRunning = "Thanks for your details";

    let singleItemArray = [
      [
        "Running",
        this.state.activityLevelRunning,
        this.state.numberOfMinutesRunning,
        this.state.activityLevelRunning * this.state.numberOfMinutesRunning
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

    this.setState({ canMinutesRunningBeSubmitted: false });
  } // COR

  handleChangeRunningTimeBox(event) {
    this.setState({ numberOfMinutesRunning: event.target.value.trim() });
    this.validateMinutesRunning(event.target.value.trim());
  } // COR

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
    } else if (/^0+$/.test(minutes) || /^-/.test(minutes)) {
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
        "Decimals? Pretty precise! Please enter a positive whole number";
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
  } // COR

  // the next 3 functions handle the rowing
  // form. They behave in the same way as
  // for the cycling form

  handleChangeRowingTimeBox(event) {
    this.setState({ numberOfMinutesRowing: event.target.value.trim() });
    this.validateMinutesRowing(event.target.value.trim());
  } // COR

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
    } else if (/^0+$/.test(minutes) || /^-/.test(minutes)) {
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
        "Decimals? Pretty precise! Please enter a positive whole number";
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
  } // COR

  submitMinutesRowingClick() {
    let localFormErrors = this.state.formErrorsMinutesRowing;

    localFormErrors.numberOfMinutesRowing = "Thanks for your details";

    let singleItemArray = [
      [
        "Rowing",
        this.state.activityLevelRowing,
        this.state.numberOfMinutesRowing,
        this.state.activityLevelRowing * this.state.numberOfMinutesRowing
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

    this.setState({ canMinutesRowingBeSubmitted: false });
  } // COR

  // the next 3 functions handle the team sport
  // form. They behave in much the same way // as for the cycling form, the key
  // difference being the activity level is
  // fixed and so there are no low, moderate
  // or high activity levels to be reset
  // to false

  handleChangeTeamSportTimeBox(event) {
    this.setState({ numberOfMinutesTeamSport: event.target.value.trim() });
    this.setState({ canMinutesTeamSportBeSubmitted: true });
    this.validateMinutesTeamSport(event.target.value.trim());
  } // COR

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
    } else if (/^0+$/.test(minutes) || /^-/.test(minutes)) {
      localValid = false;
      localFormErrors.numberOfMinutesTeamSport =
        "Please enter a positive number";
    } else if (!/^\d+$/.test(minutes)) {
      localValid = false;
      localFormErrors.numberOfMinutesTeamSport =
        "Decimals? Pretty precise! Please enter a positive whole number";
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
  } // COR

  submitMinutesTeamSportClick() {
    let localFormErrors = this.state.formErrorsMinutesTeamSport;

    localFormErrors.numberOfMinutesTeamSport = "Thanks for your details";

    let singleItemArray = [
      [
        "Team Sport",
        10,
        this.state.numberOfMinutesTeamSport,
        10 * this.state.numberOfMinutesTeamSport
      ]
    ];

    this.setState({
      activityArray: this.state.activityArray.concat(singleItemArray)
    });

    this.setState({
      caloriesLeft:
        this.state.caloriesLeft + 10 * this.state.numberOfMinutesTeamSport
    });

    this.setState({ canMinutesTeamSportBeSubmitted: false });
  } // COR

  // the next 3 functions handle the weight
  // lifting form. They behave in the same
  // way as for the team sport form

  handleChangeWeightLiftingTimeBox(event) {
    this.setState({ numberOfMinutesWeightLifting: event.target.value.trim() });
    this.setState({ canMinutesWeightLiftingBeSubmitted: true });
    this.validateMinutesWeightLifting(event.target.value.trim());
  } // COR

  validateMinutesWeightLifting(minutes) {
    let localFormErrors = this.state.formErrorsMinutesWeightLifting;
    let localValid = this.state.minutesWeightLiftingValid;

    if (isNaN(minutes)) {
      localValid = false;
      localFormErrors.numberOfMinutesWeightLifting =
        "Please enter a positive number";
    } else if (minutes.trim().length <= 0) {
      localValid = false;
      localFormErrors.numberOfMinutesWeightLifting = "No number entered";
    } else if (/^0+$/.test(minutes) || /^-/.test(minutes)) {
      localValid = false;
      localFormErrors.numberOfMinutesWeightLifting =
        "Please enter a positive number";
    } else if (!/^\d+$/.test(minutes)) {
      localValid = false;
      localFormErrors.numberOfMinutesWeightLifting =
        "Decimals? Pretty precise! Please enter a positive whole number";
    } else if (minutes.trim().length >= 4) {
      localFormErrors.numberOfMinutesWeightLifting =
        "You've been weight lifting all day! When did you sleep? Or did you start with a 0? Please enter a number less than 1000.";
    } else {
      localValid = true;
      localFormErrors.numberOfMinutesWeightLifting = "Please submit details";
    }

    this.setState({ minutesWeightLiftingValid: localValid });

    this.setState({ formErrorsMinutesWeightLifting: localFormErrors });

    this.setState({
      formValidMinutesWeightLifting: localValid
    });
  } // COR

  submitMinutesWeightLiftingClick() {
    let localFormErrors = this.state.formErrorsMinutesWeightLifting;

    localFormErrors.numberOfMinutesWeightLifting = "Thanks for your details";

    let singleItemArray = [
      [
        "Weight Lifting",
        10,
        this.state.numberOfMinutesWeightLifting,
        10 * this.state.numberOfMinutesWeightLifting
      ]
    ];

    this.setState({
      activityArray: this.state.activityArray.concat(singleItemArray)
    });

    this.setState({
      caloriesLeft:
        this.state.caloriesLeft + 10 * this.state.numberOfMinutesWeightLifting
    });

    this.setState({ canMinutesWeightLiftingBeSubmitted: false });
  } // COR

  // handles deletion of activity details
  onDeleteFormChange(event) {
    // activityRemoveChoice is set to input
    // to delete (activity) item text box
    this.setState({ activityRemoveChoice: event.target.value });

    var i; // counter
    var foundIt = false; // boolean, set to
    // true if activity is found
    var myArray = this.state.activityArray;
    // loops through myArray, looking for
    // activity match.
    for (i = 0; i < myArray.length; i++) {
      if (
        event.target.value
          .toLowerCase()
          .localeCompare(myArray[i][0].toLowerCase()) === 0
      ) {
        // If found,
        foundIt = true; // foundIt is true
        break; // stop search
      }
    }

    // set validActivity to true or false,
    // depending on whether there is a match
    // submit details button is enabled or
    // disabled accordingly (in the render)
    if (foundIt === true) {
      this.setState({ validActivity: true });
    } else {
      this.setState({ validActivity: false });
    }
  } // COR

  // upon submission of activity to delete,
  // the following function handles that
  // deletion.
  // Like above, it searches activityArray
  // for a match.
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
    // if a match is found, caloriesLeft is
    // updated according by lowering the value
    // by the amount of calories burned by
    // that activity
    if (foundIt === true) {
      this.setState({
        caloriesLeft: this.state.caloriesLeft - myArray[i][1] * myArray[i][2]
      });
    }

    // activityArray must be updated too.
    let currentActivityArray = this.state.activityArray;

    // the ith entry is removed
    currentActivityArray.splice(i, 1);

    // and activityArray is updated
    if (foundIt === true) {
      this.setState({ activityArray: currentActivityArray });
    }
  } // COR

  handleChangeCaloriesPerDayBox(event) {
    this.setState({ caloriesPerDay: event.target.value.trim() });
    this.setState({ isCaloriesPerDaySubmitted: true });
    this.validateCaloriesPerDay(event.target.value.trim());
  } // COR

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
    } else if (calories.trim() <= 1400 || calories.trim() >= 2500) {
        localValid = false;
        localFormErrors.caloriesPerDay =
          "Please enter a number greater than 1400 and less than 2500";
      } else {
      localValid = true;
      localFormErrors.caloriesPerDay = "Please submit your details";
    }
    this.setState({ caloriesPerDayValid: localValid });
    this.setState({ formErrorsCaloriesPerDay: localFormErrors });
    this.setState({
      formValidCaloriesPerDay: localValid
    });
  } // COR

  submitCaloriesPerDayClick() {
    let localFormErrors = this.state.formErrorsCaloriesPerDay;
    localFormErrors.caloriesPerDay = "Thanks for your details";

    this.setState({ isCaloriesPerDaySubmitted: false });
  } // COR

  handleChangeCurrentWeightBox(event) {
    this.setState({ currentWeight: event.target.value.trim() });
    this.setState({ isCurrentWeightSubmitted: true });
    this.validateCurrentWeight(event.target.value.trim());
  } // COR

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
  } // COR

  submitCurrentWeightClick() {
    let localFormErrors = this.state.formErrorsCurrentWeight;
    localFormErrors.currentWeight = "Thanks for your details";

    this.setState({ isCurrentWeightSubmitted: false });
  } // COR

  handleChangeIdealWeightBox(event) {
    this.setState({ idealWeight: event.target.value.trim() });
    this.setState({ isIdealWeightSubmitted: true });
    this.validateIdealWeight(event.target.value.trim());
  } // COR

  validateIdealWeight(kilos) {
    let localFormErrors = this.state.formErrorsIdealWeight;
    let localValid = this.state.idealWeightValid;

    if (this.state.currentWeight <= Number(kilos)) {
        localValid = false;
        localFormErrors.idealWeight = "Please enter a weight lower than your current weight (you may not have entered your current weight)";
      } else if (isNaN(kilos)) {
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
  } // COR

  submitIdealWeightClick() {
    let localFormErrors = this.state.formErrorsIdealWeight;
    localFormErrors.idealWeight = "Thanks for your details";

    this.setState({ isIdealWeightSubmitted: false });
  } // COR

  //////////////////////////// BREAKDOWN SECTION FUNCTIONALITY/////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////

  WeightCalculation() {
    if (this.state.currentWeight > 0) {
      return (
        <div class="card-header">
            <div class="card-body">
          <h3>Your Current weight is:</h3>
          <div>{this.state.currentWeight} KG</div>
          <br/>
          <div>{this.weightLossGoal()}</div>
          </div>
        </div> 
      );
    } else {
      return (
       
            <div class="card-header">
            <div class="card-body">
          <h3>Your Current weight is:</h3>
          <div>Please enter weight in goals section</div>
          <br/>
          <div>{this.weightLossGoal()}</div>
          </div>
        </div> 
      );
    }
  } //CHRIS

  weightLossGoal() {
    if (this.state.currentWeight > 0 && this.state.idealWeight > 0) {
      var currentWeight = this.state.currentWeight;
      var idealWeight = this.state.idealWeight;
      var weighAvg1 = currentWeight - idealWeight;
      var weighAvg2 =
        (this.state.currentWeight - this.state.idealWeight) * 7700;
      return (
        <div>
          <h3>Your weight loss goal in KG is:</h3>
          <div>{weighAvg1} KG</div>
          <h3>In calories your weight loss goal is:</h3>
          <div>{weighAvg2} KCAL/Calories</div>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Your weight loss goal in KG is:</h3>
          <div>Please enter current weight & ideal weight fields in goals</div>
        </div>
      );
    }
  } //CHRIS

  mealPlanner() {
    console.log(userSelected);
    let newdata = userSelected.map((user) => {
      return parseInt(user.meal.calorie);
    });
    let totalCal = newdata.reduce((acc, cals) => {
      return acc + cals;
    }, 0);
    this.state.caloriesUser = totalCal; //Calories from user Data
    let avgCals = Math.round(totalCal / 7);
    if (this.state.caloriesUser.length === 0) {
      return (
        <div class="card-header">
        <div class="card-body">  
          <h3>Your weekly Calories from meals/snacks:</h3>
          <br/>
          <div>Please add food items to Weekly Planner</div>
        </div>
        </div>
      );
    } else {
      return (


        <div class="card-header">
        <div class="card-body">  
          <h3>Your weekly Calories from meals/snacks:</h3>
          <div>{totalCal} KCAL/Calories</div>
          <br/>
          <h3>Your average Daily calories from meals/snacks:</h3>
          <div>{avgCals} KCAL/Calories</div>
          </div>
        </div>
      );
    }
  } //CHRIS

  weightLossStats() {
    let newdata = userSelected.map((user) => {
      return parseInt(user.meal.calorie);
    });
    let totalCal = newdata.reduce((acc, cals) => {
      return acc + cals;
    }, 0);
    this.state.caloriesUser = totalCal;
    let avgCals = totalCal / 7;
    let avgCalsDaily = this.state.caloriesPerDay;

    if (this.state.caloriesPerDay > 0 && this.state.caloriesUser > 0) {
      if (avgCals > avgCalsDaily) {
        let caloriesOver = Math.round(avgCals - avgCalsDaily);
        return (
            <div class="card-header">
            <div class="card-body">  
            <h3>Daily Calories & Weekly Calories:</h3>
            <div>
              You have gone over your set daily calorie limit by {caloriesOver}{" "}
              calories
            </div>
            <div>
              Or, {caloriesOver * 7} Calories over the limit for the week
            </div>
            <div>{this.weightLossStats2()}</div>
          </div>
          </div>
        );
      }
      if (avgCals < avgCalsDaily) {
        let caloriesLeft = Math.round(avgCalsDaily - avgCals);
        return (
            <div class="card-header">
            <div class="card-body">  
            <h3>Daily Calories & Weekly Calories:</h3>
            <div>
              You have {caloriesLeft} Calories left to use for each day!
            </div>
            <div>Or, {caloriesLeft * 7} Calories left for the week</div>
            <div>{this.weightLossStats2()}</div>
          </div>
          </div>
        );
      }
    } else {
      return (
          <div class="card-header">
          <div class="card-body"> 
          <h3>Daily Calories & Weekly Calories:</h3>
          <div>Please enter calories in goals & add food to weekly planner</div>
          <div>{this.weightLossStats2()}</div>
        </div>
        </div>
      );
    }
  } //CHRIS

  weightLossStats2() {
    let currentWeight = this.state.currentWeight;
    let idealWeight = this.state.idealWeight;
    let weightGoal = currentWeight - idealWeight;
    let burnCalsdaily = 2500 - this.state.caloriesPerDay;
    var idealWeightCals = Math.round(weightGoal * 7700);
    if (
      this.state.currentWeight > 0 &&
      this.state.idealWeight > 0 &&
      this.state.caloriesPerDay > 0
    ) {
      var days = Math.round(idealWeightCals / burnCalsdaily);
      return (
        <div>
          <h3>Days to burn calories:</h3>
          <strong>Based on an average of 2500 calories per day:</strong>
          <div>
            It will take {days} days on a calorie intake of{" "}
            {this.state.caloriesPerDay} KCAL/calories per day
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Days to burn calories:</h3>
          <div>Please enter & submit fields in goals</div>
        </div>
      );
    }
  } //CHRIS

  //////////////////////////// EXERCISE SECTION FUNCTIONALITY (COR)/////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////// FUNCTIONS FOR TABULAR BASED UI//////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////

  tabClick(index) {
    let newTabStatus = [false, false, false];
    newTabStatus[index] = true;
    this.setState({ tabStatus: newTabStatus });
  }

  ////////THE GOAL FORMS SECTION BINDED FUNCTIONS/////////////

  ////////////////////////////GOALS FORM FUNCTIONALITY//////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////

  render() {
    return (
      <div>
        <table className="tabs">
          <thead>
            <tr>
              <td>
                <div
                  className={this.state.tabStatus[0] ? "tabOn" : ""}
                  onClick={this.tabClick.bind(this, 0)}
                >
                  Goals
                </div>
              </td>
              <td>
                <div
                  className={this.state.tabStatus[1] ? "tabOn" : ""}
                  onClick={this.tabClick.bind(this, 1)}
                >
                  The Breakdown
                </div>
              </td>
              <td>
                <div
                  className={this.state.tabStatus[2] ? "tabOn" : ""}
                  onClick={this.tabClick.bind(this, 2)}
                >
                  Exercise
                </div>
              </td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan="3">
                <div className={this.state.tabStatus[0] ? "tabDiv" : "hide"}id="goalsContainer">
                <div class="card text-white bg-success mb-3" id="goalsContainer">
                <form>
                <br />
                    <div className="form-group">
                    <h3>
                        Please Input Daily Calorie Intake
                    </h3>
                    <div className="col-md-4" id="goalsContainer">
                        <input
                        id="textinput"
                        name="textinput"
                        type="text"
                        placeholder="Calorie intake per day"
                        className="form-control input-sm"
                        value={this.state.caloriesPerDay}
                        onChange={this.handleChangeCaloriesPerDayBox}
                        />
                    </div>
                    </div>
                    <br />
                    <button
                    disabled={
                        !(
                        this.state.formValidCaloriesPerDay &&
                        this.state.isCaloriesPerDaySubmitted
                        )
                    }
                    onClick={this.submitCaloriesPerDayClick}
                    type="button"
                    className="btn btn-primary"
                    >
                    Submit Details
                    </button>
                    <ValidationCaloriesPerDay
                    formErrorsCaloriesPerDay={
                        this.state.formErrorsCaloriesPerDay
                    }
                    />
                    </form>

                    <form>
                    <div className="form-group">
                    <h3>
                        Please Input Current Weight
                    </h3>
                    <div className="col-md-4"id="goalsContainer">
                        <input
                        id="textinput"
                        name="textinput"
                        type="text"
                        placeholder="Current weight in kg"
                        className="form-control input-md"
                        value={this.state.currentWeight}
                        onChange={this.handleChangeCurrentWeightBox}
                        />
                    </div>
                    </div>
                    <br />
                    <button
                    disabled={
                        !(
                        this.state.formValidCurrentWeight &&
                        this.state.isCurrentWeightSubmitted
                        )
                    }
                    onClick={this.submitCurrentWeightClick}
                    type="button"
                    className="btn btn-primary"
                    >
                    Submit Details
                    </button>
                    </form>
                    <ValidationCurrentWeight
                    formErrorsCurrentWeight={this.state.formErrorsCurrentWeight}
                    />

                    <form>
                    <div className="form-group">
                    <h3>
                        Please Input  Weight
                    </h3>
                    <div className="col-md-4" id="goalsContainer">
                        <input
                        id="textinput"
                        name="textinput"
                        type="text"
                        placeholder="Ideal weight in kg"
                        className="form-control input-md"
                        value={this.state.idealWeight}
                        onChange={this.handleChangeIdealWeightBox}
                        />
                    </div>
                    </div>
                    <br/>
                    <button
                    disabled={
                        !(
                        this.state.formValidIdealWeight &&
                        this.state.isIdealWeightSubmitted
                        )
                    }
                    onClick={this.submitIdealWeightClick}
                    type="button"
                    className="btn btn-primary"
                    >
                    Submit Details
                    </button>
                    </form>
                    <ValidationIdealWeight
                    formErrorsIdealWeight={this.state.formErrorsIdealWeight}
                    />
                  </div>
                  </div>

                <div className={this.state.tabStatus[1] ? "tabDiv" : "hide"} id="goalsContainer">
                  <body>
                    <div class="card text-white bg-success mb-3" id="goalsContainer">
                      <h2>Calorie Breakdown:</h2>
                      {this.mealPlanner()}
                    </div>
                    <div class="card text-white bg-primary mb-3" id="goalsContainer">
                      <h2>Weight Statistics:</h2>
                      {this.WeightCalculation()}
                    </div>
                    <div class="card text-white bg-dark mb-3" >
                    <br/>
                      <h2>Weight Loss in numbers</h2>
                      {this.weightLossStats()}
                    </div>
                  </body>
                </div>

                <div className={this.state.tabStatus[2] ? "tabDiv" : "hide"} id="goalsContainer">
                  
                <div class="card" id="exerciseCard">
                    
                
        <div class="card-header bg-light mb-3" id="exerciseP"><h3>Exercise Activity Checker</h3></div>        
                <p id="exerciseP">
                    Hey there! Want to eat more and stay in shape? Exercise is a
                    no-brainer! See how many calories you can burn for various
                    daily exercises at different levels of intensity. 
                    <br></br>
                    <br></br>
                    Just fill in the details and click your level. See what's truly
                    required to work off 500 calories. It might be more than you
                    think!</p>
                    </div>
                    <br />
                    <div class="card border-secondary mb-3"  id="exerciseCard2"> 
                    <form>
                      <div className="col-md-4" id="goalsContainer">
                        <label>
                          <strong>
                            Minutes Cycling:
                          </strong>
                          <input
                            type="text"
                            value={this.state.numberOfMinutesCycling}
                            name="getDist"
                            onChange={this.handleChangeCyclingTimeBox}
                            className="form-control input-md"
                          />
                        </label>
                        <br />
                      </div>
                    </form>
                    <div id = "goalsContainer">
                      <button
                        onClick={() =>
                          this.handleCyclingActivityLevelLowClick()
                        }
                      >
                        {" "}
                        Low{" "}
                      </button>
                      <button
                        onClick={() =>
                          this.handleCyclingActivityLevelModerateClick()
                        }
                      >
                        {" "}
                        Moderate{" "}
                      </button>
                      <button
                        onClick={() =>
                          this.handleCyclingActivityLevelHighClick()
                        }
                      >
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
                            this.state.canMinutesCyclingBeSubmitted
                          )
                        }
                        onClick={this.submitMinutesCyclingClick}
                        type="button"
                        className="btn btn-primary"
                      >
                        Submit Details
                      </button>
                    </div>
                    <ValidationCycling
                      formErrorsMinutesCycling={
                        this.state.formErrorsMinutesCycling
                      }
                    />
                    <br />
                    <form>
                      <div className="form-group">
                        <label>
                          <strong>
                            Minutes Walking:
                          </strong>
                          <input
                            type="text"
                            value={this.state.numberOfMinutesWalking}
                            name="getDist"
                            onChange={this.handleChangeWalkingTimeBox}
                            className="form-control input-md"
                          />
                        </label>
                        <br />
                      </div>
                    </form>
                    <div id = "goalsContainer">
                      <button
                        onClick={() =>
                          this.handleWalkingActivityLevelLowClick()
                        }
                      >
                        {" "}
                        Low{" "}
                      </button>
                      <button
                        onClick={() =>
                          this.handleWalkingActivityLevelModerateClick()
                        }
                      >
                        {" "}
                        Moderate{" "}
                      </button>
                      <button
                        onClick={() =>
                          this.handleWalkingActivityLevelHighClick()
                        }
                      >
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
                            this.state.canMinutesWalkingBeSubmitted
                          )
                        }
                        onClick={this.submitMinutesWalkingClick}
                        type="button"
                        className="btn btn-primary"
                      >
                        Submit Details
                      </button>
                    </div>
                    <ValidationWalking
                      formErrorsMinutesWalking={
                        this.state.formErrorsMinutesWalking
                      }
                    />
                    <br />
                    <form>
                      <div className="form-group">
                        <label>
                          <strong>
                            Minutes Running:
                          </strong>
                          <input
                            type="text"
                            value={this.state.numberOfMinutesRunning}
                            name="getDist"
                            onChange={this.handleChangeRunningTimeBox}
                            className="form-control input-md"
                          />
                        </label>
                        <br />
                      </div>
                    </form>
                    <div id = "goalsContainer">
                      <button
                      
                        onClick={() =>
                          this.handleRunningActivityLevelLowClick()
                        }
                      >
                        {" "}
                        Low{" "}
                      </button>
                      <button
                      
                        onClick={() =>
                          this.handleRunningActivityLevelModerateClick()
                        }
                      >
                        {" "}
                        Moderate{" "}
                      </button>
                      <button
                      
                        onClick={() =>
                          this.handleRunningActivityLevelHighClick()
                        }
                      >
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
                            this.state.canMinutesRunningBeSubmitted
                          )
                        }
                        onClick={this.submitMinutesRunningClick}
                        type="button"
                        className="btn btn-primary"
                      >
                        Submit Details
                      </button>
                    </div>
                    <ValidationRunning
                      formErrorsMinutesRunning={
                        this.state.formErrorsMinutesRunning
                      }
                    />
                    <br />
                    <form>
                      <div className="form-group">
                        <label>
                          <strong>
                            Minutes Rowing:
                          </strong>
                          <input
                            type="text"
                            value={this.state.numberOfMinutesRowing}
                            name="getDist"
                            onChange={this.handleChangeRowingTimeBox}
                            className="form-control input-md"
                          />
                        </label>
                        <br />
                      </div>
                    </form>
                    <div id = "goalsContainer">
                      <button
                        onClick={() => this.handleRowingActivityLevelLowClick()}
                      >
                        {" "}
                        Low{" "}
                      </button>
                      <button
                        onClick={() =>
                          this.handleRowingActivityLevelModerateClick()
                        }
                      >
                        {" "}
                        Moderate{" "}
                      </button>
                      <button
                        onClick={() =>
                          this.handleRowingActivityLevelHighClick()
                        }
                      >
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
                            this.state.canMinutesRowingBeSubmitted
                          )
                        }
                        onClick={this.submitMinutesRowingClick}
                        type="button"
                        className="btn btn-primary"
                      >
                        Submit Details
                      </button>
                    </div>
                    <ValidationRowing
                      formErrorsMinutesRowing={
                        this.state.formErrorsMinutesRowing
                      }
                    />
                    <form>
                      <br />
                      <div className="form-group" id = "goalsContainer">
                        <label>
                          <strong>
                            Minutes Team Sport:
                          </strong>
                          <input
                            type="text"
                            value={this.state.numberOfMinutesTeamSport}
                            name="getDist"
                            onChange={this.handleChangeTeamSportTimeBox}
                            className="form-control input-md"
                          />
                        </label>
                        <br />
                      </div>
                    </form>
                    <div id="goalsContainer"><button
                      disabled={
                        !(
                          this.state.formValidMinutesTeamSport &&
                          this.state.canMinutesTeamSportBeSubmitted
                        )
                      }
                      onClick={this.submitMinutesTeamSportClick}
                      type="button"
                      className="btn btn-primary"
                    >
                      Submit Details
                    </button>
                    </div>
                    <ValidationTeamSport
                      formErrorsMinutesTeamSport={
                        this.state.formErrorsMinutesTeamSport
                      }
                    />
                    <form>
                      <br />
                      <div className="form-group">
                        <label>
                          <strong>
                            Minutes Weight Lifting:
                          </strong>
                          <input
                            type="text"
                            value={this.state.numberOfMinutesWeightLifting}
                            name="getDist"
                            onChange={this.handleChangeWeightLiftingTimeBox}
                            className="form-control input-md"
                          />
                        </label>
                        <br />
                      </div>
                    </form>
                    <div id="goalsContainer">
                        <button
                      disabled={
                        !(
                          this.state.formValidMinutesWeightLifting &&
                          this.state.canMinutesWeightLiftingBeSubmitted
                        )
                      }
                      onClick={this.submitMinutesWeightLiftingClick}
                      type="button"
                      className="btn btn-primary"
                    >
                      Submit Details
                    </button>
                    </div>
                    <ValidationWeightLifting
                      formErrorsMinutesWeightLifting={
                        this.state.formErrorsMinutesWeightLifting
                      }
                    />
                    <form>
                        <div id= "goalsContainer">
                      <br />
                      <b>Delete item: </b>
                      <input
                        type="text"
                        name="removeFood"
                        onChange={this.onDeleteFormChange}
                        className="form-control input-md"
                        
                      />
                      </div>
                    </form>
                    <div id="goalsContainer">
                    <button
                      disabled={!this.state.validActivity}
                      onClick={this.deleteActivityType}
                      type="button"
                      className="btn btn-primary"
                    >
                      Submit Details
                    </button>
                    </div>
                    </div>

                <div className="card text-white bg-success mb-3" id="goalsContainer" > 
                <div class="card-header bg-secondary mb-3" id="exerciseP">Your choices</div> 
                    {this.state.activityArray.map((b, index) => (
                      <option key={index}>
                        {this.state.activityArray[index][0] +
                          "; Activity Level: " +
                          this.state.activityArray[index][1] +
                          "; Minutes: " +
                          this.state.activityArray[index][2] +
                          "; Calories: " +
                          this.state.activityArray[index][3]}
                      </option>
                    ))}
                    <br />
                    Based on a recommended daily amount (RDA) of 2000 calories
                    without exercise, with your amount of daily exercise, your
                    RDA is {this.state.caloriesLeft} calories
                    <br />
                    <br />
                    </div>  
                  </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Profile;
