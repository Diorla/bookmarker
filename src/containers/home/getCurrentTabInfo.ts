declare const browser: any;

export default async function getCurrentTabInfo(
  callback: (arg: { title: string; url: string; favicon: string }) => void
) {
  let queryOptions = { active: true, lastFocusedWindow: true };

  let [tab] =
    (await chrome.tabs.query(queryOptions)) ||
    (await browser.tabs.query(queryOptions));

  const title = tab.title || "";
  const url = tab.url || "";
  const favicon = tab.favIconUrl || "";

  callback({
    title,
    url,
    favicon,
  });
}
