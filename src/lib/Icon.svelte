<script lang="ts">
export let icon = ''
export let debug = false
export let c = ''
</script>

<div class="root {debug?'debug':''} {c}">
    <span class='icon'>{icon}</span>
</div>

<style>
.root {
    position: relative;
}
.icon .icon {
    padding: 1rem;
    user-select: none;
    cursor: pointer;
}
</style>
