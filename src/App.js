import List from "./components/List";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Add from "./components/Add";
function App() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setContacts(data));
  }, []);
  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };
  const updateContact = (contact) => {
    const updatedContacts = contacts.map((c) => {
      if (c.id === contact.id) {
        return contact;
      }
      return c;
    });
    setContacts(updatedContacts);
  };
  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((c) => c.id !== id);
    setContacts(updatedContacts);
  };
  return (
    <div className="App p-2">
      <div className="container text-center">
        <div className="header">
          <h1>Contact List</h1>
        </div>
        <div className="row">
          <div className="col-8 col-md-5 mx-auto my-3">
            <Add addContact={addContact} size={contacts.length} />
          </div>
          <div className="col-12 col-md-12 mx-auto my-3">
            {contacts.length !== 0 ? (
              <List
                contacts={contacts}
                editContact={updateContact}
                deleteContact={deleteContact}
              />
            ) : (
              <div className="spinner-border text-danger " role="status">
                <span className="sr-only"> </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
