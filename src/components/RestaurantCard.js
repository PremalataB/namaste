import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const {resData }=props;

    const{cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime}=resData?.info;
    return(
      <div className='res-card' style={{backgroundColor : "#f0f0f0"}}>
        
         <img className='res-logo'
         alt = "res-logo"
         src={CDN_URL+
         cloudinaryImageId} >
  
         </img>
         
          <h3> {name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h5>{avgRating}stars</h5>
          <h5>{costForTwo/100}For Two</h5>
          <h5>{deliveryTime}Minutes</h5>

        
      </div>  
    )
  }
  export default RestaurantCard;