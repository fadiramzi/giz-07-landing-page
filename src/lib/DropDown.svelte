<script lang="ts">
export let opts = []
export let debug = false
export let c = ''
</script>

<select class="DropDown {debug?'debug':''} {c}">
    {#each opts as option, i}
        <option selected={(i == 0)}>{option}</option>
    {/each}
</select>

<style>
.DropDown {
    border: none;
    cursor: pointer;
}
</style>
