import './ViewOrders.css';
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Table from './Table'
import Header from '../Header/Header'
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
const getOrder = "https://edu-zomatoapp.herokuapp.com/orders";

class ViewOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: '',
            uemail:'',
            open: false
        };
    }

    showAlerts = () => {

        if (this.state.uemail== '') {
            this.setState({ open: true })
        }
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className="container">
                    {this.showAlerts()}
                    {
                        this.state.open &&
                        <Alert variant="filled" severity="warning" id="alert"

                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        this.setState({ open: false })
                                        //   setOpen(false);
                                    }}
                                >
                                   
                                </IconButton>
                            }

                        >
                            <span className="errorMsg">Please Login to view orders</span>
                        </Alert>

                    }
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
        const userEmail = sessionStorage.getItem('userEmail');
        this.setState({uemail:userEmail});
        axios.get(`${getOrder}/${userEmail}`).then((res) => {
            if(res.data.length>0){
                this.setState({ open: false })
            }
            this.setState({ orders: res.data })
        })
    }
}
export default ViewOrders;