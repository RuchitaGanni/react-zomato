import React, { Component, Fragment } from 'react';

class MenuItems extends Component {
    constructor() {
        super()
        this.state = {
            orderObj: {}
        }
    }
    orderId = [];
    orderIds = [];

    addItem = (id,cost) => {
       
        this.orderId.push(`${id}`)
        console.log(id,cost,'idcost')
        this.props.finalOrder(this.orderId,1,cost)
    }
    removeItem = (id,cost) => {
        if(this.orderId.indexOf(id.toString()) <0){
            cost=0;
        }else{
            this.orderId.splice(this.orderId.indexOf(id.toString()),1)
        }
        
        this.props.finalOrder(this.orderId,0,cost)
    }

    // without porps
    renderMenu = ({ menuItems }) => {
        if (menuItems) {
            //console.log(menuItems, 'm');
            return menuItems.map((item) => {
                return (
                    <Fragment>
                        <div className="card">
                            <div class="itemImg">
                                <img src={item.menu_image} alt={item.menu_name} className="cardImage" />
                            </div>
                            <div class="itemdetails">
                                <div><span class="itemName">{item.menu_name}</span></div>
                                <div >
                                    <i className="fa fa-star checked"></i>
                                    <i className="fa fa-star checked"></i>
                                    <i className="fa fa-star checked"></i>
                                    <i className="fa fa-star checked"></i>
                                    <i className="fa fa-star-o"></i>
                                </div>
                                <div>
                                   
                                    <span className="itemPrice">&#8377; {item.menu_price}</span>
                                </div>

                            </div>
                            <div className="btnsDiv">
                                {/* <div className="btnsDiv"> */}
                                    <button className="btn btn-success iconBtn"  onClick={() => { this.addItem(item.menu_id,item.menu_price) }}><i class="fa fa-plus" ></i></button>
                                    <span> {this.orderId}</span>
                                    <button className="btn btn-danger iconBtn" onClick={() => {this.removeItem(item.menu_id,item.menu_price)}}><i class="fa fa-minus" ></i></button>
                                {/* </div> */}
                            </div>
                        </div>
                    </Fragment >
                )
            })
        }
    }
    render() {
        return (
            <Fragment>
                <div class="container">
                    {this.renderMenu(this.props)}
                </div>
            </Fragment>
        )
    }

}
export default MenuItems;