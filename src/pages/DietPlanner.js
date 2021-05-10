import React, { Component } from "react";
// import components

// import stylesheets
import arrow from "../img/arrow.png";
import defaultPhoto from "../img/photo.jpg";
import "./DietPlanner.css";
import userSelected from "../jsonData/localData.json";
//import localData2 from "../jsonData/localData2.json";
import $ from "jquery";
import firebase from "firebase/app";

class DietPlanner extends Component {
  constructor(props) {
    super(props);
    // set two state variable to handle user current page and sidebar toggle
    this.state = {
      menuStatus: [false, false, false, false, false, false, false],
      tabStatus: [true, false, false, false]
    };
  }

  menuClick(index) {
    if (index === 0) {
      this.renderMeals("Monday");
    } else if (index === 1) {
      this.renderMeals("Tuesday");
    } else if (index === 2) {
      this.renderMeals("Wednesday");
    } else if (index === 3) {
      this.renderMeals("Thursday");
    } else if (index === 4) {
      this.renderMeals("Friday");
    } else if (index === 5) {
      this.renderMeals("Saturday");
    } else if (index === 6) {
      this.renderMeals("Sunday");
    }
    let newMenuStatus = [false, false, false, false, false, false, false];
    newMenuStatus[index] = !this.state.menuStatus[index];
    this.setState({ menuStatus: newMenuStatus });
  }

  tabClick(index) {
    let newTabStatus = [false, false, false, false];
    newTabStatus[index] = true;
    this.setState({ tabStatus: newTabStatus });
  }

  renderMeals(day) {
    let breakfastHtml = "";
    let lunchHtml = "";
    let dinnerHtml = "";
    let snackHtml = "";
    let breakfastTab = $("table[name='" + day + "'] tbody")
      .find("div")
      .eq(0);
    let lunchTab = $("table[name='" + day + "'] tbody")
      .find("div")
      .eq(1);
    let dinnerTab = $("table[name='" + day + "'] tbody")
      .find("div")
      .eq(2);
    let snackTab = $("table[name='" + day + "'] tbody")
      .find("div")
      .eq(3);
    var uid = firebase.auth().currentUser.uid;
    for (let i = 0; i < userSelected.length; i++) {
      if (userSelected[i].uid === uid && userSelected[i].day === day) {
        let food =
          "<div class='food'><p>" +
          userSelected[i].meal.name +
          "</p>" +
          "<p><span class='calorie'>" +
          userSelected[i].meal.calorie +
          "</span>kcal " +
          "<span class='gram'>" +
          userSelected[i].meal.gram +
          "</span></p></div>";
        if (userSelected[i].mealTime === "Breakfast") {
          breakfastHtml += food;
        } else if (userSelected[i].mealTime === "Lunch") {
          lunchHtml += food;
        } else if (userSelected[i].mealTime === "Dinner") {
          dinnerHtml += food;
        } else if (userSelected[i].mealTime === "Snack") {
          snackHtml += food;
        }
      }
    }
    let breakfastHeight = 0;
    let lunchHeight = 0;
    let dinnerHeight = 0;
    let snackHeight = 0;
    if (breakfastHtml !== "") {
      breakfastTab.html(breakfastHtml);
      breakfastHeight = 10 + breakfastTab.children().length * 6.3;
    }
    if (lunchHtml !== "") {
      lunchTab.html(lunchHtml);
      lunchHeight = 10 + lunchTab.children().length * 6.3;
    }
    if (dinnerHtml !== "") {
      dinnerTab.html(dinnerHtml);
      dinnerHeight = 10 + dinnerTab.children().length * 6.3;
    }
    if (snackHtml !== "") {
      snackTab.html(snackHtml);
      snackHeight = 10 + snackTab.children().length * 6.3;
    }
    let h = 30;
    if (breakfastHeight > h) {
      h = breakfastHeight;
    }
    if (lunchHeight > h) {
      h = lunchHeight;
    }
    if (dinnerHeight > h) {
      h = dinnerHeight;
    }
    if (snackHeight > h) {
      h = snackHeight;
    }
    $(":root").css("--box-height", h + "vh");
  }

