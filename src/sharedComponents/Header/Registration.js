import React from 'react';
import PropTypes from 'proptypes';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';

const Registration = props => {
  const { addUser, onRequestClose } = props;

  const schema = yup.object().shape({
    fname: yup
      .string()
      .trim()
      .min(3, 'First name must be longer')
      .required('Required'),
    lname: yup
      .string()
      .trim()
      .min(3, 'Last name must be longer')
      .required('Required'),
    mail: yup
      .string()
      .email('Email is not valid')
      .required('Required'),
    pass: yup
      .string()
      .trim()
      .min(6, 'Password must be longer')
      .required('Required'),
  });

  const add = values => {
    const newUser = { ...values, role: 'user', deleteRequest: false };
    addUser(newUser);
    onRequestClose();
  };

  return (
    <div className="tab-pane" id="register" role="tabpanel">
      <div className="modal-body">
        <Formik
          initialValues={{ fname: '', lname: '', mail: '', pass: '' }}
          validationSchema={schema}
          onSubmit={add}
        >
          {({ values, errors, touched }) => (
            <Form>
              <fieldset>
                <div className="form-group">
                  <label htmlFor="fname">First name:</label>
                  <Field type="text" className="form-control" name="fname" value={values.fname} />
                  {errors.fname && touched.fname ? (
                    <span className="error text-center">{errors.fname}</span>
                  ) : null}
                </div>
                <div className="form-group">
                  <label htmlFor="lname">Last name:</label>
                  <Field type="text" className="form-control" name="lname" value={values.lname} />
                  {errors.lname && touched.lname ? (
                    <span className="error text-center">{errors.lname}</span>
                  ) : null}
                </div>
                <div className="form-group">
                  <label htmlFor="mail">E-mail:</label>
                  <Field type="email" className="form-control" name="mail" value={values.mail} />
                  {errors.mail && touched.mail ? (
                    <span className="error text-center">{errors.mail}</span>
                  ) : null}
                </div>
                <div className="form-group">
                  <label htmlFor="pass">Password:</label>
                  <Field type="password" className="form-control" name="pass" value={values.pass} />
                  {errors.pass && touched.pass ? (
                    <span className="error text-center">{errors.pass}</span>
                  ) : null}
                </div>
                <div className="text-center mt-2">
                  <button type="submit" className="btn btn-modal">
                    Create account
                  </button>
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
