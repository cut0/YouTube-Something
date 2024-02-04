export const enableSticky = () => {
  for (const element of document.querySelectorAll("#player canvas")) {
    (element as HTMLElement).style.cssText = "display: none;";
  }

  const player = document.getElementById("player");

  if (player != null) {
    player.style.cssText = "position: sticky; top: 56px; z-index: 400;";
  }
};

export const disableSticky = () => {
  for (const element of document.querySelectorAll("#player canvas")) {
    (element as HTMLElement).style.cssText = "";
  }

  const player = document.getElementById("player");

  if (player != null) {
    player.style.cssText = "";
  }
};
