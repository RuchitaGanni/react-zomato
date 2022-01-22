import React, { Component, Fragment } from 'react';
import CusineFilter from './CusineFilter'
import CostFilter from './CostFilter'
import SortFilter from './SortFilter'
import './Filter.css';
class Filter extends Component {
    render() {
        return (
            <Fragment >
                <div className="filter">
                    <div className="filter_elements">
                        <div className="filter_heading">
                            <span className="filter_span">Filter</span>
                        </div>
                        <div className="filter_search">
                            {/* <div className="filtersSections1">

                                <span className="filter_search_title">Search Locations</span>



                                <select className="filter_search_box">
                                    <option>Select Location</option>
                                    <option>Hyderabad</option>
                                    <option>Chennai</option>
                                    <option>Kolkata</option>
                                </select>

                            </div> */}
                            <CusineFilter />
                            <CostFilter />
                            <SortFilter />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Filter;