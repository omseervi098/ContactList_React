import React from "react";
function Edit(props) {
  return (
    <div className="my-auto">
      <div className="row">
        <div className="col-12">
          <button
            type="button"
            className="btn btn-warning"
            data-bs-toggle="modal"
            data-bs-target={"#editcontact" + props.id}
          >
            Edit
          </button>
          <div
            className="modal fade"
            id={"editcontact" + props.id}
            tabIndex={props.id}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title" id="exampleModalLabel">
                    Edit Contact
                  </h4>
                  <button
                    type="button"
                    className="btn-close"
                    id={"btn-closed1" + props.id}
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  {/* Form to edit contact and sending dummy PUT request to given API */}
                  <form
                    className="form-group"
                    onSubmit={(e) => {
                      e.preventDefault();
                      props.editContact({
                        id: props.id,
                        name: e.target.name.value,
                        email: e.target.email.value,
                        phone: e.target.phone.value,
                      });

                      document.getElementById("btn-closed1" + props.id).click();
                    }}
                    method="PUT"
                    action="https://jsonplaceholder.typicode.com/users"
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
                          defaultValue={props.name}
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
                          defaultValue={props.email}
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
                          defaultValue={props.phone}
                        />
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Edit Contact
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
export default Edit;
