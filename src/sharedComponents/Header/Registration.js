import React, { useState } from 'react';
import PropTypes from 'proptypes';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';

const Registration = props => {
  const { addUser, onRequestClose } = props;

  const [newUser, setNewUser] = useState({
    fname: '',
    lname: '',
    mail: '',
    pass: '',
    role: 'user',
    deleteRequest: false,
  });

  const [invalidForm, setInvalidForm] = useState(false);

  const schema = yup.object().shape({
    fname: yup
      .string()
      .min(3, 'First name must be longer')
      .required(),
    lname: yup
      .string()
      .min(3, 'Last name must be longer')
      .required('Required'),
    mail: yup
      .string()
      .email('Email is not valid')
      .required('Required'),
    pass: yup
      .string()
      .min(6, 'Password must be longer')
      .required('Required'),
  });

  const handleAddUser = e => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const add = e => {
    e.preventDefault();
    schema.isValid(newUser).then(valid => {
      if (valid) {
        addUser(newUser);
        onRequestClose();
      } else {
        setInvalidForm(true);
      }
    });
  };

  return (
    <div className="tab-pane" id="register" role="tabpanel">
      <div className="modal-body">
        <Formik
          initialValues={{ fname: '', lname: '', mail: '', pass: '' }}
          validationSchema={schema}
        >
          {({ errors, touched }) => (
            <Form>
              <fieldset>
                <div className="form-group">
                  <label htmlFor="fname">First name:</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="fname"
                    value={newUser.fname}
                    onChange={handleAddUser}
                  />
                  {errors.fname && touched.fname ? (
                    <span className="error text-center">{errors.fname}</span>
                  ) : null}
                </div>
                <div className="form-group">
                  <label htmlFor="lname">Last name:</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="lname"
                    value={newUser.lname}
                    onChange={handleAddUser}
                  />
                  {errors.lname && touched.lname ? (
                    <span className="error text-center">{errors.lname}</span>
                  ) : null}
                </div>
                <div className="form-group">
                  <label htmlFor="mail">E-mail:</label>
                  <Field
                    type="email"
                    className="form-control"
                    name="mail"
                    value={newUser.mail}
                    onChange={handleAddUser}
                  />
                  {errors.mail && touched.mail ? (
                    <span className="error text-center">{errors.mail}</span>
                  ) : null}
                </div>
                <div className="form-group">
                  <label htmlFor="pass">Password:</label>
                  <Field
                    type="password"
                    className="form-control"
                    name="pass"
                    value={newUser.pass}
                    onChange={handleAddUser}
                  />
                  {errors.pass && touched.pass ? (
                    <span className="error text-center">{errors.pass}</span>
                  ) : null}
                </div>
                <div className="text-center mt-2">
                  <button type="submit" onClick={add} className="btn btn-modal">
                    Create account
                  </button>
                  {invalidForm ? <span className="error">Invalid form!</span> : null}
                </div>
              </fieldset>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

Registration.propTypes = {
  addUser: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default Registration;
