import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { EPNewArrivals } from './EPNewArrivals'
import { EPBestSellers } from './EPBestSellers'
import { EPFeatured } from './EPFeatured'
import { EPSpecialOffers } from './EPSpecialOffers'

export const ExclusiveProducts = () => {
  const [activeTab, setActiveTab] = useState('New Arrivals');

  const handleTabClick = (tabName) => {
      setActiveTab(tabName);
  };

  return (
    <div className='exclusiveProducts'>
      <h1>Exclusive Products</h1>

      <div className="categories">
        <ul>
          <li className={activeTab === 'New Arrivals' ? 'active' : ''} onClick={() => handleTabClick('New Arrivals')}>
            <Link onClick={() => handleTabClick('New Arrivals')}>New Arrivals</Link>
          </li>

          <li className={activeTab === 'Best Sellers' ? 'active' : ''} onClick={() => handleTabClick('Best Sellers')}>
            <Link onClick={() => handleTabClick('Best Sellers')}>Best Sellers</Link>
          </li>

          <li className={activeTab === 'Featured' ? 'active' : ''} onClick={() => handleTabClick('Featured')}>
            <Link onClick={() => handleTabClick('Featured')}>Featured</Link>
          </li>

          <li className={activeTab === 'Special Offers' ? 'active' : ''} onClick={() => handleTabClick('Special Offers')}>
            <Link onClick={() => handleTabClick('Special Offers')}>Special Offers</Link>
          </li>
        </ul>
      </div>

      {/* Render content based on active tab */}
      {activeTab === 'New Arrivals' && 
        <div>
          <EPNewArrivals/>
        </div>                
      }

      {activeTab === 'Best Sellers' && 
        <div>
          <EPBestSellers/>
        </div>
      }

      {activeTab === 'Featured' && 
        <div>
          <EPFeatured/>
        </div>
      }
      {activeTab === 'Special Offers' && 
        <div>
          <EPSpecialOffers/>
        </div>
      }
    </div>
  )
}