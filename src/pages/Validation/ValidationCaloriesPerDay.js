import React, { Component } from "react";
//  Validation Component has a very simple job.
// Simply print an error message, if we get one.
class ValidationCaloriesPerDay extends Component {
  render() {
    // Obtain the formErrors from props
    // and return the error it contains.
    const formErrorsLocal = this.props.formErrorsCaloriesPerDay;
    return (
      <div className="container-fluid" id="goalsContainer">
        <div className="alert alert-warning">
          <strong>{formErrorsLocal.caloriesPerDay}</strong>
        </div>
      </div>
    ); // end of return
  } // end of render()
} // end of Validation class
export default ValidationCaloriesPerDay;
//COR
