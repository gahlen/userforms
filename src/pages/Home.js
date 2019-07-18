import React from "react";

const Home = ({ getContacts }) => {
  const contacts = getContacts().map(contact => (
    <div key={contact.id}>
      {contact.firstname} {contact.lastname}
    </div>
  ));
  return (
    <div id="homePage">
      Welcome To Your Contact List
      {contacts}
    </div>
  );
};

export default Home;
