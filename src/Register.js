import React from "react";
import Modal from "./Modal.js";

function Register(props) {
  return (
    <Modal show={props.show} handleClose={props.hideModal}>
      <form className="container animate">
      <label for="fname"><b>First Name</b></label>
      <input type="text" placeholder="Enter First Name" name="fname" required autofocus/>

      <label for="lname"><b>Last Name</b></label>
      <input type="text" placeholder="Enter Last Name" name="lname" required/>

      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" required/>

      <label for="phone"><b>Phone</b></label>
      <input type="text" placeholder="Enter Phone" name="phone" required/>

      <label for="age"><b>Age</b></label>
      <input type="text" placeholder="Enter Your Age" name="age" required/>

      <label for="pword"><b>Password</b></label>
      <input type="text" placeholder="Enter  Password" name="pword" required/>

      <label for="rpword"><b>Re-enter Password</b></label>
      <input type="text" placeholder="Re-Enter Password" name="rpword" required/>

      </form>
      <button type="submit">Register</button>
    </Modal>
  );
}

export default Register;