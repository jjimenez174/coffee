import React, { useContext } from 'react';
import './ExploreShop.css';
import { menu_list } from '../../assets/assets'
// import { StoreContext } from '../../Context/StoreContext';

const ExploreShop = ({ category, setCategory }) => {
  const handleCategoryClick = (menuName) => {
    setCategory(prev => prev === menuName ? "All" : menuName);
  };

  const renderMenuList = () => {
    const menuItems = [];
    menu_list.forEach((item, index) => {
      menuItems.push(
        <div
          key={index}
          className="explore-shop-list-item"
          onClick={() => handleCategoryClick(item.menu_name)}
        >
          <img
            className={category === item.menu_name ? "active" : ""}
            src={item.menu_image}
            alt={item.menu_name}
          />
          <p>{item.menu_name}</p>
        </div>
      );
    });
    return menuItems;
  };

  return (
    <div className="explore-shop" id="explore-shop">
      <h1>Explore The Shop</h1>
      <div className="explore-shop-list">
        {renderMenuList()}
      </div>
      <hr />
    </div>
  );
};


export default ExploreShop