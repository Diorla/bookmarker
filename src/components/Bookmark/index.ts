import { v4 } from "uuid";
import createComponent from "../../modules/createComponent";
import signOut from "../../services/signOut";
import { render } from "../../render";
import addUrl from "../../services/addUrl";
import deleteUrl from "../../services/deleteUrl";
import getUrl from "../../services/getUrl";
import { User } from "firebase/auth";
import getCurrentTabInfo from "../../modules/getCurrentTabInfo";
import innerHTML from "./innerHTML";

export default async function Bookmark(user: User) {
  const { title, url, favicon } = await getCurrentTabInfo();
  const list = await getUrl(user.uid, url);
  const data = list[0];

  const elem = createComponent({
    tagName: "div",
    innerHTML,
  });

  render(elem);

  const logoutElem = document.getElementById("logout");
  const titleElem = document.getElementById("title") as HTMLInputElement;
  const urlElem = document.getElementById("url");
  const removeUrlElem = document.getElementById("remove-url");
  const addUrlElem = document.getElementById("add-url");
  const tagInputElem = document.getElementById("tags") as HTMLInputElement;
  const tagsWrapperElem = document.getElementById("tags-wrapper");
  const closeElem = document.getElementById("close");

  logoutElem?.addEventListener("click", signOut);

  titleElem.value = data?.title || title;
  urlElem.textContent = url;
  const docId = data?.id || v4();
  const currentTags: string[] = data?.tags || [];

  addUrlElem?.addEventListener("click", () => {
    addUrlElem?.setAttribute("disabled", "true");
    addUrl(
      user.uid,
      { favicon, title: titleElem.value, url, tags: currentTags },
      docId
    ).then(() => {
      removeUrlElem?.removeAttribute("disabled");
    });
  });

  const addTags = () => {
    let str = "";
    currentTags.forEach(
      (item, idx) => (str += `<span class=tag data-key=${idx}>${item}</span>`)
    );
    tagsWrapperElem.innerHTML = str;

    const tagSpanElem = document.querySelectorAll("#tags-wrapper > span");

    tagSpanElem.forEach((item) => {
      item.addEventListener("click", () => {
        const {
          dataset: { key },
        } = item as HTMLElement;
        currentTags.splice(Number(key), 1);
        addUrlElem?.removeAttribute("disabled");
        addTags();
      });
    });
  };

  tagInputElem?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      currentTags.push(tagInputElem?.value);
      tagInputElem.value = "";
      addTags();
      addUrlElem?.removeAttribute("disabled");
    }
  });
  removeUrlElem?.addEventListener("click", () => {
    addUrlElem?.removeAttribute("disabled");
    deleteUrl(user.uid, docId).then(() => {
      removeUrlElem?.setAttribute("disabled", "true");
    });
  });
  if (data) {
    addUrlElem?.setAttribute("disabled", "true");
    removeUrlElem?.removeAttribute("disabled");

    let str = "";
    currentTags.forEach((item) => (str += `<span class=tag>${item}</span>`));
    tagsWrapperElem.innerHTML = str;
  }

  titleElem?.addEventListener("input", () => {
    addUrlElem?.removeAttribute("disabled");
  });

  closeElem.addEventListener("click", () => {
    window.close();
  });
  addTags();
}
