import './ViewOrders.css';
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Table from './Table'
import Header from '../Header/Header'
const getOrder = "https://edu-zomatoapp.herokuapp.com/orders";

class ViewOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: '',
            open: false
        };
    }


    render() {
        return (
            <Fragment>
                <Header/>
                <div className="container">

                    <Table data={this.state.orders} />
                    {/* <div className="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>

                                    <th>Order Number</th>
                                    <th>Restaurant</th>
                                    <th>Total Amount</th>
                                    <th>Payment Type</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <Table data={this.state.orders} />

                            </tbody>
                        </table>
                     */}
                </div>

            </Fragment >
        )
    }
    componentDidMount() {
        const userEmail=sessionStorage.getItem('userEmail')
        axios.get(`${getOrder}/${userEmail}`).then((res) => {
            console.log(res.data, 'res')
            this.setState({ orders: res.data })
        })
    }
}
export default ViewOrders;