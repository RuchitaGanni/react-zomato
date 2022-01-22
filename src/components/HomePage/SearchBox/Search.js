import React, { Component, Fragment } from 'react';
import './Search.css';
import { withRouter } from 'react-router-dom';
const LocationsUrl = 'https://edu-zomatoapp.herokuapp.com/locations';
const restaurantsUrl = 'https://edu-zomatoapp.herokuapp.com/restaurants?city='
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: '',
            restaurants: ''
        }
    }
    // load city from API
    renderCity = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option key={item.location_id} value={item.state_id}>
                        {item.location_name}
                    </option>
                )
            })
        }
    }

    renderRestaurants = (data) => {

        if (data) {
            return data.map((item) => {
                return (
                    <option key={item.restaurant_name} value={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        }
    }
    handleRest = (event) => {

        fetch(`${restaurantsUrl}${event.target.value}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ restaurants: data })
            })
    }
    // on restaurant select load details page
    gotoRestPage = (event) => {
        if (sessionStorage.getItem('restName')== null) {
            sessionStorage.setItem('hideMealType', 1);
        }
    this.props.history.push(`/menu/${event.target.value}`)

    }
    render() {
        return (
            <Fragment>
                <div className="row" id="selectBox">
                    <div
                        className=" col-xs-4 col-sm-4 col-md-3 col-lg-3 ">

                        <select class="form-control" onChange={this.handleRest}>
                            <option>Select City</option>
                            {this.renderCity(this.state.locations)}
                        </select>

                    </div>
                    <div
                        className=" col-xs-5 col-sm-5 col-md-4 col-lg-4">
                        <select class="form-control" onChange={this.gotoRestPage}>
                            <option>Select Restaurants</option>
                            {this.renderRestaurants(this.state.restaurants)}
                        </select>
                    </div>
                </div>
            </Fragment >
        )
    }
    //on page load call api method  
    componentDidMount() {

        fetch(LocationsUrl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ locations: data })
            })
    }

}

export default withRouter(Search)