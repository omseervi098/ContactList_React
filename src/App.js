import React, { useEffect, useState, useCallback } from "react";
import "react-toastify/dist/ReactToastify.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { toast, ToastContainer } from "react-toastify";
import Add from "./components/Add";
import List from "./components/List";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
function App() {
  const [contacts, setContacts] = useState([]);
  //State to manage the contacts
  useEffect(() => {
    //Fetch the data from the API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setContacts(data));
  }, []);

  //Add a new contact
  const addContact = (contact) => {
    setContacts([...contacts, contact]);
    toast.success("Contact Added Successfully");
  };
  //Update a contact
  const updateContact = (contact) => {
    const updatedContacts = contacts.map((c) => {
      if (c.id === contact.id) {
        return contact;
      }
      return c;
    });
    setContacts(updatedContacts);
    toast.success("Contact Updated Successfully");
  };
  //Delete a contact
  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((c) => c.id !== id);
    setContacts(updatedContacts);
    toast.success("Contact Deleted Successfully");
  };
  //Below Two function are part of particlesJS library which is used for background animation
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <>
      <div className="App">
        <div className="container text-center">
          {/* Toast Container to display alerts */}
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "#1a12ad",
                },
                opacity: 0.9,
              },
              fpsLimit: 60,

              particles: {
                color: {
                  value: "#00eaff",
                },
                links: {
                  color: "#4bacb5",
                  distance: 100,
                  enable: true,
                  opacity: 0.5,
                  width: 2,
                },
                move: {
                  directions: "none",
                  enable: true,
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: {
                  value: 80,
                },
                opacity: {
                  value: 1,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
          <div className="header">
            <h1>Contact List</h1>
          </div>
          <div className="row">
            {/* Add Contact */}
            <div className="col-8 col-md-5 mx-auto my-3">
              <Add addContact={addContact} size={contacts.length} />
            </div>
            {/* List */}
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
            {/* Footer */}
            <div className="col-12 col-md-12 mx-auto my-3">
              <div className="footer">
                <h3 style={{ color: "white" }}>
                  Check out my other projects on my{" "}
                  <a
                    href="https://www.omprakash.me"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "yellow" }}
                  >
                    <h2 style={{ display: "inline" }}>Portfolio</h2>
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
