import React, { Component } from "react";
//  Validation Component has a very simple job.
// Simply print an error message, if we get one.
class ValidationTeamSport extends Component {
  render() {
    // Obtain the formErrors from props
    // and return the error it contains.
    const formErrorsLocal = this.props.formErrorsMinutesTeamSport;
    return (
      <div className="container-fluid">
        <div className="alert alert-warning">
          <strong>{formErrorsLocal.numberOfMinutesTeamSport}</strong>
        </div>
      </div>
    ); // end of return
  } // end of render()
} // end of Validation class
export default ValidationTeamSport;
