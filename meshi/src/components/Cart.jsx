// src/components/Cart.js
import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  // Get cart items from the Redux store
  const cartItems = useSelector((state) => state.cart.items);
  var count=0;
  const countVal = cartItems.map((each)=>{
      return {value:each, uniqueId:each.card.info.id,countVal:count}
  })
  // console.log(cartItems,"CartItems")
  // console.log(countVal,"before")
  countVal.map((each,index1)=> {
    cartItems.forEach((eachItem,index)=>{
      // console.log(eachItem.card.info.id)
      if(each.uniqueId == eachItem.card.info.id){
          {each.countVal+=1}
          if(index>0){
            // console.log(countVal.splice(index1+1,1))
          }
          // console.log(index)
      }
    })
  })
  function removeDuplicates(array, key) {
    const uniqueArray = [];
    const seen = new Set();
  
    for (const item of array) {
      const keyValue = key ? item[key] : JSON.stringify(item);
  
      if (!seen.has(keyValue)) {
        seen.add(keyValue);
        uniqueArray.push(item);
      }
    }
  
    return uniqueArray;
  }

const uniqueArray = removeDuplicates(countVal, countVal.uniqueId);
// 
const totalSum=0
uniqueArray.forEach((each)=>{
  totalSum+= each.value.card.info.price/100
  // console.log(totalSum+(each.value.card.info.price/100))
  // console.log(typeof(each.value.card.info.price/100))
  // console.log(typeof(totalSum))
})
  return (
    <div className="cart d-flex flex-column justify-center" >
      <h2>Shopping Cart</h2>
      {
        uniqueArray.map((each)=>{
          return(
                <div style={{border:"1px solid #696969",padding:"16px",margin:"16px",width:"80%",margin:"0 auto",marginBottom:"14px",marginTop:"14px"}} className='d-flex'>
                  <div key={each.uniqueId} className='d-flex' style={{width:"100%"}}>
                    <div className='d-flex gap-4 align-center'>
                      {each.value.card.info.isVeg?<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="#0f8a65" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg>:<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="#e43b4f" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg>}
                      <p>{each.value.card.info.name}</p>
                    </div>
                    <div className='d-flex align-center gap-16' style={{marginLeft:"auto"}}>
                      <p>{each.countVal}</p>
                      <p className='each-menu-item mt-4' style={{fontSize:"14px",marginBottom:"3px"}}>₹{(each?.value?.card?.info?.price/100)*(each.countVal) || (each?.value?.card?.info?.defaultPrice/100)*(each.countVal)}</p>
                    </div>
                  </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default Cart;
