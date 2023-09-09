import './Body.css'
import './style.css'
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"

export default function RestaurantMenu(){
    const [restaurantMenu,setRestaurantMenu] = useState([])
    const {id} = useParams()
    // const [restaurantMenu,setRestaurantMenu] = useState()
    const [openSections, setOpenSections] = useState(Array(restaurantMenu.length).fill(true));
    console.log(openSections)
    const toggleMenu = (sectionIndex) => {
        setOpenSections(prevOpenSections => {
          const updatedOpenSections = [...prevOpenSections];
          updatedOpenSections[sectionIndex] = !updatedOpenSections[sectionIndex];
          return updatedOpenSections;
        });
      };
      
    useEffect(()=>{
        fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.930515252798992&lng=76.9281879812479&restaurantId=${id}`)
        .then(res => res.json())
        .then(data => setRestaurantMenu(data.data.cards))
    },[id])
    return(
        <>
         {
            restaurantMenu.length>0?
        <div className='restaurant-whole-container'>
            <div className="menu-container">
                <div>
                    <p className='hotel-name'>{restaurantMenu[0].card.card.info.name}</p>
                    <p className='hotel-details'>{restaurantMenu[0].card.card.info.cuisines.join(', ')}</p>
                    <p className='hotel-details'>{restaurantMenu[0].card.card.info.areaName}</p>
                </div>
                <div className='rating'>
                    <div style={{display:"flex",justifyContent:"center",gap:"4px",alignItems:"center",paddingBottom:"10px",borderBottom: '1px solid #e9e9eb',marginBottom:"8px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 512 512" ><path fill="#3d9b6d" d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4l-58.5 171.3L256 373.84L404.29 480l-58.61-171.3Z"/></svg>
                    <p style={{color: "#3d9b6d",fontWeight:"700"}}>{restaurantMenu[0].card.card.info.avgRating}</p>
                    </div>
                    <p style={{color: "#8b8d97",fontWeight:"600",fontSize:"11px"}}>{restaurantMenu[0].card.card.info.totalRatingsString}</p>
                </div>
            </div>
            <hr style={{border: "none",borderBottom: "1px dashed #d3d3d3"}}/>
            <div className='d-flex align-center gap-24' style={{marginTop:"18px",marginBottom:"18px"}}>
                <div className='d-flex align-center time-cost-wrap gap-10'>
                    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none"><circle r="8.35" transform="matrix(-1 0 0 1 9 9)" stroke="#3E4152" stroke-width="1.3"></circle><path d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z" fill="#3E4152"></path></svg>
                    <span>{restaurantMenu[0].card.card.info.totalRatingsString}</span> 
                </div>
                <div className='d-flex align-center time-cost-wrap gap-10'>
                    <svg  width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none"><circle cx="9" cy="9" r="8.25" stroke="#3E4152" stroke-width="1.5"></circle><path d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z" fill="#3E4152"></path></svg>
                    <span>{restaurantMenu[0].card.card.info.costForTwoMessage}</span>
                </div>
            </div>
            <div className='d-flex gap-10 offer-container-parent'>
                {
                restaurantMenu[1].card.card.gridElements.infoWithStyle.offers.map((each)=>{
                    return ( 
                    <div className='offer-container'>
                    <div className='d-flex align-center gap-4'>
                            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${each.info.offerLogo}`} alt="" width={20} height={20}/>
                            <p className='offer-header'>{each.info.header}</p>
                        </div>
                        <div className='d-flex align-center gap-4 ' style={{minWidth: "220px"}}>
                            <p className='offer-desc-coup'>{each.info.couponCode}</p>
                            <div className='desc-vertical-line offer-desc-coup'></div>
                            <p className='offer-desc-coup' style={{marginTop:"3px",marginBottom:"-2px"}}>{each.info.description}</p>
                        </div>
                    </div>
                    )
                })
                }
                </div>
                <div className='style-divider'></div>
                <div className='main-dishes-container'>
                    <div className='recommended' >
                        {
                        restaurantMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((each,index)=>{
                                return( <>
                                    {each?.card?.card?.itemCards?.length>0&&
                                <div key={each?.card?.card?.title}>
                                <div className='d-flex justify-space-between' onClick={()=>toggleMenu(index)}>
                                    <div>
                                    {<p className='menu-header'>{each?.card?.card?.title} ({each?.card?.card?.itemCards?.length})</p>
                                    }
                                    </div>
                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ transform:openSections[index]?"rotate(0deg)":"rotate(180deg)"}}><g id="feArrowDown0" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="feArrowDown1" fill="#3e4152"><path id="feArrowDown2" d="m6 7l6 6l6-6l2 2l-8 8l-8-8z"/></g></g></svg></p>
                                </div> 
                                {
                                openSections[index]||openSections.length>= 0&& (<div style={{marginBottom:"24px",marginTop:"24px",}}>
                                    {each?.card?.card?.itemCards?.map((each)=>{
                                        return(
                                            <>
                                        <div className='d-flex justify-space-between'>
                                            <div className='pb-14'>
                                                {each.card.info.isVeg?<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="#0f8a65" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg>:<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="#e43b4f" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg>}
                                                <p className='each-menu-item'>{each.card.info.name}</p>
                                                <p className='each-menu-item mt-4' style={{fontSize:"14px"}}>₹{each?.card?.info?.price/100 || each?.card?.info?.defaultPrice/100}</p>
                                                <p className='mt-14 menu-item-desc'>{each?.card?.info?.description}</p>
                                            </div>
                                            <div style={{position:"relative",width:"118px",height:"96px"}}>
                                                {
                                                each?.card?.info?.imageId&&<img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${each?.card?.info?.imageId}`} alt="" width={118} height={96} style={{borderRadius:"6px",objectFit:"cover"}}/>
                                                }
                                                {
                                                    <div className={each?.card?.info?.imageId? 'menu-cart': 'menu-cart-no-img'}>
                                                        <div className='d-flex flex-column justify-center align-center' style={{height:"100%",cursor:"pointer",borderRadius:"4px"}}>
                                                            <p style={{color:" #60b246",fontWeight:"600",fontSize:"12px"}}>ADD</p>
                                                            <div></div>
                                                        </div>
                                                    </div>   
                                                }
                                                
                                                
                                                
                                            </div>
                                        </div>
                                        <div className='style-divider'></div>
                                        </>
                                        
                                        )
                                    })}
                                </div>)
                                }
                            <div className='main-divider'></div>
                            </div>
                                } 
                                </>
                                )
                            })
                        }
                    </div>
                </div>
           </div> 
           
            : <h1>Working</h1> 
            }
        </>
    )
}