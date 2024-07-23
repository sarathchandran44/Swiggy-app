import {React} from 'react';

/**
 * 
 * Header
 * -logo
 * -Nav item
 * Body
 * -search
 * -Restaurent
 * -Restaurent cards
 * Footer
 * -Copyrights
 * -links
 * -Address
 * -contact
 * 
 * 
 */

const Header =()=>{
  return(
    <div className='header'>
      <div className='logo-container'>
        <img className='logo'src='https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png' alt='logo'/>
      </div>
      <div className='nav-item'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>

    </div>
  )
}

const RestaurentCard = (props) =>{
  return(
    <div className='res-card'style={{backgroundColor: "#f0f0f0"}}>
      <img 
      className='res-logo'
      src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/5/9/a6ceb33a-6a75-48ef-aa33-18f54e6becc8_4d8c5e26-fde9-47f7-8754-43b483fa68f6.jpg'/>
    <h3>{props.resName}</h3>
    <h4>{props.cuisine}</h4>
    <h4>{props.starRating}</h4>
    <h4>{props.deliveryTime}</h4>
    </div>
  )
}
const Body = ()=>{
  return(
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        <RestaurentCard resName="Meghna Foods" cuisine="Biryani, North Indian, Asian " starRating="4.2" deliveryTime="38 Minutes"/>
        <RestaurentCard resName="KFC" cuisine="Burger, Fast Food" starRating="4.7" deliveryTime="20 Minutes"/>
       
        </div>
    </div>
  )
}
const AppLayout =()=>{
  return(
    <div className='app'>
      
    <Header/>
    <Body/>
    </div>
  )
}

export default AppLayout;