<script lang="ts">
export let img = ''
export let title = 'Title'
export let price = '0$'
export let mega = false

export let sale = '0%'
export let subtext = 'subtext'
export let c = ''
export let debug = false
</script>

{#if mega}
    <div class="card mega {debug?'debug':''} {c}">
        <div class="price-bar">
            <span class="sale-badge">{sale}</span>
            <span class="price-tag">{price}</span>
        </div>
        <div class="card-img" style="background-image: url('./assets/images/{img}');"/>
        <h2>{title}</h2>
        <span>{subtext}</span>
    </div>
{:else}
    <div class="card">
        <div class="card-img" style="background-image: url('./assets/images/{img}');"/>
        <div class="card-info">
            <span>{title}</span>
            <span class="price-tag">{price}</span>
        </div>
    </div>
{/if}

<style>
.card {
	 display: flex;
	 flex-direction: column;
	 border-radius: 10px;
	 background-color: #f5f5f5;
	 transition: 0.5s;
}
 .card .card-img {
	 border-radius: 0.7rem;
	 background-size: contain;
	 background-position: center;
	 background-repeat: no-repeat;
	 height: 10rem;
}
 .card .card-info {
	 padding: 0.25rem;
	 display: flex;
	 justify-content: space-between;
	 align-items: center;
	 margin: 0 0.5rem;
}
 .card .price-tag {
	 background-color: white;
	 border-radius: 18px;
	 padding: 1vh 1vw;
	 text-align: center;
	 color: #ff4f04;
	 font-size: 0.8em;
}
 .card:hover {
	 box-shadow: 2px 2px 5px grey;
}
 .mega {
	 background: #f5f5f6;
	 padding: 0.75rem;
}
 .mega .card-img {
	 height: 20rem;
}
 .mega .price-bar {
	 display: flex;
	 justify-content: space-between;
	 align-items: center;
}
 .mega .price-tag {
	 background-color: white;
}
 .mega .sale-badge {
	 background-color: black;
	 color: white;
	 border-radius: 14px;
	 padding: 0.25rem 0.5rem;
	 font-size: 0.75em;
}
</style>
