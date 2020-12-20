<script lang="ts">

    import { onMount } from 'svelte';
    import panzoom from 'panzoom';

	export let name: string;
    let imagePath: string = "images/eyescan.jpg";
    let scan: HTMLOrSVGImageElement;

    onMount(() => {
    let result:any = panzoom(scan);

    var message:string = "";
    for (var name:string in result) {
        message += name + " ";
    }
    alert(message);
    });


</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
    <img bind:this={scan} alt="eye scan" src={imagePath}/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

    img {
        width: 300px;
    }

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
