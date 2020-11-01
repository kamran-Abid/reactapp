import React, { useState } from "react"; //

const Contact = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    phoneno: "",
    address1: "",
    address2: "",
    city: "",
    zip: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmin = (e) => {
    e.preventDefault();
    alert(
      `email: ${data.email}\n
      Password: ${data.password}
      Phone no# : ${data.phoneno}
      Address1: ${data.address1}
      Address2: ${data.address2}
      City: ${data.city}
      Zip code: ${data.zip}`
    );
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-sm-12 mx-auto mb-5 bg-light">
            <form className="p-5" onSubmit={formSubmin}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Enter Email Address"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword4">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Enter password"
                    name="password"
                    value={data.password}
                    onChange={InputEvent}
                  />
                </div>
              </div>
              <div className="form-group col-md-6">
                <label for="inputEmail4">Phone number</label>
                <input
                  type="number"
                  className="form-control"
                  id="inputNumber"
                  placeholder="Enter Phone number"
                  name="phoneno"
                  value={data.number}
                  onChange={InputEvent}
                />
              </div>
              <div className="form-group">
                <div>
                  <label for="exampleFormControlFile1">
                    Enter your passport size photo
                  </label>
                </div>
                <div>
                  <input
                    type="file"
                    className="form-control-file"
                    id="exampleFormControlFile1"
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="inputAddress">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="eg. 1234 Main St"
                  name="address1"
                  value={data.address1}
                  onChange={InputEvent}
                />
              </div>
              <div className="form-group">
                <label for="inputAddress2">Address 2</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                  name="address2"
                  value={data.address2}
                  onChange={InputEvent}
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputCity">City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCity"
                    placeholder="Enter your city"
                    name="city"
                    value={data.city}
                    onChange={InputEvent}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputState">State</label>
                  <select id="inputState" className="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="form-group col-md-4">
                  <label for="inputZip">Zip</label>
                  <input
                    type="text"
                    className="form-control "
                    id="inputZip"
                    placeholder="Enter city zip code"
                    name="zip"
                    value={data.zip}
                    onChange={InputEvent}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" for="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-outline-primary">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
