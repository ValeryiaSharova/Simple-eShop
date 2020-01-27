import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import PropTypes from 'proptypes';

const AddGood = ({ onRequestClose, show, addGood }) => {
  const [titleGood, setTitle] = useState('');
  const [descriptionGood, setDescription] = useState('');
  const [priceGood, setPrice] = useState('');
  const [pictureGood, setPicture] = useState('');
  const [tagsGood, setTags] = useState('');

  const add = e => {
    e.preventDefault();
    addGood({
      title: titleGood,
      description: descriptionGood,
      price: priceGood,
      picture: pictureGood,
      tags: tagsGood,
    });
    onRequestClose();
  };

  return (
    <Dialog open={show}>
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
                  onChange={e => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  required=""
                  aria-required="true"
                  onChange={e => {
                    setDescription(e.target.value);
                  }}
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
                  onChange={e => {
                    setPrice(e.target.value);
                  }}
                />
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
                  onChange={e => {
                    setPicture(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="tags">Tags</label>
                <textarea
                  className="form-control"
                  id="tags"
                  name="tags"
                  required=""
                  aria-required="true"
                  onChange={e => {
                    setTags(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-modal" onClick={add}>
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
  show: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default AddGood;
