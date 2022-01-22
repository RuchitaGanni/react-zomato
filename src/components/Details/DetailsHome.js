import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import axios from 'axios'
import './Detailshome.css'
import Header from '../Header/Header'
import MenuItems from './MenuItems'
const resturl = "https://edu-zomatoapp.herokuapp.com/restaurants";
const restMenu = "https://edu-zomatoapp.herokuapp.com/menu"
class DetailsHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restData: '',
            menu: '',
            userItem: '',
            total: 0,
            showSuccessAlert: false,
            mealId: '',
            mealName: '',
            restId: '',
            restName: ''


        }


    }
    addToCart = (data, check, cost) => {
        this.setState({ userItem: data });
        sessionStorage.setItem('cart', this.state.userItem)
        if (check !== 0 && this.state.total >= 0) {
            this.setState({ total: this.state.total + Number(cost) });
        } else if (check === 0 && this.state.total >= 0) {
            this.setState({ total: this.state.total - Number(cost) });
        }

    }
    proceed = () => {
        sessionStorage.setItem('menu', this.state.userItem);
        sessionStorage.setItem('restImg', this.state.restData.restaurant_thumb);
        if ((this.state.userItem).length !== 0) {

            this.props.history.push(`/placeOrder/${this.state.restData.restaurant_name}`)
        } else {
            this.setState({ showSuccessAlert: true })
        }

    }
   
    render() {
        return (
            <Fragment>
                <Header  />
                <div className="container">
                    {this.state.showSuccessAlert &&
                        <Alert severity="error"
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
                            <h5 > Please add items</h5>
                        </Alert>

                    }
                    <div>
                        <Link to='/'><span class="bdcrm">Home</span></Link>
                        <span class=" bdcrm" >/</span>
                        <Link to={`/filter/${this.state.mealId}`} ><span class="bdcrm">{this.state.mealName}</span></Link>
                        <span class=" bdcrm">/</span>
                        {/* <Link to={`/menu/${this.state.restId}`}> */}
                        <span class="bdcrm">{this.state.restName}</span>
                        {/* </Link> */}


                    </div>
                    <div class="top1">
                        <div className="restMainDiv">
                            <div className="restImageDiv">
                                <img src={this.state.restData.restaurant_thumb ? this.state.restData.restaurant_thumb : "/assests/loader2.gif"} alt={this.state.restData.restaurant_name} id="restImage" />
                            </div>

                        </div>
                        <div className='restExtraDiv'>
                            <div className="restName">

                                <h2>
                                    {this.state.restData.restaurant_name}
                                </h2>
                            </div>
                            <div
                                className="restAdd">
                                <h3>{this.state.restData.address}</h3>
                            </div>
                            <div className="restStarInfo">
                                <span className="label label-success" id="label">
                                    {this.state.restData.average_rating}<i class="fa fa-star" ></i>
                                </span>
                                <button className="btn btn-danger pull-right" onClick={this.proceed} >
                                    <span id="placeOrdertxt">Place Order</span>
                                </button>
                            </div>
                            <div className="restStarInfo2">
                                <h3>Order Total: &#8377;  {this.state.total} </h3>
                                <h3>Total Items :{this.state.userItem.length} </h3>
                            </div>
                        </div>
                    </div>
                    <div className='tabs'>
                        <Tabs>
                            <TabList>
                                <Tab> <h4>Menu to Order</h4></Tab>
                                <Tab><h4>More</h4></Tab>
                            </TabList>

                            <TabPanel>
                                <MenuItems menuItems={this.state.menu} finalOrder={(data, check, cost) => { this.addToCart(data, check, cost) }} />


                            </TabPanel>
                            <TabPanel>
                                <h2>More content</h2>
                            </TabPanel>
                        </Tabs>
                    </div>
                    {/* <div className="itemsDiv33">
                        <h4>Order Online</h4>
                        <hr id="orderLine" />
                        <MenuItems menuItems={this.state.menu} finalOrder={(data) => { this.addToCart(data) }} />
                    </div> */}

                </div>
            </Fragment >
        )
    }
    async componentDidMount() {
        const restId = this.props.match.params.restid;
        const response = await axios.get(`${resturl}/${restId}`);
        console.log(response.data[0].restaurant_name, 'res', response.data)
        const menuResponse = await axios.get(`${restMenu}/${restId}`)
        console.log(menuResponse, 'menuResponse')
        this.setState({ restData: response.data[0], menu: menuResponse.data })
        if (sessionStorage.getItem('hideMealType') == 1) {
           console.log('in iff')
            this.setState({ restName: response.data[0].restaurant_name })

        } else {
            console.log('in elsee');
            this.setState({ restName: sessionStorage.getItem('restName') })
        }
        this.setState({ mealName: sessionStorage.getItem('setMealName') })
        this.setState({ mealId: sessionStorage.getItem('selMeal') })
        this.setState({ restId: sessionStorage.getItem('restId') })

    }
}

export default DetailsHome