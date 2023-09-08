import'./Body.css'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer'
import MainCarousal from './MainCarousal'
import RestaurantMenu from './RestaurantMenu'

function filterData(searchInput,allrestaurant){
    const filteredData = allrestaurant.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase()))
    return filteredData
}

export default function Body(){
const [searchInput,setSearchInput] = useState("")

const[allrestaurant,setAllRestaurant] = useState([])
const[mainCarousal,setMainCarousal] = useState([])
const[secondCarousal,setSecondCarousal] = useState([])
const[thirdCarousal,setThirdCarousal] = useState([])
const [filteredRestaurant,setFilteredRestaurant] = useState([])
useEffect(()=>{
    fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.9525101&lng=79.8190484&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
    .then(res => res.json())
    .then(datas =>{
        setMainCarousal(datas.data.cards[0].card.card)
        setSecondCarousal(datas.data.cards[1].card.card)
        setThirdCarousal(datas.data.cards[2].card.card)
        setAllRestaurant(datas.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
        setFilteredRestaurant(datas.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
    })
},[])
    return(
        <div className='body-container'>
        {mainCarousal.length === 0 ? <h1>Hi frands</h1>:<MainCarousal mainCarousal={mainCarousal} Class={"main-carousal-img"}/> }
        {secondCarousal.length === 0 ? <h1>Hi frands</h1>:<MainCarousal mainCarousal={secondCarousal} Class={"second-carousal-img"}/> }
        <hr className='vertical-line'/>
        {thirdCarousal.length === 0 ? <h1>Hi frands</h1>:<MainCarousal mainCarousal={thirdCarousal} Class={"third-carousal-img"}/> }
        <hr className='vertical-line'/>
        {allrestaurant.length === 0 ? <Shimmer/> : 
            <div className='Body' style={{width:"100%"}}>
            <h1 style={{marginBottom:"24px",marginTop:"24px",paddingLeft:"12px",fontSize: "24px"}}>Restaurants with online food delivery in Pondicherry</h1>
            {/* <div style={{display:"flex",justifyContent:"center",marginBottom:"56px",marginTop:"18px",gap:"8px"}}>
                    <input type="text" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}/>
                    <button style={{padding:"8px 16px"}} onClick={()=>{
                        const data = filterData(searchInput,allrestaurant)
                        setFilteredRestaurant(data)
                    }}>Search</button>
                </div> */}
                <div className='res-card-container'>
                    {filteredRestaurant.length>0?
                    filteredRestaurant.map((restaurant)=>{
                        return <Link to={`/restaurantMenu/${restaurant.info.id}`}> <RestaurantCard restaurant={restaurant} key={restaurant.info.id} /></Link>
                    }):<h1>No matches Found</h1>
                }
                
        </div>
       
        </div>
        }
        </div>
    )
    
}
// datas.data.cards[2].card.card.gridElements.infoWithStyle.restaurants