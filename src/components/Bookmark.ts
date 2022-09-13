import { v4 } from "uuid";
import createComponent from "../modules/createComponent";
import signOut from "../services/signOut";
import { render } from "../render";
import addUrl from "../services/addUrl";
import deleteUrl from "../services/deleteUrl";
import getUrl from "../services/getUrl";
import { User } from "firebase/auth";
import getCurrentTabInfo from "../modules/getCurrentTabInfo";

export default async function Bookmark(user: User) {
  const { title, url } = await getCurrentTabInfo();
  const currentTags: string[] = [];
  const list = await getUrl(user.uid, url);
  const data = list[0];

  const innerHTML = `<div>
    <div id="url"></div>
    <hr/>
    <div class="form-control">
      <label for="title">Name</label>
      <input id="title" name="title"/>
    </div>
    <div class="form-control">
      <label for="tags">Tags</label>
      <input type="text" id="tags" name="tags"/>
    </div>
    <div id="tags-wrapper"></div>
    <div class="popup-control">
      <button id="add-url">Save</button>
      <button id="remove-url" disabled>Remove</button>
    </div>
    <div class="center">
      <button class="btn-link" id="logout">Logout</button>
    </div>
  </div>`;

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

  logoutElem?.addEventListener("click", signOut);
  titleElem.value = data?.title || title;
  urlElem.textContent = url;
  const docId = data?.id || v4();
  addUrlElem?.addEventListener("click", () => {
    addUrlElem?.setAttribute("disabled", "true");
    addUrl(
      user.uid,
      { title: titleElem.value, url, tags: currentTags },
      docId
    ).then(() => {
      removeUrlElem?.removeAttribute("disabled");
    });
  });

  tagInputElem?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      currentTags.push(tagInputElem?.value);
      tagInputElem.value = "";
      let str = "";
      currentTags.forEach((item) => (str += `<span class=tag>${item}</span>`));
      tagsWrapperElem.innerHTML = str;
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
    const { tags = [] } = data;
    currentTags.push(...tags);
    let str = "";
    currentTags.forEach((item) => (str += `<span class=tag>${item}</span>`));
    tagsWrapperElem.innerHTML = str;
  }

  titleElem?.addEventListener("input", () => {
    addUrlElem?.removeAttribute("disabled");
  });
}
