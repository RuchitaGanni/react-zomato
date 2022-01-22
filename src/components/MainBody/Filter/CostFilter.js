import React, { Component, Fragment } from 'react';
import axios from 'axios';
const filterUrl="https://edu-zomatoapp.herokuapp.com/filter"
class CostFilter extends Component {
    costFilter=(event)=>{
        console.log('ev',event.target.value);
        let mealId = this.props.meal_Id;
        let costId=(event.target.value).split('-');
        let lcost = costId[0];
        let hcost = costId[1]
        let finalUrl;
        if(event.target.value === ""){
            finalUrl = `${filterUrl}/${mealId}`
        }else{
            finalUrl = `${filterUrl}/${mealId}?lcost=${lcost}&hcost=${hcost}`
        }
        axios.get(finalUrl)
        .then((res) => {this.props.restPerCost(res.data)})
    }
    render() {
        return (
            <Fragment>
                <div className="filtersSections3">

                    <span className="filter_persons">Cost Filter</span>

                    <div className="filter_checkbox" onChange={this.costFilter}>
                        <div>
                            <input type="radio" name="cuisine" value="100-300" /><label>100-300</label>
                        </div>
                        <div>
                            <input type="radio" name="cuisine" value="301-500" /><label>301-500</label>
                        </div>
                        <div>
                            <input type="radio" name="cuisine" value="501-700" /><label>501-700</label>
                        </div>
                        <div>
                            <input type="radio" name="cuisine" value="701-1500" /><label>701-1500</label>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default CostFilter;