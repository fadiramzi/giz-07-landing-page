<script lang="ts">
export let icon = ''
export let placeholder = ''
export let debug = false
export let c = ''
</script>

<div class="Input {debug?'debug':''} {c}">
    <input class="input" type="text" placeholder={placeholder}>
    <span class="icon">{icon}</span>
</div>

<style>
.Input {
	 display: flex;
	 width: 100%;
	 align-items: center;
	 border: 1px solid #dfdfdf;
}
 .Input .icon {
	 padding: 10px;
}
 .Input .input {
	 background: none;
	 width: 100%;
	 padding: 0 1%;
	 outline: none;
	 border: none;
}

</style>
