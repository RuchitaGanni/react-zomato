import React, { Component, Fragment } from 'react';
import './Header.css';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
const userInfoUrl = "https://edu-login-app.herokuapp.com/api/auth/userInfo"
class Header extends Component {
    constructor(props) {
        super()

        this.state = {
            userdata: '',
            userinfo: 'Login',
            cartitems: 0
        }

    }

    handleLogout = () => {

        this.setState({ userdata: '' })
        this.setState({ userinfo: 'Login' })
        localStorage.removeItem('userdata')
        localStorage.removeItem('ltk')
        this.props.history.push('/')
    }

    conditionlHeader = () => {

        if (this.state.userdata) {
            console.log('inn ')
            let data = this.state.userdata;
            return (
                <Link to="#" className="dropdown-toggle links" data-toggle="dropdown" href="#">
                    {data.email}
                    <span className="caret"></span>
                </Link>
            )
        } else {
            return (
                <Link to="#" className="dropdown-toggle links" data-toggle="dropdown" href="#">{this.state.userinfo}
                    <span className="caret"></span></Link>
            )
        }
    }
    render() {
        return (
            <Fragment>

                <nav className="navbar navbar-default ">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                {/* <span className="icon-bar"></span> */}
                            </button>
                            {/* <a class="navbar-brand" href="#">WebSiteName</a> */}
                            <Link to="/" className="navbar-brand">
                                <div id="brand">
                                    <p id="logoTag">e!</p>
                                </div>

                            </Link>
                        </div>

                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav" id="navicons">
                                <li ><Link exact to="/" className="links">Home</Link></li>

                                {/* <li><Link exact to="/cart" className="links"><i class="fa fa-shopping-cart" aria-hidden="true"></i></Link></li> */}
                                <li><Link exact to="/viewBooking" className="links">Orders</Link></li>

                                {/* <li id="userinfo"><Link exact to="/" className="links"><i class="fa fa-user" aria-hidden="true"></i>Hello..!! Ruchita</Link></li> */}
                                {/* <li id="userinfo"><Link exact to="/Signup" className="links"><i class="fa fa-user" aria-hidden="true"></i>Login/Sign up</Link></li>
                                <li id="userinfo1"><Link exact to="/" className="links"><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</Link></li> */}
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li className="dropdown" id="dropdown" >
                                    {this.conditionlHeader()}

                                    <ul className="dropdown-menu">
                                        <li ><Link exact to="/Login" className="links"><i class="fa fa-user" aria-hidden="true"></i>Login/Sign up</Link></li>
                                        <li id="userinfo1"><Link exact to="/" className="links" onClick={this.handleLogout}><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</Link></li>
                                        <li></li>
                                    </ul>
                                </li>
                                {/* <li><Link to="/"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                                <li><Link to="/"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </Fragment >
        )
    }
    componentDidMount() {
        axios.get(userInfoUrl, {

            headers: {
                'x-access-token': localStorage.getItem('ltk')
            }
        })
            .then((res) => {
                console.log('res', res)
                if (res.status == 500) {
                    this.setState({ userinfo: 'Login' })
                    return;
                } else if (res.status == 200) {
                    this.setState({
                        userdata: res.data

                    })
                    this.setState({ userinfo: res.data.email });

                    sessionStorage.setItem('userEmail', res.data.email);
                    this.setState({ cartitems: sessionStorage.getItem('cart') })
                }
                // res.json()
            })
        // .then((data) => {
        //    console.log('data', data)
        //         this.setState({
        //             userdata: data

        //         })
        //         this.setState({ userinfo: data.email })

        // })
    }
}

export default withRouter(Header)