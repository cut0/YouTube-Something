import { enableSticky } from "../shared/VideoSticky";

const DURATION = 1000;

chrome.storage.local.get("sticky", (data) => {
  if (data.sticky) {
    setTimeout(() => {
      enableSticky();
    }, DURATION);
  }
});
