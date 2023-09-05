import './Body.css'
import React from 'react'
export default function RestaurantCard(props){
        return <div className="res-card" >
                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.restaurant.info.cloudinaryImageId}`} alt="" width={"100%"} className='res-data-img' />
                    {/* <p>{eachRes.info.aggregatedDiscountInfoV2.header}</p> */}
                    <h3 className='res-name'>{props.restaurant.info.name}</h3>
                    <p>{props.restaurant.info.avgRating}</p>
                    <p>{props.restaurant.info.areaName}</p>
                    <p className='cuisine'>{props.restaurant.info.cuisines.join(', ')}</p>
                </div> 
}
