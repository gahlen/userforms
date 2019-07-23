import React, { useState, useEffect } from "react";

const Home = () => {

  const [contactData, setContactData] = useState();
  
  useEffect(() => {
    fetch("http://localhost:4000", {
      method: "GET"
    })
    .then(res => res.json())
    .then(data => data.map((name,i) => {
      return (<div key={name.id}>
        {name.firstname} {name.lastname}
      </div>) 
    }))
    .then(names => {setContactData(names)})
    .catch(err => console.log(err))
  });

  return (
    <div id="homePage">
      Welcome To Your Contact List
      <br />
      <br />
      {contactData}
    </div>
  );
};

export default Home;
