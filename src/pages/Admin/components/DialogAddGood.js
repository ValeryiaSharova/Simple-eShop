import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import PropTypes from 'proptypes';
import * as yup from 'yup';

const AddGood = ({ onRequestClose, addGood }) => {
  const [goodNew, setGoodNew] = useState({
    id: 0,
    title: '',
    description: '',
    price: 0,
    picture: '',
    tags: '',
  });

  const [error, setError] = useState({ title: '', price: '', picture: '', tags: '' });

  const validUrlRegex = RegExp(
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
  );

  const schema = yup.object().shape({
    title: yup
      .string()
      .min(5)
      .required(),
    price: yup
      .number()
      .positive()
      .required(),
    picture: yup
      .string()
      .url()
      .required(),
    tags: yup
      .string()
      .min(4)
      .required(),
  });

  const handleAddGood = e => {
    let { value } = e.target;
    const { name } = e.target;
    switch (name) {
      case 'title': {
        error.title = value.length < 5 ? 'Title must be longer' : '';
        break;
      }
      case 'price': {
        value = Number(value);
        error.price = value < 0 ? 'Price must be positive' : '';
        break;
      }
      case 'picture': {
        error.picture = validUrlRegex.test(value) ? '' : 'Url is not valid';
        break;
      }
      case 'tags': {
        error.tags = value.length < 4 ? 'Tags must be longer' : '';
        break;
      }
      default:
        break;
    }
    setError({ ...error });
    setGoodNew({ ...goodNew, [name]: value });
  };

  const add = e => {
    e.preventDefault();
    schema.isValid(goodNew).then(valid => {
      if (valid) {
        addGood(goodNew);
        onRequestClose();
      } else {
        alert('Invalid form!');
      }
    });
  };

  return (
    <Dialog open>
      <DialogTitle aria-labelledby="customized-dialog-title">Add a new game</DialogTitle>
      <DialogContent dividers>
        <div className="modal-body">
          <form id="add-good-form" noValidate="novalidate">
            <fieldset>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  className="form-control"
                  type="text"
                  id="title"
                  name="title"
                  required=""
                  aria-required="true"
                  onChange={handleAddGood}
                />
                {error.title.length > 0 ? (
                  <span className="error text-center">{error.title}</span>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  required=""
                  aria-required="true"
                  onChange={handleAddGood}
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  className="form-control"
                  type="number"
                  id="price"
                  name="price"
                  min="0"
                  required=""
                  aria-required="true"
                  onChange={handleAddGood}
                />
                {error.price.length > 0 ? (
                  <span className="error text-center">{error.price}</span>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="picture">Picture</label>
                <input
                  className="form-control"
                  type="url"
                  id="picture"
                  name="picture"
                  required=""
                  aria-required="true"
                  onChange={handleAddGood}
                />
                {error.picture.length > 0 ? (
                  <span className="error text-center">{error.picture}</span>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="tags">Tags</label>
                <textarea
                  className="form-control"
                  id="tags"
                  name="tags"
                  required=""
                  aria-required="true"
                  onChange={handleAddGood}
                />
                {error.tags.length > 0 ? (
                  <span className="error text-center">{error.tags}</span>
                ) : null}
              </div>
              <div className="form-group">
                <button className="btn btn-modal" onClick={add} type="button">
                  Create
                </button>
              </div>
            </fieldset>
          </form>
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
