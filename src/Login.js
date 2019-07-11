import React from "react";
import Modal from "./Modal.js";

function Login(props) {
  return (
    <Modal show={props.show} handleClose={props.hideModal}>
      <form className="container animate">
        <label for="uname">
          <b>Username</b>
        </label>
        <input type="text" placeholder="Enter Username" name="uname" required />

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember
          me
        </label>

      </form>
      <button type="submit">Login</button>

    </Modal>
  );
}
export default Login;
