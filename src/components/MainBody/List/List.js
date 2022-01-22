import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import Mealtype from './Mealtype'
import CusineTypes from './CusineTypes'
import './List.css';
const List = (props) => {

    let setBread=(restName,restId)=>{
        sessionStorage.setItem('restName', restName);
        sessionStorage.setItem('restId', restId);
    }

    let renderMeal = '';
    if (props.restData.length > 0) {


        if (props.restData) {

            renderMeal =
                props.restData.map((item) => {
                    return (
                        // <Link to="/">
                        <div className="tile_contents">
                            <div className="tile_content_top">
                                <div className="tile_img_div">
{/* onError="this.onerror=null;this.src='/assests/snacks.jpg';" */}
                                    <img src={item.restaurant_thumb} alt={item.restaurant_name} className="tile_image" />
                                </div>
                                <div className="tile_text_div">
                                    <div>
                                        <span className="tile_text">{item.restaurant_name}</span>
                                    </div>
                                    <div>
                                        <span className="tile_loc1">{item.address}</span>
                                    </div>
                                    <div className="tile_loc2">
                                        <Mealtype mealType={item.mealTypes} />
                                    </div>
                                    <div>
                                        <Link to={`/menu/${item.restaurant_id}`}>
                                            <button className="btn btn-info" onClick={()=>setBread(item.restaurant_name,item.restaurant_id)}>view</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <hr width="700px;" align="center;" border-color="gray;" />
                            <div className="tile_content_bottom">
                                <div className="bottom_lines">
                                    <div>
                                        <span className="left_text">CUSINE</span>
                                    </div>
                                    <div className="right_text">

                                        <CusineTypes cusines={item.cuisines} />
                                        {/* <span className="right_text">{item.cuisines[0].cuisine_name}{item.cuisines[1].cuisine_name}</span> */}

                                    </div>
                                </div>

                                <div className="bottom_lines2">
                                    <div>
                                        <span className="left_text">Cost for two </span>
                                    </div>
                                    <div>
                                        <span className="right_text">&#8377;{item.cost}</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        // </Link>
                    )
                })
        }
    } else {
        renderMeal =
            <img src="/assests/loader2.gif" alt="loading..." id="loaderGIF" />
    }
    return (
        <Fragment >

            <div className="tiles_tab">

                {renderMeal}


            </div>
        </Fragment>
    )

}
export default List;