import React from "react";

const Comment = () => {
  return (
    <div>
<div class="ui form">
  <div class="fields">
    <div class="field">
      <label>Username</label>
      <input type="text" placeholder="Username" />
    </div>
    <div class="field">
      <label>Password</label>
      <input type="password" />
    </div>
  </div>
  <div class="equal width fields">
    <div class="field">
      <label>First name</label>
      <input type="text" placeholder="First Name" />
    </div>
    <div class="field">
      <label>Middle name</label>
      <input type="text" placeholder="Middle Name" />
    </div>
    <div class="field">
      <label>Last name</label>
      <input type="text" placeholder="Last Name" />
    </div>
  </div>
</div>
</div>
  );
};
export default Comment;
