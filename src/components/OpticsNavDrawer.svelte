<script lang="ts">
  import { NavigationDrawer, List } from "smelte";

  const menu = [
    {
      text: "Item 1",
      icon: "favourite",
    },
    {
      text: "Item 2",
      icon: "favourite",
    },
  ];
</script>

<style>
</style>

<div>
  <NavigationDrawer left="true" persistent="true">
    <h4>The Drawer</h4>
    <List items={menu} />
    <hr />
  </NavigationDrawer>
</div>
