import { writable } from "svelte/store";


export let topics = writable({
    topicList: [
        {
            value: "",
            title: ""
        }
    ],
    currentTopic: ""
})
export let currentYear = writable()
export let acknowledgeModelReset = writable(false)