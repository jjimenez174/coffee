import React from 'react'
import './ExploreShop.css'
import { shop_list } from '../../assets/assets'

const ExploreShop = () => {
  return (
    <div className ='explore-shop' id='explore-shop'>
      <h1>Explore the Coffees</h1>
      <p className='explore-shop-text'>text here</p>
      <div className="explore-shop-list">
        {shop_list.map((item, index)=>{
            return (
                <div key={index} className='explore-shop-list-item'>
                    <img src={item.shop_image} alt="" />
                    <p>{item.shop_name}</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default ExploreShop
