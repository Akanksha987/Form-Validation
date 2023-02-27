import React, { useState } from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Signup = () => {
  const [firstName, setfirstName] = useState("Harshit");
  const [lastName, setlastName] = useState("Maheshwari");
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("This field is required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("This field is required"),
    Enterpriseid: Yup.string()
      .min(9, "Id must be exactly of 9 characters")
      .matches(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/)
      .required("This field is required"),
    Number: Yup.string()
      .min(10, "Number should be exactly of 10 characters")
      .max(10, "Contact Number should not exceed 10 digit")
      .matches(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/)
      .required("This field is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    experience: Yup.number().positive().required("This field is required"),
    lead: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("This field is required"),
    skill: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("This field is required"),
    project: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("This field is required"),
    client: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("This field is required"),
    resource: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("This field is required"),
    clientEmail: Yup.string()
      .email("Email is invalid")
      .required("Email is required"),
    level: Yup.number().positive().required("This field is required"),
  });
  return (
    <Formik
      initialValues={{
        firstName: firstName,
        lastName: lastName,
        Number: "",
        Enterpriseid: "",
        email: "",
        experience: "",
        lead: "",
        skill: "",
        project: "",
        client: "",
        resource: "",
        clientEmail: "",
        level: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div id="form">
          <div id="col1">
            <h1>Update Record</h1>
            <h2>Welcome:</h2>
          </div>
          <Form>
            <div id="top">
              <TextField
                label="First Name:"
                name="firstName"
                type="text"
                placeholder="First Name"
              />
              <TextField
                label="Last Name:"
                name="lastName"
                type="text"
                placeholder="Last Name"
              />
              <TextField
                label="Enterprise Id:"
                name="Enterpriseid"
                type="text"
                placeholder="Enterprise Id"
              />
              <TextField
                label="Contact Number:"
                name="Number"
                type="text"
                placeholder="Number"
              />
            </div>
            <hr />
            <div>
              <div id="center">
                <TextField
                  label="People Lead:"
                  name="lead"
                  type="text"
                  placeholder="People Lead"
                />
                <TextField
                  label="People Lead Id:"
                  name="email"
                  type="text"
                  placeholder="People Lead Id"
                />
                <TextField
                  label="Experience(yrs):"
                  name="experience"
                  type="number"
                  placeholder="Experience"
                />
                <TextField label="Joining Date:" name="number" type="date" />
                <TextField
                  label="Career Level:"
                  name="level"
                  type="number"
                  placeholder="Career Level"
                />
                <TextField
                  label="Primary Skills:"
                  name="skill"
                  type="text"
                  placeholder="Primary Skills"
                />
                <TextField
                  label="Project Name:"
                  name="project"
                  type="text"
                  placeholder="Project Name"
                />
                <TextField
                  label="Client Name:"
                  name="client"
                  type="text"
                  placeholder="Client Name"
                />
                <TextField
                  label="ClientJoining Date:"
                  name="Enterpriseid"
                  type="date"
                />
                <TextField
                  label="Client Email Id"
                  name="clientEmail"
                  type="email"
                  placeholder=" Client Email"
                />
              </div>
              <div id="bottom">
                <TextField
                  label="Resource Status:"
                  name="resource"
                  type="text"
                  placeholder="Project Name"
                />
                <TextField label="Start Date:" name="firstname" type="date" />
                <TextField label="End Date:" name="Enterpriseid" type="date" />
              </div>
            </div>
            <div id="button">
              <Link to="/Thank">
                <button type="submit" id="submit">
                  Submit
                </button>
              </Link>
              <button type="reset" id="reset">
                Reset
              </button>
              <button type="back" disabled id="back">
                Back
              </button>
            </div>
          </Form>
          <div></div>
        </div>
      )}
    </Formik>
  );
};
export default Signup;
