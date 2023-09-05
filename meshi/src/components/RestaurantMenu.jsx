import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"

export default function RestaurantMenu(){
    const [restaurantMenu,setRestaurantMenu] = useState({})
    const {id} = useParams()
    console.log(id)

    // const [restaurantMenu,setRestaurantMenu] = useState()
    useEffect(()=>{
        fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.930515252798992&lng=76.9281879812479&restaurantId=${id}`)
        .then(res => res.json())
        .then(data => setRestaurantMenu(data))
    },[])
console.log(restaurantMenu)
    return(
        <>
            <h1>Restaurant Menu</h1>
            <p>Id From url - <em><strong>{id}</strong></em></p>
        </>
    )
}