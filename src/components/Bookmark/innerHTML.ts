const innerHTML = `<div>
    <div id=close>×</div>
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

export default innerHTML;
