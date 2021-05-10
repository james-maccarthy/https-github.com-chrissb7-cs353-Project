import React, { Component } from "react";
//import $ from "jquery";
import ValidationGrams from "./ValidationGrams";
import { basicFoodArray } from "../../jsonData/BasicFoodTypeJSON_Update";
import foodSelected from "../../jsonData/localData.json";
import firebase from "firebase/app";
import $ from "jquery";
// various imports, see corresponding .js files
//comment
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
      numberOfGrams: 0,
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
      canNumberOfGramsBeSubmitted: false,
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

    this.onSearchFormChange = this.onSearchFormChange.bind(this);
    this.submitFoodType = this.submitFoodType.bind(this);
    this.handleGramTextBox = this.handleGramTextBox.bind(this);
    this.validateWeightInGramsbox = this.validateWeightInGramsbox.bind(this);
    this.onDeleteFormChange2 = this.onDeleteFormChange2.bind(this);
    this.deleteFoodType = this.deleteFoodType.bind(this);
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
        var calorie = Math.round(myArray[i][3]);
        foodChosen = [
          [myArray[i][0], myArray[i][1], myArray[i][2], myArray[i][3]]
        ];
        //console.log(caloriesConsumed);

        this.setState({
          caloriesConsumed: this.state.caloriesConsumed + myArray[i][3]
        });

        var uid = firebase.auth().currentUser.uid;
        var name = this.state.foodChoice;
        var day = $("select[name='day']").val();
        var mealTime = "Snack";
        var gram = this.state.weightInGrams;

        foodSelected.push({
          uid: uid,
          day: day,
          mealTime: mealTime,
          meal: { name: name, calorie: calorie, gram: gram }
        });
        console.log("food is " + name);
        console.log("uid is " + uid);
        console.log("cal is " + calorie);
        //{uid:"PtnCdE1n9SYEbVxfhNS1dn7QIbD3",day:"Monday",mealTime:"Snack",meal:{name:"some name",calorie:"500",gram:"serving"}}
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

  render = () => {
    return (
      <div className="App">
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
        <br />
        <label>
          Choose a day:
          <select name="day">
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </label>
        <br />
        <br />
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
  };
}
export default App;
