<script>
    import { t } from 'svelte-intl-precompile';
    import { topics } from '../routes/timeline/store';

    function handleClick(event) {
        console.log(event);

        $topics.forEach((topic) => {
            topic.current = false;

            if (event.target.attributes.name.value === topic.name) {
                topic.current = true;
            }
        });
        $topics = $topics;
    }
</script>

<div class="tab-bar flex border-l gap-xxs border-radius-xl text-heading-m">
    {#each $topics as topic (topic.name)}
        <div class:active={topic.current} on:click={handleClick} name={topic.name}>
            {$t('1960.' + topic.name + '.title_short')}
        </div>
    {/each}
</div>

<style>
    .tab-bar {
        margin: auto;
        user-select: none;
        padding: 6px;
    }

    .tab-bar div {
        padding: 6px 16px;

        border-radius: 12px;
    }

    .tab-bar div.active {
        background-color: black;
        color: white;
    }

    .tab-bar div:hover {
        background-color: black;
        color: white;
        cursor: pointer;
    }
</style>
