<script lang="ts">
import Input from '../lib/Input.svelte'
import DropDown from '../lib/DropDown.svelte'
import Icon from '../lib/Icon.svelte'
import Card from '../lib/Card.svelte'

let nav_labels = ['Home', 'New Arrival', 'Trending', 'Deals For You', 'Discounts', 'Weekly Offers', 'Become A Vendor']
let selected_nav_label = 0
let categories = ['Categories', 'Shoes', 'Watches', 'Bags']
let badge_icons = [' ', ' ', ' ']
let shoes =[
    {"img": "shoe_0.png", "name": "Nike Court Air", "price": "$58"},
    {"img": "shoe_1.png", "name": "Nike Air Force 1", "price": "$58"},
    {"img": "shoe_2.png", "name": "Nike SB Zoom", "price": "$58"},
    {"img": "shoe_3.png", "name": "Nike Signal", "price": "$58"},
    {"img": "shoe_0.png", "name": "Nike Court Air", "price": "$58"},
    {"img": "shoe_1.png", "name": "Nike Air Force 1", "price": "$58"},
    {"img": "shoe_2.png", "name": "Nike SB Zoom", "price": "$58"},
    {"img": "shoe_3.png", "name": "Nike Signal", "price": "$58"},
]

let shoes_collection =[
    {"img": "shoe_0.png", "name": "Nike Court Air", "price": "$58"},
    {"img": "shoe_1.png", "name": "Nike Air Force 1", "price": "$58"},
    {"img": "shoe_2.png", "name": "Nike SB Zoom", "price": "$58"},
    {"img": "shoe_3.png", "name": "Nike Signal", "price": "$58"},
    {"img": "shoe_4.png", "name": "Nike Air Force Shadow", "price": "$99"},
]
let watches = [
    {"img": "watch_0.png", "name": "Single Tour", "price": "$990"},
    {"img": "watch_1.png", "name": "Single Tour", "price": "$990"},
    {"img": "watch_0.png", "name": "Single Tour", "price": "$990"},
    {"img": "watch_1.png", "name": "Single Tour", "price": "$990"}
]

let footer_sections = [
    {
        name: 'Products',
        items: ["Trading", "My Account", "Vendors", "Brands", "Storefront"],
    },
    {
        name: 'Legal',
        items: ["Licesns", "Refund Policy", "About Us", "Contacts"],
    },
    {
        name: 'Contacts',
        items: ["Feel free get in touch with us via phone or send us a message", "+123456789 01", "Support@khoomi.com"]
    },
]
</script>

