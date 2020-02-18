import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import PropTypes from 'proptypes';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';

const AddGood = ({ onRequestClose, addGood }) => {
  const schema = yup.object().shape({
    title: yup
      .string()
      .trim()
      .min(5, 'Title must be longer')
      .required('Required'),
    description: yup.string(),
    price: yup
      .number()
      .positive('Price must be positive')
      .required('Required'),
    picture: yup
      .string()
      .url('Picture must be url')
      .required('Required'),
    tags: yup
      .string()
      .trim()
      .min(4, 'Tags must be longer')
      .required('Required'),
  });

  const add = values => {
    const goodNew = { id: 0, ...values };
    addGood(goodNew);
    onRequestClose();
  };

  return (
    <Dialog open>
      <DialogTitle aria-labelledby="customized-dialog-title">Add a new game</DialogTitle>
      <DialogContent dividers>
        <div className="modal-body">
          <Formik
            initialValues={{ title: '', description: '', price: 0, picture: '', tags: '' }}
            validationSchema={schema}
            onSubmit={add}
          >
            {({ values, errors, touched }) => (
              <Form>
                <fieldset>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <Field className="form-control" type="text" name="title" value={values.title} />
                    {errors.title && touched.title ? (
                      <span className="error text-center">{errors.title}</span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <Field
                      className="form-control"
                      as="textarea"
                      name="description"
                      value={values.description}
                    />
                    {errors.description && touched.description ? (
                      <span className="error text-center">{errors.description}</span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <Field
                      className="form-control"
                      type="number"
                      name="price"
                      value={values.price}
                    />
                    {errors.price && touched.price ? (
                      <span className="error text-center">{errors.price}</span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="picture">Picture</label>
                    <Field className="form-control" type="url" name="picture" value={values.url} />
                    {errors.picture && touched.picture ? (
                      <span className="error text-center">{errors.picture}</span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="tags">Tags</label>
                    <Field className="form-control" as="textarea" name="tags" value={values.tags} />
                    {errors.tags && touched.tags ? (
                      <span className="error text-center">{errors.tags}</span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <button className="btn btn-modal" type="submit">
                      Create
                    </button>
                  </div>
                </fieldset>
              </Form>
            )}
          </Formik>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onRequestClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AddGood.propTypes = {
  addGood: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default AddGood;
