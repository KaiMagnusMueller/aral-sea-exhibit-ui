<script lang="ts">
    import { onMount } from 'svelte';

    import { t } from 'svelte-intl-precompile';
    import { topics } from '../routes/timeline/store';

    onMount(() => {
        if (!$topics.currentTopic) {
            $topics.currentTopic = $topics.topicList[0].value;
        }
    });

    function handleClick(event: MouseEvent) {
        console.log(event);

        $topics.currentTopic = event.target.attributes.name.value;

        $topics = $topics;
    }
</script>

<div class="tab-bar flex border-l gap-xxs border-radius-xl text-heading-m">
    {#each $topics.topicList as topic (topic.value)}
        <div
            class:active={$topics.currentTopic === topic.value}
            on:click={handleClick}
            name={topic.value}
        >
            {$t('1960.' + topic.value + '.title_short')}
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