<div id='header'>
    <div class='main px2'>
        <div id="logo"/>
        <Input icon=' ' placeholder='Search for Products Brands & Categories' c='mx1'/>
        {#each badge_icons as icon}
            <Icon icon={icon}/>
        {/each}
    </div>
    <div class='navbar px2'>
        <Icon icon=' '/>
        <DropDown opts={categories} c='mx1 mr2'/>
        {#each nav_labels as label, i}
            <span class={selected_nav_label == i ? 'active' : ''} on:click={() => selected_nav_label = i}>{label}</span>
        {/each}
    </div>
</div>
<div id="hero">
    <div class="bg"/>
    <div class="fg">
        <div class="controls pa3">
            <span class="title">GET THE NEW IPHONE 12 <br/> PRO</span>
            <span class="subtitle">a transformative triple-camera system that adds tons of capability without <br/> complexity</span>
            <div class="buttons">
                <input type="button" value='Buy Now  ' class='primary '>
                <input type="button" value='With 599$ with trade-in'>
            </div>
        </div>
        <div class="img"/>
    </div>
</div>
<div id= "watches-collection">
    {#each watches as watch, i}
        {#if i < 4}
            <Card img={watch.img} price={watch.price} title={watch.name}/>
        {/if}
    {/each}
</div>
<div class="explore_other"> <input type="button" value="Explore Other Products"> </div>
<div id=minihero>
    <div class="heroText">
        <span>Sneakers Never Run Out Of Style</span>
        <span>Get 50% Off Sitewide</span>
    </div>
    <div class="explore_other"> <input type="button" value="Start Shopping"> </div>
</div>
<div id="new-collection" class="mt3">
    <p class="title">STRAIGHT FROM NIKE</p>
    <h1 class="title mb2">NEW COLLECTION</h1>
    <div class="products">
        <div class="cards-grid">
            {#each shoes_collection as shoe, i}
                {#if i < 4}
                    <Card img={shoe.img} price={shoe.price} title={shoe.name}/>
                {/if}
            {/each}
        </div>
        <Card mega 
            img={shoes_collection[4].img}
            title={shoes_collection[4].name}
            price={shoes_collection[4].price}
            sale = 'SALE-50%'
            subtext = 'Brand: Nike'
            c='ml1'
        />
    </div>
</div>
<div class="explore_other"> <input type="button" value="Explore Other Products"> </div>
<div id=minihero>
    <div class="heroText">
        <span>Sneakers Never Run Out Of Style</span>
        <span>Get 50% Off Sitewide</span>
    </div>
    <div class="explore_other"> <input type="button" value="Start Shopping"> </div>
</div>
<div id="product-display" class="my3">
    <p class="title">TOP PROUDUCTS</p>
    <h1 class="title mb2">TRENDING THIS WEEK</h1>
    <div class="cards-grid">
        {#each shoes as shoe}
            <Card img={shoe.img} price={shoe.price} title={shoe.name}/>
        {/each}
    </div>
</div>
<div id=minihero>
    <div class="heroText">
        <span>Sneakers Never Run Out Of Style</span>
        <span>Get 50% Off Sitewide</span>
    </div>
    <div class="explore_other"> <input type="button" value="Start Shopping"> </div>
</div>
<div id="footer">
    <div class="footer-end">
        <div class=logo/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
    </div>  
    {#each footer_sections as footer_section}
        <div class="footer-list">
            <b>{footer_section.name}</b>
            {#each footer_section.items as footer_item}
                <span>{footer_item}</span>
            {/each}
        </div>
    {/each}
</div>

<style>
.title {
	 text-align: center;
}
 .explore_other {
	 margin: 2rem 0;
	 display: grid;
	 place-items: center;
}
 .explore_other input {
	 font-size: 1rem;
	 padding: 1rem 2rem;
	 border: 1px solid black;
	 border-radius: 6px;
	 background: none;
}
 #header {
	 width: 100vw;
}
 #header .main {
	 height: 50px;
	 display: flex;
	 align-items: center;
	 position: sticky;
}
 #header .main #logo {
	 width: 100px;
	 height: 100%;
	 background-image: url("./assets/images/khoomi_square.png");
	 background-size: cover;
	 background-repeat: no-repeat;
	 background-position: center;
}
 #header .navbar {
	 height: 50px;
	 display: flex;
	 align-items: center;
	 justify-content: space-between;
}
 #header .navbar span {
	 height: 100%;
	 font-size: 0.75rem;
	 display: flex;
	 align-items: center;
	 cursor: pointer;
	 user-select: none;
	 transition: 0.2s;
}
 #header .navbar span.active {
	 color: var(--acc);
	 border-bottom: 10px solid var(--acc);
}
 #hero {
	 background: black;
	 width: 100%;
	 height: 60vh;
	 position: relative;
}
 #hero .bg {
	 background-image: url("./assets/images/galaxy.png");
	 background-size: cover;
	 background-position: center;
	 height: 100%;
	 opacity: 0.5;
}
 #hero .fg {
	 display: flex;
	 position: absolute;
	 top: 0;
	 width: 100vw;
	 height: 100%;
}
 #hero .fg .img {
	 width: 50%;
	 background-image: url("./assets/images/phones.png");
	 background-size: cover;
}
 #hero .fg .controls {
	 display: grid;
	 place-items: center start;
	 width: 100%;
}
 #hero .fg .controls .title {
	 text-shadow: 3px 3px 1px black;
	 font-weight: bold;
	 font-size: 2.5rem;
	 color: white;
}
 #hero .fg .controls .subtitle {
	 font-weight: bold;
	 color: white;
}
 #hero .fg .controls .buttons input {
	 padding: 0.75rem 1rem;
	 border: none;
	 border-radius: 5px;
	 color: white;
	 font-size: 1rem;
	 font-weight: bold;
	 background: rgba(255, 255, 255, .15);
}
 #hero .fg .controls .buttons input.primary {
	 background: var(--acc);
}
 #new-collection .products {
	 margin: 0 4rem;
	 display: grid;
	 grid-template-columns: 1fr 1fr;
}
 #new-collection .products .cards-grid {
	 display: grid;
	 grid-template-columns: 1fr 1fr;
	 gap: 1rem;
}
 #product-display .cards-grid {
	 margin: 0 4rem;
	 display: grid;
	 grid-template-columns: 1fr 1fr 1fr 1fr;
	 column-gap: 2rem;
	 row-gap: 2rem;
}
 #footer {
	 display: flex;
	 flex-direction: row;
	 justify-content: space-around;
	 margin: 1rem 3rem;
}
 #footer .footer-list {
	 font-size: 0.9rem;
	 display: flex;
	 flex-direction: column;
	 justify-content: space-between;
	 flex-grow: 1;
	 margin: 1rem;
}
 #footer .footer-end {
    font-size: 0.9rem;
	 display: flex;
	 flex-direction: column;
	 flex-grow: 2;
	 justify-content: center;
}
 #footer .footer-end .logo {
	 width: 100px;
	 height: 100%;
	 background-image: url("./assets/images/khoomi_square.png");
	 background-size: cover;
	 background-repeat: no-repeat;
	 background-position: center;
}
#minihero {
	 background-position: center;
	 height: 100%;
	 width: 100%;
	 height: 30vh;
	 position: relative;
	 background-image: url("./assets/images/hero.png");
	 background-size: cover;
     display: flex;
     justify-content: space-between;
     color: white;
    }
#minihero input{
    margin: 1rem;
    border: 1px solid white;
    color: white;
    font-size: 0.8rem;
}
#minihero .heroText{
    display: flex;    
    flex-direction: column;
    justify-content: center;
    margin: 1rem ;
    font-weight: bold;
    font-size:1.2rem;
}
 #watches-collection {
	 padding: 2rem;
	 display: grid;
	 grid-template-columns: 1fr 1fr 1fr 1fr;
	 column-gap: 2rem;
}
</style>
