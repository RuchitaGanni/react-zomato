import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import './FinalOrder.css';
import Header from '../Header/Header'
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';

const menuUrl = "https://edu-zomatoapp.herokuapp.com/menuItem"
const placeOrderUrl = "https://edu-zomatoapp.herokuapp.com/placeOrder"

class FinalOrder extends Component {

    constructor(props) {

        super(props)
        this.state = {
            orderid: Math.floor(Math.random() * 100000),
            hotel_name: this.props.match.params.restName,
            name: 'User',
            phone: '987654324',
            email: '',
            totalCost: 0,
            address: 'Uppal,HyderabadHno123',
            menuItems: '',
            restname: '',
            status: 'Order Placed',
            orderType:"zomato",
            showSuccessAlert: false,
            ErestId: '',
            ErestName: '',
            EmealName: '',
            EmealId: '',
            ErestImg: '',


        }


    }
    renderItems = (data) => {
        if (data) {
            return data.map((item, index) => {
                return (
                    <div className="orderItems" key={index}>

                        <div className="orderImgDiv">

                            <img src={item.img} alt={item.name} id="orderImg" />

                        </div>
                        <div className="orderTxtDiv">
                            <span className="orderTxt">
                                {item.name}
                            </span>


                        </div>


                    </div>
                )
            })
        }
    }
    placeOrder = () => {
        if (this.state.email != '') {
            fetch(placeOrderUrl, {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
                .then((res) => {
                    console.log(res.status, 'dataaaa');
                    if (res.status == 200) {
                        this.props.history.push('/viewBooking')
                    }
                })
        } else {


        }


    }
    //this.props.history.push('/viewBooking')

    // setTimeout(function () {

    // }, 2000)


    //console.log('going for payment');



    // .then(this.props.history.push('/viewBooking'))
    // .then(

    //     this.setState({ showSuccessAlert: true,status:'Order Placed' })
    // )

    render() {
        return (
            <Fragment>
                <Header />
                <div className="container">

                    <Link to='/'><span class="bdcrm">Home</span></Link>
                    <span class=" bdcrm">/</span>
                    <Link to={`/filter/${this.state.EmealId}`}><span class="bdcrm">{this.state.EmealName}</span></Link>
                    <span class=" bdcrm">/</span>
                    <Link to={`/menu/${this.state.ErestId}`}>
                        <span class="bdcrm">{this.state.restname}</span>
                    </Link>
                    <div>
                        {this.state.showSuccessAlert &&
                            <Alert
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            this.setState({ showSuccessAlert: false })
                                            //   setOpen(false);
                                        }}
                                    >
                                        <i class="fa fa-times" style={{ color: 'black' }}></i>
                                    </IconButton>
                                }

                            >
                                <span className="finalPrice">{this.state.status}</span>
                            </Alert>

                        }

                    </div>
                    {/* action="http://localhost:4100/paynow" method="POST" */}
                    {/* <form > */}


                    <h2>Checkout</h2>
                    <div>
                        <h3>Order from : {this.state.restname}</h3>
                    </div>
                    <hr />
                    <span className="finalPrice">Total Amount : &#8377; {this.state.totalCost}</span>
                    {/* <h4></h4> */}
                    <button className="btn btn-success pull-right"
                        onClick={this.placeOrder} id="btnTXT">
                        <i class="fas fa-credit-card"></i>
                        Make Payment

                    </button>


                    <hr />
                    <div>
                        <span className="finalPrice">
                            Delivery To : Uppal,Hyderabad
                        </span>

                    </div>
                    <hr />
                    <h5><strong>Order Summary</strong></h5>
                    <div style={{ width: '100%' }}>{this.renderItems(this.state.menuItems)}</div>
                    <input type="hidden" name="amount" value={this.state.totalCost} />
                    <input type="hidden" name="id" value={this.state.orderid} />
                    {/* <input type="hidden" name="restImg" value={this.state.ErestImg}/> */}
                    <input type="hidden" name="hotel_name" value="grocerypayments" />
                    <input type="hidden" name="name" value="grocerypayments" />
                    <input type="hidden" name="phone" value="grocerypayments" />
                    <input type="hidden" name="email" value="grocerypayments" />
                    <input type="hidden" name="address" value="grocerypayments" />
                    {/* </form> */}

                </div>

            </Fragment >

        )


    }
    componentDidMount() {
        const restName = this.props.match.params.restName;
        this.setState({ restname: restName });
        let menuItems = sessionStorage.getItem('menu')
        let menuIds = []
        menuItems.split(',').map((item) => {
            menuIds.push(parseInt(item))
            console.log(JSON.stringify(menuIds), 'mds')
            return 'ok'
        })
        fetch(menuUrl, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(menuIds)

        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, 'data')
                let menuDetails = [];
                let totalPrice = 0;
                data.map((item) => {
                    var myObj = {}
                    totalPrice = totalPrice + parseInt(item.menu_price)
                    myObj.name = item.menu_name;
                    myObj.img = item.menu_image
                    menuDetails.push(myObj);
                    return 'ok'
                })
                this.setState({ totalCost: totalPrice, menuItems: menuDetails })

                this.setState({ EmealName: sessionStorage.getItem('setMealName') })
                this.setState({ EmealId: sessionStorage.getItem('selMeal') })
                this.setState({ ErestId: sessionStorage.getItem('restId') })
                this.setState({ ErestName: sessionStorage.getItem('restName') })
                this.setState({ ErestImg: sessionStorage.getItem('restImg') })
                this.setState({ email: sessionStorage.getItem('userEmail') })
            })
    }
}

export default FinalOrder