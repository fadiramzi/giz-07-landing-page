import React from 'react'

const Headerpart2 = () => {
    return (
        <div className={'headerFooter'}>
            <div className={'dropboxheader'}>
                <select className={'category'}>
                 <option value="">All Categories</option>
                 <option value="Shoes">Shoes</option>
                 <option value="watches">watches</option>
                 <option value="Balls">Balls</option>
                 <option value="Phones">Phones</option>
                </select>
            </div>
            <div className={'menu'}>
                <p>Home</p>
                <p>New Arrivals</p>
                <p>Trending</p>
                <p>Deals For You</p>
                <p>Discounts</p>
                <p>Weekly Offers</p>
                <p>Become A Vendor</p>
            </div>

            
        </div>
    )
}

export default Headerpart2
