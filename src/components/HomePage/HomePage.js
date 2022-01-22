import React, { Component, Fragment } from 'react';
import Header from '../Header/Header'
import Search from './SearchBox/Search'
import Quick from './QuickSearch/Quick'
import './HomePage.css';

const HomePage = () => {
    return (
        <Fragment>
            <Header />
            <div className="container">

                <div className="jumbotron" style={{ backgroundImage: "url('assests/food-wallpaper.png')" }}>
                    <div className="container" id="jumbo_clascs">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-md-push-5 col-xs-push-4" id="logoHome">
                                <div id="logoHomeDiv">
                                    <span id="onee">e!</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">

                            <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-6 col-md-push-3 col-xs-push-2">
                                <h2 className="box-header"><strong>Find restaurants to eat</strong></h2>
                            </div>
                        </div>
                        <Search />

                    </div>
                </div>

                <div className="pannel panel-default">
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-5">
                                <h2><strong> Quick Search</strong></h2>
                                <p className="pannel_cotent">Discover restaurants by type of food</p>
                            </div>
                        </div>

                        <Quick />
                    </div>
                </div>
            </div>
        </Fragment >
    )



}

export default HomePage