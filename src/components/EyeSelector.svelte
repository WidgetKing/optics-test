<script>
  // This is top src/routes/_layout.svelte.

  import { List, ListItem, NavigationDrawer } from "smelte";
      import {eyeList} from '../data/eyes-list';
  /* import { eyes } from "../data/resources.json"; */

  const getIcon = (item) => (item.complete ? "check_circle" : "unpublished");

     console.log("HEY2") 
</script>

<NavigationDrawer class="main-nav">
  <h6 class="p-6 ml-1 pb-2 text-lg text-gray-900">Eye Selection</h6>
  <List items={$eyeList}>
    <span slot="item" let:item class="cursor-pointer">
      <ListItem icon={getIcon(item)}>{item.text}</ListItem>
    </span>
  </List>
  <!--
  <List items={eyes}>
    <span slot="item" let:item class="cursor-pointer">
      <ListItem
          icon={console.log}
        {...item}
        dense
        navigation />
    </span>
  </List>
  -->
  <hr />
</NavigationDrawer>
