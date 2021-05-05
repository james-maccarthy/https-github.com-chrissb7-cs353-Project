import React, { Component } from "react";
import ValidationCycling from "./ValidationCycling";
import ValidationWalking from "./ValidationWalking";
import ValidationRunning from "./ValidationRunning";
import ValidationRowing from "./ValidationRowing";
import ValidationTeamSport from "./ValidationTeamSport";
import ValidationWeightLifting from "./ValidationWeightLifting";
import ValidationGrams from "./ValidationGrams";
import { basicFoodArray } from "./BasicFoodTypeJSON_Update";

// various imports, see corresponding .js files

class App extends Component {
  constructor(props) {
    super(props);

    // various state variables are declared
    this.state = {
      // default number of calories left,
      // presuming no exercise and no food
      // intake
      caloriesLeft: 2000,
      // starting value of calories consumed
      caloriesConsumed: 0,
      // 7 variables below are assigned a
      // numeric value upon various text
      // box submissions
      numberOfMinutesCycling: "",
      numberOfMinutesRunning: "",
      numberOfMinutesWalking: "",
      numberOfMinutesTeamSport: "",
      numberOfMinutesRowing: "",
      numberOfMinutesWeightLifting: "",
      numberOfGrams: 0,
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
      // next 3 as for cycling
      formErrorsGramsValid: { numberOfGrams: "" },
      gramsValid: false,
      formValidGrams: false,
      // next 7 boolean variables are true
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
      canNumberOfGramsBeSubmitted: false,
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
      activityArray: [],
      // foodArray is assigned to be the
      // imported basicFoodArray of 1700
      // foods
      foodArray: basicFoodArray,
      // boolean indicating if submission to
      // food choice text box is valid
      validFood: false,
      // boolean indicating if submission to
      // delete food text box is valid
      validFood2: false,
      // chosenFoods will hold details for
      // each food the user chooses
      chosenFoods: [],
      // takes the value of a chosen food's
      // weight in grams
      weightInGrams: 0,
      // takes the value of what the user
      // enters in food choice text box
      foodChoice: "",
      // takes the value of what the user
      // enters in delete food text box
      foodRemoveChoice: ""
    };

    // many functions need to be bound

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
    this.handleChangeWeightLiftingTimeBox = this.handleChangeWeightLiftingTimeBox.bind(
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
    this.submitMinutesWeightLiftingClick = this.submitMinutesWeightLiftingClick.bind(
      this
    );
    this.validateMinutesWeightLifting = this.validateMinutesWeightLifting.bind(
      this
    );

    this.onDeleteFormChange = this.onDeleteFormChange.bind(this);
    this.deleteActivityType = this.deleteActivityType.bind(this);
    this.onSearchFormChange = this.onSearchFormChange.bind(this);
    this.submitFoodType = this.submitFoodType.bind(this);
    this.handleGramTextBox = this.handleGramTextBox.bind(this);
    this.validateWeightInGramsbox = this.validateWeightInGramsbox.bind(this);
    this.onDeleteFormChange2 = this.onDeleteFormChange2.bind(this);
    this.deleteFoodType = this.deleteFoodType.bind(this);
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
  }

  handleCyclingActivityLevelModerateClick() {
    this.setState({ activityLevelCycling: 7 });
    this.setState({ isCyclingActivityLevelModerate: true });
    this.setState({ canMinutesCyclingBeSubmitted: true });
  }

  handleCyclingActivityLevelHighClick() {
    this.setState({ activityLevelCycling: 10 });
    this.setState({ isCyclingActivityLevelHigh: true });
    this.setState({ canMinutesCyclingBeSubmitted: true });
  }

  handleWalkingActivityLevelLowClick() {
    this.setState({ activityLevelWalking: 3 });
    this.setState({ isWalkingActivityLevelLow: true });
    this.setState({ canMinutesWalkingBeSubmitted: true });
  }

  handleWalkingActivityLevelModerateClick() {
    this.setState({ activityLevelWalking: 4.5 });
    this.setState({ isWalkingActivityLevelModerate: true });
    this.setState({ canMinutesWalkingBeSubmitted: true });
  }

  handleWalkingActivityLevelHighClick() {
    this.setState({ activityLevelWalking: 6 });
    this.setState({ isWalkingActivityLevelHigh: true });
    this.setState({ canMinutesWalkingBeSubmitted: true });
  }

  handleRunningActivityLevelLowClick() {
    this.setState({ activityLevelRunning: 7 });
    this.setState({ isRunningActivityLevelLow: true });
    this.setState({ canMinutesRunningBeSubmitted: true });
  }

  handleRunningActivityLevelModerateClick() {
    this.setState({ activityLevelRunning: 10 });
    this.setState({ isRunningActivityLevelModerate: true });
    this.setState({ canMinutesRunningBeSubmitted: true });
  }

  handleRunningActivityLevelHighClick() {
    this.setState({ activityLevelRunning: 15 });
    this.setState({ isRunningActivityLevelHigh: true });
    this.setState({ canMinutesRunningBeSubmitted: true });
  }

  handleRowingActivityLevelLowClick() {
    this.setState({ activityLevelRowing: 5 });
    this.setState({ isRowingActivityLevelLow: true });
    this.setState({ canMinutesRowingBeSubmitted: true });
  }

  handleRowingActivityLevelModerateClick() {
    this.setState({ activityLevelRowing: 7 });
    this.setState({ isRowingActivityLevelModerate: true });
    this.setState({ canMinutesRowingBeSubmitted: true });
  }

  handleRowingActivityLevelHighClick() {
    this.setState({ activityLevelRowing: 10 });
    this.setState({ isRowingActivityLevelHigh: true });
    this.setState({ canMinutesRowingBeSubmitted: true });
  }

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
  }

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
  }

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
  }

  // the next 3 functions handle the walking
  // form. They behave in the same way as
  // for the cycling form

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
  }

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
  }

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
  }

  // the next 3 functions handle the rowing
  // form. They behave in the same way as
  // for the cycling form

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
  }

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
  }

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
  }

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
  }

  // the next 3 functions handle the weight
  // lifting form. They behave in the same
  // way as for the team sport form

  handleChangeWeightLiftingTimeBox(event) {
    this.setState({ numberOfMinutesWeightLifting: event.target.value.trim() });
    this.setState({ canMinutesWeightLiftingBeSubmitted: true });
    this.validateMinutesWeightLifting(event.target.value.trim());
  }

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
  }

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
  }

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
  }

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
  }

  // handles input to food search text box
  onSearchFormChange(event) {
    // foodChoice is set to the input
    this.setState({ foodChoice: event.target.value });

    var i; // counter
    var foundIt = false; // once true, food is found
    var myArray = this.state.foodArray;
    // our basicFoodArray
    for (i = 0; i < myArray.length; i++) {
      // loops through myArray, if input equals
      // a food in myArray...
      if (
        event.target.value
          .toLowerCase()
          .localeCompare(myArray[i][0].toLowerCase()) === 0
      ) {
        foundIt = true; // food is found
        break; // stop search
      }
    }

    // after looping through, set validFood
    // true or false depending on whether
    // food has been found. Will be used
    // in render to help enable grams text
    // box, or keep it disabled
    if (foundIt === true) {
      this.setState({ validFood: true });
    } else {
      this.setState({ validFood: false });
    }
  }

  // handles input to gram text box
  // sets weightInGrams to be the input.
  // Sets a boolean to be true, which enables
  // submit details box for food form
  // PROVIDED input is valid, which is
  // verified by calling validateWeightInGrams
  // on the input. This validation function
  // is the next function and behaves
  // in the same way as for cycling, etc
  handleGramTextBox(event) {
    this.setState({ weightInGrams: event.target.value });
    this.setState({ isNumberOfGramsSubmitted: true });
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
    } else if (/^0+$/.test(grams) || /^-/.test(grams)) {
      localValid = false;
      localFormErrors.numberOfGrams = "Please enter a positive number";
    } else if (!/^\d+$/.test(grams)) {
      localValid = false;
      localFormErrors.numberOfGrams =
        "Decimals? Pretty precise! Please enter a positive whole number";
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

  // handles clicking submit details button
  // for food choice form. In the same way
  // as for onSearchFormChange above, it
  // loops through myArray (initially set
  //to foodArray) and checks if
  // the food is found. If it is found at
  // position i in myArray, the second
  // entry of position i is set to
  // weightInGrams, the third is set to
  // total calories, and foodChosen is a one
  // entry array containing an array with 4
  // values, the values of myArray for
  // position i.
  // Also, calories consumed is updated if
  // food is found.
  // And then foodChosen is added to the
  // chosenFoods array (to be rendered)
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

    // if submit details button is clicked,
    // an appropriate message is displayed
    let localFormErrors = this.state.formErrorsGramsValid;

    localFormErrors.numberOfGrams = "Thanks for your details";

    // boolean set to false to disable
    // submit details button
    this.setState({ isNumberOfGramsSubmitted: false });
  }

  // handles the input to the delete (food)
  // item text box.
  // Behaves in the same way as
  // onDeleteFormChange above
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

  // handles the deletion of a food upon
  // submission of food for deletion.
  // Behaves in the same way as
  // deleteActivityType above
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
        caloriesConsumed: this.state.caloriesConsumed - myArray[i][3]
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
      <div className="App">
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
                this.state.canMinutesCyclingBeSubmitted
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
                this.state.canMinutesWalkingBeSubmitted
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
                this.state.canMinutesRunningBeSubmitted
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
                this.state.canMinutesRowingBeSubmitted
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
          </div>
        </form>
        <button
          disabled={
            !(
              this.state.formValidMinutesTeamSport &&
              this.state.canMinutesTeamSportBeSubmitted
            )
          }
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
          <div className="form-group">
            <label>
              <strong className="text-success mb-2">
                Minutes Weight Lifting:
              </strong>
              <input
                type="text"
                value={this.state.numberOfMinutesWeightLifting}
                name="getDist"
                onChange={this.handleChangeWeightLiftingTimeBox}
              />
            </label>
            <br />
          </div>
        </form>
        <button
          disabled={
            !(
              this.state.formValidMinutesWeightLifting &&
              this.state.canMinutesWeightLiftingBeSubmitted
            )
          }
          onClick={this.submitMinutesWeightLiftingClick}
          type="button"
          className="btn btn-warning btn-lg"
        >
          Submit Details
        </button>
        <ValidationWeightLifting
          formErrorsMinutesWeightLifting={
            this.state.formErrorsMinutesWeightLifting
          }
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
              this.state.activityArray[index][2] +
              "; Calories: " +
              this.state.activityArray[index][3]}
          </option>
        ))}
        <br />
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
          disabled={
            !(
              this.state.validFood &&
              this.state.gramsValid &&
              this.state.isNumberOfGramsSubmitted
            )
          }
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
            {Math.round(this.state.caloriesConsumed - this.state.caloriesLeft)}{" "}
            calories
          </p>
        )}
        {this.state.caloriesLeft >= this.state.caloriesConsumed && (
          <p>
            You can eat{" "}
            {this.state.caloriesLeft - Math.round(this.state.caloriesConsumed)}{" "}
            more calories to achieve your recommended daily calorie intake.
          </p>
        )}
      </div>
    );
  }
}
export default App;