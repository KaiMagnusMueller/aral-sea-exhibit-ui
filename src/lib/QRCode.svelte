<script lang="ts">
import Image from "./Image.svelte";
    export let QR_Code: any
    export let url: string
    </script>

    <span class="margin-none margin-b-xs">{url}</span>
    <div class="qr-code">
        <Image src={QR_Code}/>
    </div>


<style>

</style>