import { writable } from "svelte/store";


export let topics = writable({
    topicList: [
        {
            name: "",
            title: ""
        }
    ],
    currentTopic: ""
})
export let currentYear = writable()