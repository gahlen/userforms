import React from "react";
import Modal from "./Modal.js";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
    console.log(target.value);
 };
  
  render() {
    return (
      <Modal show={this.props.show} handleClose={this.props.hideModal}>
        <React.Fragment>
        <form className="container animate">
          <label htmlFor="username">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
          
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          
        </form>
        
        </React.Fragment>
        <button type="submit">Login</button>
      </Modal>
    );
  };
}

export default Login;
