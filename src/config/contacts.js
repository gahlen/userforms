const contacts = []

export const getContacts = () =>{
    return contacts
}

export const addContact = async contact => {
  console.log(contact.firstname);
    let result = false;
    if(contact.firstname &&
        contact.lastname &&
        contact.email &&
        contact.phone &&
        contact.age &&
        contact.password) {
            console.log(contact)
            await fetch("http://localhost:4000", {
                method: "POST",
                headers: {'Content-Type': 'application/json'}, 
                body: JSON.stringify(contact)
              })  
                          contact.id = contacts.length
                          result = true
                          }
    return result
}

export const login = (credentials) => {
    console.log(credentials);
    let result = false
    contacts.forEach(contact => {
        console.log(contact.email);
        console.log(contact.password);
        console.log(credentials.email);
        console.log(credentials.password);
        if(contact.email === credentials.email &&
            contact.password === credentials.password){
                result = true
            }
    })
    return result
}
