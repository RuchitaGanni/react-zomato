import React, { Component, Fragment } from 'react';
import axios from 'axios';
const filterUrl="https://edu-zomatoapp.herokuapp.com/filter"
class CusineFilter extends Component {
    
    cuisineFilter = (event) => {
        let mealId = this.props.meal_Id;
        let cuisineId = event.target.value;
        let finalUrl;
        if(cuisineId === ""){
            finalUrl = `${filterUrl}/${mealId}`
        }else{
            finalUrl = `${filterUrl}/${mealId}?cuisine=${cuisineId}`
        }
        console.log(finalUrl)
        axios.get(finalUrl)
        .then((res) => { console.log(res.data)
            this.props.restPerCuisine(res.data)})
    }
    
    render() {
        return (
            <Fragment>
                <div className="filtersSections2">

                    <span className="filter_cusines">CUSINES </span>

                    <div className="filter_checkbox" onChange={this.cuisineFilter}>
                        {/* <div>
                            <input type="checkbox" value="South" /><label>South Indian</div>
                        </div>
                        <div>
                            <input type="checkbox" value="Chineese" /><label>Chineese</div>
                        </div>
                        <div>
                            <input type="checkbox" value="Mexican" /><label>Chineese</div>
                        </div> */}
                        <div>
                            <input type="radio" name="cuisine" value="" /><label>All</label>
                        </div>
                        <div>
                            <input type="radio" name="cuisine" value="1" /><label>North Indian</label>
                        </div>
                        <div>
                            <input type="radio" name="cuisine" value="2" /><label>South Indian</label>
                        </div>
                        <div>
                            <input type="radio" name="cuisine" value="3" /><label>Chinese</label>
                        </div>
                        <div>
                            <input type="radio" name="cuisine" value="4" /><label>Fast Food</label>
                        </div>
                        <div>
                            <input type="radio" name="cuisine" value="5" /><label>Street Food</label>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default CusineFilter;