import React, { Component, Fragment } from 'react';
import Filter from './Filter/Filter';
import Header from '../Header/Header'
import { Link } from 'react-router-dom';
import CusineFilter from './Filter/CusineFilter'
import CostFilter from './Filter/CostFilter'
import SortFilter from './Filter/SortFilter'
import List from './List/List';
import './MainBody.css';
import './Filter/Filter.css';
import axios from 'axios';
const url = "https://edu-zomatoapp.herokuapp.com/filter";
class MainBody extends Component {


    constructor(props) {
        super(props);

        this.state = {
            restList: '',
            breadCrumbds: ''
        }
    }
    setDataPerFilter = (data) => {
        this.setState({ restList: data })
    }

    render() {
        return (
            <Fragment >
                <Header />
                <div className="container">
                    <div>
                        <Link to='/'><span class="bdcrm">Home</span></Link>
                        <span class=" bdcrm">/</span>
                        <span class="bdcrm">{this.state.breadCrumbds}</span>

                    </div>
                    <div>
                        <h3>Quick Search Results</h3>
                    </div>
                    <div className="page_content">
                        {/* <Filter /> */}
                        <div className="filter">
                            <div className="filter_elements">
                                <div className="filter_heading">
                                    <span className="filter_span">Filter</span>
                                </div>
                                <div className="filter_search">
                                    <CusineFilter meal_Id={this.props.match.params.mealTypeId}
                                        restPerCuisine={(data) => { this.setDataPerFilter(data) }} />
                                    <CostFilter meal_Id={this.props.match.params.mealTypeId}
                                        restPerCost={(data) => { this.setDataPerFilter(data) }} />
                                    <SortFilter meal_Id={this.props.match.params.mealTypeId}
                                        restPerSort={(data) => { this.setDataPerFilter(data) }} />
                                </div>
                            </div>
                        </div>
                        <List restData={this.state.restList} />
                    </div>
                </div>
            </Fragment>
        )
    }
    componentDidMount() {
        const mealId = this.props.match.params.mealTypeId;
        axios.get(`${url}/${mealId}`)
            .then((res) => {
                console.log(res.data, 'res')
                this.setState({ restList: res.data })
                this.setState({ breadCrumbds: sessionStorage.getItem('setMealName') })
            })
    }
}
export default MainBody;