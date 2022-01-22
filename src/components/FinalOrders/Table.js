import React from 'react';

function Table(props) {
    let renderTable = ''
    renderTable = ({ data }) => {

        if (data.length > 0) {
            return data.map((item) => {
                return (
                    // <tr>
                    //     <td>{item.id}</td>
                    //     <td>{item.hotel_name}</td>
                    //     <td>{item.cost}</td>
                    //     <td>UPI</td>
                    //     <td>{item.status}</td>
                    // </tr>

                    <div id="ordersDiv">
                        <div class="OrdResImageDiv">

                        <img src={item.ErestImg} className="OrdResImage" />

                        </div>
                        <div class="ordRestName">
                           
                        <h4 id="h3txt" >{item.hotel_name}</h4>
                            
                        </div>
                        {/* <div className="ordRestName">
                            <img src={item.ErestImg} className="OrdResImage" />
                            <h3 id="h3txt" >{item.hotel_name}</h3>
                        </div> */}
                        <hr  className="lineOrder1"/>
                        <div className="ordPrice">
                            <h4>ORDER NUMBER  <br /> {item.orderid}</h4>
                        </div>
                        <hr />
                        <div className="ordPrice">
                            <h4>TOTAL AMOUNT <br /> &#8377; {item.totalCost}</h4>
                        </div>
                        <hr />
                        <div className="ordPrice">
                            <h4>ORDERED DATE <br /> {(item.date)}</h4>
                        </div>
                        <hr />
                        <div className="ordPrice">
                            <h4>ORDER STATUS - {(item.status)}</h4>
                        </div>

                    </div>
                )
            })
        } else {
            return (
                <img src="/assests/loader2.gif" alt="loading..." id="loaderGIF" />
            )
        }
    }
    return (
        <>
            {renderTable(props)}</>
    )
}

export default Table;