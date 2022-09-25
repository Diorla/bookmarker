const innerHTML = `<div>
    <div class="close">
      <a href="https://bookmarker-one.vercel.app/" id="user-email" target="_blank">adedotstar@yahoo.com</a>
      <span id=close>×</span>
    </div>
    <hr/>
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
    <div class="form-control hide" id="desc-wrapper">
      <label for="description" id="desc-label">Description <span>></span></label>
      <textarea name="description" id="description" cols="30" rows="4" ></textarea>
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

export default innerHTML;
