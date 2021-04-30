import React, {Component} from "react";
import "./Menu.css";
import arrow from "../img/arrow.png";
import meals from "../jsonData/FoodMenu.json";
import $ from "jquery";

class Menu extends Component {
    constructor(props) {
        super(props);
        // set two state variable to handle user current page and sidebar toggle
        this.state = {
            menuStatus: [false, false, false, false, false, false, false],
            mealSelected: null
        };
        $("body").click(function () {
            $("#daySelector").hide();
        });
    }

    menuClick(index) {
        let newMenuStatus = [false, false, false, false, false, false, false];
        newMenuStatus[index] = !this.state.menuStatus[index];
        this.setState({menuStatus: newMenuStatus});
    }

    renderMeals(cuisineName) {
        var cuisine = meals[cuisineName];
        var h = (cuisine.Breakfast.length + cuisine.Lunch.length + cuisine.Dinner.length) * 8.3 + 3 * 4;
        $(":root").css("--box-height", h + "vh");
        return (<div>
            <div className="mealTime"><strong>Breakfast</strong></div>
            {cuisine.Breakfast.map((meal, index) => {
                return <div key={index} className="meal">
                    <p>{meal.name}</p>
                    <p>-{meal.calorie} {meal.gram}</p>
                    <button type="button" onClick={this.addButtonClick.bind(this)}>+</button>
                </div>
            })}
            <div className="mealTime"><strong>Lunch</strong></div>
            {cuisine.Lunch.map((meal, index) => {
                return <div key={index} className="meal">
                    <p>{meal.name}</p>
                    <p>-{meal.calorie} {meal.gram}</p>
                    <button type="button" onClick={this.addButtonClick.bind(this)}>+</button>
                </div>
            })}
            <div className="mealTime"><strong>Dinner</strong></div>
            {cuisine.Dinner.map((meal, index) => {
                return <div key={index} className="meal">
                    <p>{meal.name}</p>
                    <p>-{meal.calorie} {meal.gram}</p>
                    <button type="button" onClick={this.addButtonClick.bind(this)}>+</button>
                </div>
            })}
        </div>);
    }

    addButtonClick(event) {
        event.stopPropagation();
        this.setState({mealSelected: $(event.target).parent().find("p").text()});
        $("#daySelector").css({
            "top": event.target.offsetTop - 1 - event.target.offsetHeight / 2 + "px",
            "left": event.target.offsetLeft + event.target.offsetWidth + "px"
        }).show();
    }

    mealSelector(event) {
        var day = $(event.target).text();
        var meal = this.state.mealSelected;
        console.log(meal + " add into " + day);
    }

    render() {
        return (
            <div>
                <div className="menus" onClick={this.menuClick.bind(this, 0)}>
                    <p className="cuisine">Europe</p>
                    <img src={arrow} className={this.state.menuStatus[0] ? "arrow-active" : "arrow"} alt=""/>
                </div>
                <div className={this.state.menuStatus[0] ? "boxes-active" : "boxes"}>
                    {this.renderMeals("Europe")}
                </div>
                <div className="menus" onClick={this.menuClick.bind(this, 1)}>
                    <p className="cuisine">North America</p>
                    <img src={arrow} className={this.state.menuStatus[1] ? "arrow-active" : "arrow"} alt=""/>
                </div>
                <div className={this.state.menuStatus[1] ? "boxes-active" : "boxes"}>
                    {this.renderMeals("North America")}
                </div>
                <div className="menus" onClick={this.menuClick.bind(this, 2)}>
                    <p className="cuisine">Asia</p>
                    <img src={arrow} className={this.state.menuStatus[2] ? "arrow-active" : "arrow"} alt=""/>
                </div>
                <div className={this.state.menuStatus[2] ? "boxes-active" : "boxes"}>
                    {this.renderMeals("Asia")}
                </div>
                <div id="daySelector">
                    <div onClick={this.mealSelector.bind(this)}>Monday</div>
                    <div onClick={this.mealSelector.bind(this)}>Tuesday</div>
                    <div onClick={this.mealSelector.bind(this)}>Wednesday</div>
                    <div onClick={this.mealSelector.bind(this)}>Thursday</div>
                    <div onClick={this.mealSelector.bind(this)}>Friday</div>
                    <div onClick={this.mealSelector.bind(this)}>Saturday</div>
                    <div onClick={this.mealSelector.bind(this)}>Sunday</div>
                </div>

                <div id="counter">
                    <p>Open Calories Counter</p>
                </div>

            </div>
        );
    }
}

export default Menu;
