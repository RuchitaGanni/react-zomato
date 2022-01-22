import React, { Component, Fragment } from 'react';
import axios from 'axios';
const filterUrl="https://edu-zomatoapp.herokuapp.com/filter"
class SortFilter extends Component {
    sortFilter=(event)=>{
        console.log('sort value',event.target.value);
        let mealId = this.props.meal_Id;
        let sortVal=(event.target.value);
        let finalUrl;
        if(event.target.value === ""){
            finalUrl = `${filterUrl}/${mealId}`
        }else{
            finalUrl = `${filterUrl}/${mealId}?sortKey=${sortVal}`
        }
        axios.get(finalUrl)
        .then((res) => {this.props.restPerSort(res.data)})
    }
    render() {
        return (
            <Fragment>
                <div className="filtersSections4">

                    <span className="filter_persons">Sort </span>

                    <div className="filter_checkbox" onChange={this.sortFilter}>
                        <div>
                            <input type="radio" name="cuisine" value="1" /><label>Pice low to high</label>
                        </div>
                        <div>
                            <input type="radio" name="cuisine" value="-1" /><label>Price high to low</label>
                        </div>

                    </div>
                </div>
            </Fragment>
        )
    }
}
export default SortFilter