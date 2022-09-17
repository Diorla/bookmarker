export default async function getCurrentTabInfo() {
  let queryOptions = { active: true, lastFocusedWindow: true };

  let [tab] = await chrome.tabs.query(queryOptions);
  const title = tab.title;
  const url = tab.url;
  const favicon = tab.favIconUrl;

  return {
    title,
    url,
    favicon,
  };
}
