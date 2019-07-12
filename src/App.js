import React, { Component } from "react";
import BodyBackgroundColor from "react-body-backgroundcolor";
import Login from "./Login.js";
import Register from "./Register.js";

class Dashboard extends Component {
  state = { showLogin: false, showRegister: false };

  showLoginModal = () => {
    this.setState({ showLogin: true });
  };

  hideLoginModal = () => {
    this.setState({ showLogin: false });
  };

  showRegisterModal = () => {
    this.setState({ showRegister: true });
  };

  hideRegisterModal = () => {
    this.setState({ showRegister: false });
  };

  render() {
    return (
      <BodyBackgroundColor backgroundColor="aquamarine">
        <main>
          <h1>User Dashboard</h1>
          <Login show = {this.state.showLogin } hideModal = {this.hideLoginModal} />
          <Register show = {this.state.showRegister } hideModal = {this.hideRegisterModal}/>
          <button type="button" onClick={this.showLoginModal}>
            Login
          </button>
          <button type="button" onClick={this.showRegisterModal}>
            Register
          </button>
        </main>
      </BodyBackgroundColor>
    );
  }
}
export default Dashboard;
const container = document.createElement("div");
document.body.appendChild(container);
//ReactDOM.render(<Dashboard />, container);
