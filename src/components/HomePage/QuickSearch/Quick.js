import React, { Component, Fragment } from 'react';
import QuickGrid from './QuickGrid'



const MealTypeUrl = "https://edu-zomatoapp.herokuapp.com/mealTypes";
class Quick extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mealtypes: ''
        }
    }
   
        
            
    
    render() {
        return (
            <Fragment>
               <QuickGrid mealTypes={this.state.mealtypes}/>
            </Fragment >
        )
    }

    componentDidMount() {

        fetch(MealTypeUrl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ mealtypes: data })
               
            })
    }
}

export default Quick