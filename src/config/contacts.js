const contacts = []

export const getContacts = () =>{
    return contacts
}

export const addContact = contact => {
  console.log(contact.firstname);
    let result = false;
    if(contact.firstname &&
        contact.lastname &&
        contact.email &&
        contact.phone &&
        contact.age &&
        contact.password) {
                          contact.id = contacts.length
                          contacts.push(contact);
                          result = true
                          console.log(contacts);
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