  render() {
    return (
      <div>
        {console.log(userSelected)}
        <div className="daySelector" onClick={this.menuClick.bind(this, 0)}>
          <p className="days">Monday</p>
          <img
            src={arrow}
            className={this.state.menuStatus[0] ? "arrow-active" : "arrow"}
            alt=""
          />
        </div>
        <div className={this.state.menuStatus[0] ? "boxes-active" : "boxes"}>
          <table className="tabs" name="Monday">
            <thead>
              <tr>
                <td>
                  <div
                    className={this.state.tabStatus[0] ? "tabOn" : ""}
                    onClick={this.tabClick.bind(this, 0)}
                  >
                    Breakfast
                  </div>
                </td>
                <td>
                  <div
                    className={this.state.tabStatus[1] ? "tabOn" : ""}
                    onClick={this.tabClick.bind(this, 1)}
                  >
                    Lunch
                  </div>
                </td>
                <td>
                  <div
                    className={this.state.tabStatus[2] ? "tabOn" : ""}
                    onClick={this.tabClick.bind(this, 2)}
                  >
                    Dinner
                  </div>
                </td>
                <td>
                  <div
                    className={this.state.tabStatus[3] ? "tabOn" : ""}
                    onClick={this.tabClick.bind(this, 3)}
                  >
                    Snack
                  </div>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="4">
                  <div className={this.state.tabStatus[0] ? "tabDiv" : "hide"}>
                    Nothing Selected!
                  </div>
                  <div className={this.state.tabStatus[1] ? "tabDiv" : "hide"}>
                    Nothing Selected!
                  </div>
                  <div className={this.state.tabStatus[2] ? "tabDiv" : "hide"}>
                    Nothing Selected!
                  </div>
                  <div className={this.state.tabStatus[3] ? "tabDiv" : "hide"}>
                    Nothing Selected!
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="daySelector" onClick={this.menuClick.bind(this, 1)}>
          <p className="days">Tuesday</p>
          <img
            src={arrow}
            className={this.state.menuStatus[1] ? "arrow-active" : "arrow"}
            alt=""
          />
        </div>
        <div className={this.state.menuStatus[1] ? "boxes-active" : "boxes"}>
          <table className="tabs" name="Tuesday">
            <thead>
              <tr>
                <td>
                  <div
                    className={this.state.tabStatus[0] ? "tabOn" : ""}
                    onClick={this.tabClick.bind(this, 0)}
                  >
                    Breakfast
                  </div>
                </td>
                <td>
                  <div
                    className={this.state.tabStatus[1] ? "tabOn" : ""}
                    onClick={this.tabClick.bind(this, 1)}
                  >
                    Lunch
                  </div>
                </td>
                <td>
                  <div
                    className={this.state.tabStatus[2] ? "tabOn" : ""}
                    onClick={this.tabClick.bind(this, 2)}
                  >
                    Dinner
                  </div>
                </td>
                <td>
                  <div
                    className={this.state.tabStatus[3] ? "tabOn" : ""}
                    onClick={this.tabClick.bind(this, 3)}
                  >
                    Snack
                  </div>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="4">
                  <div className={this.state.tabStatus[0] ? "tabDiv" : "hide"}>
                    Nothing Selected!
                  </div>
                  <div className={this.state.tabStatus[1] ? "tabDiv" : "hide"}>
                    Nothing Selected!
                  </div>
                  <div className={this.state.tabStatus[2] ? "tabDiv" : "hide"}>
                    Nothing Selected!
                  </div>
                  <div className={this.state.tabStatus[3] ? "tabDiv" : "hide"}>
                    Nothing Selected!
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="daySelector" onClick={this.menuClick.bind(this, 2)}>
          <p className="days">Wednesday</p>
          <img
            src={arrow}
            className={this.state.menuStatus[2] ? "arrow-active" : "arrow"}
            alt=""
          />
        </div>
        <div className={this.state.menuStatus[2] ? "boxes-active" : "boxes"}>
          <table className="tabs" name="Wednesday">
            <thead>
              <tr>
                <td>
                  <div
                    className={this.state.tabStatus[0] ? "tabOn" : ""}
                    onClick={this.tabClick.bind(this, 0)}
                  >
                    Breakfast
                  </div>
                </td>
                <td>
                  <div
                    className={this.state.tabStatus[1] ? "tabOn" : ""}
                    onClick={this.tabClick.bind(this, 1)}
                  >
                    Lunch
                  </div>
                </td>
                <td>
                  <div
                    className={this.state.tabStatus[2] ? "tabOn" : ""}
                    onClick={this.tabClick.bind(this, 2)}
                  >
                    Dinner
                  </div>
                </td>
                <td>
                  <div
                    className={this.state.tabStatus[3] ? "tabOn" : ""}
                    onClick={this.tabClick.bind(this, 3)}
                  >
                    Snack
                  </div>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="4">
                  <div className={this.state.tabStatus[0] ? "tabDiv" : "hide"}>
                    Nothing Selected!
                  </div>
                  <div className={this.state.tabStatus[1] ? "tabDiv" : "hide"}>
                    Nothing Selected!
                  </div>
                  <div className={this.state.tabStatus[2] ? "tabDiv" : "hide"}>
                    Nothing Selected!
                  </div>
                  <div className={this.state.tabStatus[3] ? "tabDiv" : "hide"}>
                    Nothing Selected!
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="daySelector" onClick={this.menuClick.bind(this, 3)}>
          <p className="days">Thursday</p>
          <img
            src={arrow}
            className={this.state.menuStatus[3] ? "arrow-active" : "arrow"}
            alt=""
          />
        </div>
        <div className={this.state.menuStatus[3] ? "boxes-active" : "boxes"}>
          <table className="tabs" name="Thursday">
            <thead>
              <tr>
                <td>
                  <div
                    className={this.state.tabStatus[0] ? "tabOn" : ""}
                    onClick={this.tabClick.bind(this, 0)}
                  >
                    Breakfast
                  </div>
                </td>
                <td>
                  <div
                    className={this.state.tabStatus[1] ? "tabOn" : ""}
                    onClick={this.tabClick.bind(this, 1)}
                  >
                    Lunch
                  </div>
                </td>
                <td>
                  <div
                    className={this.state.tabStatus[2] ? "tabOn" : ""}
                    onClick={this.tabClick.bind(this, 2)}
                  >
                    Dinner
                  </div>
                </td>
                <td>
                  <div
                    className={this.state.tabStatus[3] ? "tabOn" : ""}
                    onClick={this.tabClick.bind(this, 3)}
                  >
                    Snack
                  </div>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="4">
                  <div className={this.state.tabStatus[0] ? "tabDiv" : "hide"}>
                    Nothing Selected!
                  </div>
                  <div className={this.state.tabStatus[1] ? "tabDiv" : "hide"}>
                    Nothing Selected!
                  </div>
                  <div className={this.state.tabStatus[2] ? "tabDiv" : "hide"}>
                    Nothing Selected!
                  </div>
                  <div className={this.state.tabStatus[3] ? "tabDiv" : "hide"}>
                    Nothing Selected!
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="daySelector" onClick={this.menuClick.bind(this, 4)}>
          <p className="days">Friday</p>
          <img
            src={arrow}
            className={this.state.menuStatus[4] ? "arrow-active" : "arrow"}
            alt=""
          />
        </div>
        <div className={this.state.menuStatus[4] ? "boxes-active" : "boxes"}>
          <table className="tabs" name="Friday">
            <thead>
              <tr>
                <td>
                  <div
                    className={this.state.tabStatus[0] ? "tabOn" : ""}
                    onClick={this.tabClick.bind(this, 0)}
                  >
                    Breakfast
                  </div>
                </td>
                <td>
                  <div
                    className={this.state.tabStatus[1] ? "tabOn" : ""}
                    onClick={this.tabClick.bind(this, 1)}
                  >
                    Lunch
                  </div>
                </td>
                <td>
                  <div
                    className={this.state.tabStatus[2] ? "tabOn" : ""}
                    onClick={this.tabClick.bind(this, 2)}
                  >
                    Dinner
                  </div>
                </td>
                <td>
                  <div
                    className={this.state.tabStatus[3] ? "tabOn" : ""}
                    onClick={this.tabClick.bind(this, 3)}
                  >
                    Snack
                  </div>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="4">
                  <div className={this.state.tabStatus[0] ? "tabDiv" : "hide"}>
                    Nothing Selected!
                  </div>
                  <div className={this.state.tabStatus[1] ? "tabDiv" : "hide"}>
                    Nothing Selected!
                  </div>
                  <div className={this.state.tabStatus[2] ? "tabDiv" : "hide"}>
                    Nothing Selected!
                  </div>
                  <div className={this.state.tabStatus[3] ? "tabDiv" : "hide"}>
                    Nothing Selected!
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="daySelector" onClick={this.menuClick.bind(this, 5)}>
          <p className="days">Saturday</p>
          <img
            src={arrow}
            className={this.state.menuStatus[5] ? "arrow-active" : "arrow"}
            alt=""
          />
        </div>
        <div className={this.state.menuStatus[5] ? "boxes-active" : "boxes"}>
          <table className="tabs" name="Saturday">
            <thead>
              <tr>
                <td>
                  <div
                    className={this.state.tabStatus[0] ? "tabOn" : ""}
                    onClick={this.tabClick.bind(this, 0)}
                  >
                    Breakfast
                  </div>
                </td>
                <td>
                  <div
                    className={this.state.tabStatus[1] ? "tabOn" : ""}
                    onClick={this.tabClick.bind(this, 1)}
                  >
                    Lunch
                  </div>
                </td>
                <td>
                  <div
                    className={this.state.tabStatus[2] ? "tabOn" : ""}
                    onClick={this.tabClick.bind(this, 2)}
                  >
                    Dinner
                  </div>
                </td>
                <td>
                  <div
                    className={this.state.tabStatus[3] ? "tabOn" : ""}
                    onClick={this.tabClick.bind(this, 3)}
                  >
                    Snack
                  </div>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="4">
                  <div className={this.state.tabStatus[0] ? "tabDiv" : "hide"}>
                    Nothing Selected!
                  </div>
                  <div className={this.state.tabStatus[1] ? "tabDiv" : "hide"}>
                    Nothing Selected!
                  </div>
                  <div className={this.state.tabStatus[2] ? "tabDiv" : "hide"}>
                    Nothing Selected!
                  </div>
                  <div className={this.state.tabStatus[3] ? "tabDiv" : "hide"}>
                    Nothing Selected!
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="daySelector" onClick={this.menuClick.bind(this, 6)}>
          <p className="days">Sunday</p>
          <img
            src={arrow}
            className={this.state.menuStatus[6] ? "arrow-active" : "arrow"}
            alt=""
          />
        </div>
        <div className={this.state.menuStatus[6] ? "boxes-active" : "boxes"}>
          <table className="tabs" name="Sunday">
            <thead>
              <tr>
                <td>
                  <div
                    className={this.state.tabStatus[0] ? "tabOn" : ""}
                    onClick={this.tabClick.bind(this, 0)}
                  >
                    Breakfast
                  </div>
                </td>
                <td>
                  <div
                    className={this.state.tabStatus[1] ? "tabOn" : ""}
                    onClick={this.tabClick.bind(this, 1)}
                  >
                    Lunch
                  </div>
                </td>
                <td>
                  <div
                    className={this.state.tabStatus[2] ? "tabOn" : ""}
                    onClick={this.tabClick.bind(this, 2)}
                  >
                    Dinner
                  </div>
                </td>
                <td>
                  <div
                    className={this.state.tabStatus[3] ? "tabOn" : ""}
                    onClick={this.tabClick.bind(this, 3)}
                  >
                    Snack
                  </div>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="4">
                  <div className={this.state.tabStatus[0] ? "tabDiv" : "hide"}>
                    Nothing Selected!
                  </div>
                  <div className={this.state.tabStatus[1] ? "tabDiv" : "hide"}>
                    Nothing Selected!
                  </div>
                  <div className={this.state.tabStatus[2] ? "tabDiv" : "hide"}>
                    Nothing Selected!
                  </div>
                  <div className={this.state.tabStatus[3] ? "tabDiv" : "hide"}>
                    Nothing Selected!
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="profile" onClick={this.props.setPage.bind(this, 0)}>
          <img src={defaultPhoto} className="photo" alt="" />
          <p className="name">Profile</p>
        </div>
      </div>
    );
  }
}

export default DietPlanner;
