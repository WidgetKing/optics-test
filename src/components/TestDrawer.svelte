<script>
  // This is top src/routes/_layout.svelte.

    import {} from '';
      
  import { List, ListItem, NavigationDrawer } from "smelte";

  const menu = [
    { icon: "unpublished", text: "Text fields" },
    { icon: "unpublished", text: "Buttons" },
    { icon: "unpublished", text: "Selection controls" },
    { icon: "unpublished", text: "Lists" },
    { icon: "check_circle", text: "Navigation Drawers" },
    { icon: "unpublished", text: "Go back" },
  ];

  let path = "components/navigation-drawers";
</script>

<NavigationDrawer
  class="main-nav">
  <h6 class="p-6 ml-1 pb-2 text-xs text-gray-900">Components</h6>
  <List items={menu}>
    <span slot="item" let:item class="cursor-pointer">
      <ListItem
        selected={path.includes(item.to)}
        {...item}
        dense
        navigation />
    </span>
  </List>
  <hr />
</NavigationDrawer>
