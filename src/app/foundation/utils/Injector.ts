export const getCurrentTab = async () => {
  const queryOptions = { active: true, lastFocusedWindow: true };
  const [tab] = await chrome.tabs.query(queryOptions);
  return tab;
};

export const injectWebSite = async (handler: () => void) => {
  const tab = await getCurrentTab();
  if (tab == null || tab.id == null) {
    return;
  }

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: handler,
  });
};
