import React from "react";
import Edit from "./Edit";
function List(props) {
  const handleDelete = (id) => {
    props.deleteContact(id);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <ul className="list-group">
            {props.contacts.map((contact) => (
              <li className="list-group-item" key={contact.id}>
                <div className="row">
                  <div className="col-12 col-md-3 my-auto">
                    <h3>{contact.name}</h3>
                  </div>
                  <div className="col-12 col-md-4  my-auto">
                    <p>{contact.email}</p>
                  </div>
                  <div className="col-12 col-md-2  my-auto">
                    <p>{contact.phone}</p>
                  </div>
                  <div className="col-12 col-md-3  my-auto d-flex justify-content-around">
                    <Edit
                      name={contact.name}
                      email={contact.email}
                      phone={contact.phone}
                      id={contact.id}
                      editContact={props.editContact}
                    />
                    <div className="row my-auto">
                      <form
                        action="https://jsonplaceholder.typicode.com/users"
                        method="DELETE"
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleDelete(contact.id);
                        }}
                      >
                        <button className="btn btn-danger" type="submit">
                          Delete
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default List;
