<script lang="ts">
  import "smelte/src/tailwind.css";
  import "./app.css";
  import EyeSelector from "./components/EyeSelector.svelte";
  import EyeInspector from './components/EyeInspector.svelte';

</script>

<style>

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

</style>

<main>
  <!-- Import Icons -->
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet" />
  <EyeSelector />
  <EyeInspector />
</main>
