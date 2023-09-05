import './Body.css'
export default function Shimmer(){
    return(
        <div className='res-card-container'>{
          Array(10).fill("").map((e,index)=>{
            return <div class="card" key={index}>
            <div class="shimmerBG media"></div>
            <div class="p-32">
              <div class="shimmerBG title-line"></div>
              <div class="shimmerBG title-line end"></div>
              <div class="shimmerBG content-line m-t-24"></div>
              <div class="shimmerBG content-line"></div>
              <div class="shimmerBG content-line"></div>
            </div>
        </div>  
          })
        }</div>
        )
}