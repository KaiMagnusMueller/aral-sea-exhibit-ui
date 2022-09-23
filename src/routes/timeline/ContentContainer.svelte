<div class="content-container grid gap-l">
    <slot />
</div>

<style>
    .content-container {
        flex-grow: 1;
        grid-template-columns: 1fr 3fr;
    }
</style>
