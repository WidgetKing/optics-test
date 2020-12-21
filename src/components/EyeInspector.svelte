<script lang="ts">
  import panzoom from "panzoom";
  import { onMount } from "svelte";

  let src:string = "images/eyescan.jpg";

  let scan: HTMLOrSVGImageElement;

  onMount(() => {
    /* let result: any = panzoom(scan); */

    /* window.pz = result; */
  });

</script>

<style>
    img {
        width:100%;
    }

    div {
        display:flex;
        
    }
</style>

<div>
    <img alt="eye scan" {src} />   
</div>
