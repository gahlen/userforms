import React from "react"; 
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Login from "../components/Login";
import ResetPassword from "../components/ResetPassword";

const Routes = ({ getContacts, addContact, login }) => {
  return (
    <>
      <Route
        exact
        path="/"
        component={() => <Home getContacts={getContacts} />}
      />
      <Route
        path="/auth"
        component={() => <Auth addContact={addContact} login={login} />}
      />
      <Route path="/login" component={() => <Login login={login} />} />
      <Route path="/forgot" component={ResetPassword} />
    </>
  );
};

export default Routes;
