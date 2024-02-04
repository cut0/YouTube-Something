import { type Component, createSignal, onMount } from "solid-js";
import { disableSticky, enableSticky } from "../shared/VideoSticky";
import sytles from "./App.module.css";
import { Container } from "./foundation/components/Container";
import { Switch } from "./foundation/components/Switch";
import { injectWebSite } from "./foundation/utils/Injector";

export const App: Component = () => {
  const [isSticky, setIsSticky] = createSignal(false);

  onMount(() => {
    chrome.storage.local.get("sticky", (data) => {
      if (data.sticky) {
        setIsSticky(true);
      }
    });
  });

  const handleOnSticky = () => {
    injectWebSite(enableSticky);
    chrome.storage.local.set({ sticky: true });
    setIsSticky(true);
  };

  const handleOffSticky = () => {
    injectWebSite(disableSticky);
    chrome.storage.local.remove("sticky");
    setIsSticky(false);
  };

  return (
    <Container>
      <h1 class={sytles.title}>YouTube Something</h1>
      <Switch
        checked={isSticky()}
        label="Sticky YouTube Player"
        onChange={(e) => {
          if ((e.target as HTMLInputElement).checked) {
            handleOnSticky();
          } else {
            handleOffSticky();
          }
        }}
      />
    </Container>
  );
};
