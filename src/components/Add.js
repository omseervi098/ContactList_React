import React from "react";
//Add a new contact component
function Add(props) {
  //used bootstrap modal to add a new contact
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-toggle="modal"
            data-bs-target="#addcontact"
          >
            Add Contact
          </button>
          <div
            className="modal fade"
            id="addcontact"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title" id="exampleModalLabel">
                    Add Contact
                  </h4>
                  <button
                    type="button"
                    className="btn-close"
                    id="btn-closed"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  {/* Form to add contact and sending dummy POST request to this URL */}
                  <form
                    className="form-group"
                    action="https://jsonplaceholder.typicode.com/users"
                    method="POST"
                    onSubmit={(e) => {
                      e.preventDefault();
                      props.addContact({
                        name: e.target.name.value,
                        email: e.target.email.value,
                        phone: e.target.phone.value,
                        id: props.size + 1,
                      });
                      e.target.name.value = "";
                      e.target.email.value = "";
                      e.target.phone.value = "";
                      document.getElementById("btn-closed").click();
                    }}
                  >
                    <div className="row mb-3">
                      <label htmlFor="name" className="col-sm-2 col-form-label">
                        Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Enter Name"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="email"
                        className="col-sm-2 col-form-label"
                      >
                        Email
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Enter Email"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="phone"
                        className="col-sm-2 col-form-label"
                      >
                        Phone
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          name="phone"
                          placeholder="Enter Phone"
                        />
                      </div>
                    </div>
                    <button className="btn btn-primary mt-3">
                      Add Contact
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Add;
