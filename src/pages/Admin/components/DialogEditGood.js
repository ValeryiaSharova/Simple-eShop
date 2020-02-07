import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import PropTypes from 'proptypes';

const EditGood = ({ onRequestClose, editGood, good }) => {
  const [goodEdit, setGoodEdit] = useState({ ...good });

  const handleEditGood = e => {
    let { value } = e.target;
    if (e.target.name === 'price') {
      value = Number(value);
    }
    setGoodEdit({ ...goodEdit, [e.target.name]: value });
  };

  const edit = e => {
    e.preventDefault();
    editGood(goodEdit);
    onRequestClose();
  };

  return (
    <Dialog open>
      <DialogTitle aria-labelledby="customized-dialog-title">Edit a game</DialogTitle>
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
                  placeholder={good.title}
                  onChange={handleEditGood}
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
                  placeholder={good.description}
                  onChange={handleEditGood}
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
                  placeholder={good.price}
                  onChange={handleEditGood}
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
                  placeholder={good.picture}
                  onChange={handleEditGood}
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
                  placeholder={good.tags}
                  onChange={handleEditGood}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-modal" onClick={edit}>
                  Save
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

EditGood.propTypes = {
  editGood: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  good: PropTypes.object.isRequired,
};

export default EditGood;
