import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header/Header'
import HomePage from './HomePage/HomePage'
import MainBody from './MainBody/MainBody'
import DetailsHome from './Details/DetailsHome'
import FinalOrder from './FinalOrders/FinalOrder'
import ViewOrders from './FinalOrders/ViewOrders';
import Login from './Login/Login'
import Signup from './Login/Signup'
const Routing = () => {
   
        return (
            <BrowserRouter>
                {/* <Header /> */}
                
                <Route exact path="/" component = {HomePage}/>
                <Route  path="/filter/:mealTypeId" component={MainBody}/>
                <Route path="/menu/:restid" component={DetailsHome}/>
                <Route path="/placeOrder/:restName" component={FinalOrder}/>
                <Route path="/viewBooking" component={ViewOrders}/>
                <Route path="/Login" component={Login}/>
                <Route path="/Signup" component={Signup}/>
            </BrowserRouter>
        )
    
}

export default Routing