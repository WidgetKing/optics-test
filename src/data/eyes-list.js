import resourcesJSON from "./resources.json";
import { readable, writable } from "svelte/store";

export const eyeList = readable(resourcesJSON.eyes, function () {});

function createSelected() {
  const { subscribe, set } = writable(0);

  return {
    subscribe,
    set: (value) => set(value),
  };
}

export const selectedEye = createSelected();
