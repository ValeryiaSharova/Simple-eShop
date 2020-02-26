import React, { useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import PropTypes from 'proptypes';

export default function SimpleRating(props) {
  const { currentUser, setRating, id, deleteRating, ratingArray } = props;
  const { mail } = currentUser;
  const [value, setValue] = React.useState(0);
  let param = false;
  if (value > 0) {
    param = true;
  }

  useEffect(() => {
    const currentUserRating = ratingArray.find(item => item.mail === mail);
    if (currentUserRating) {
      setValue(currentUserRating.ratingValue);
    }
  }, [ratingArray, mail]);

  const handleChange = e => {
    const ratingValue = +e.target.value;
    setValue(ratingValue);
    const rating = { mail, ratingValue };
    setRating(id, rating);
  };

  const handleDelete = () => {
    setValue(0);
    deleteRating(id, mail);
  };

  return (
    <div>
      {!param ? (
        <Box component="fieldset" mb={3} className="mt-1" borderColor="transparent">
          <Rating
            name={`simple-controlled-${id}`}
            value={value}
            className="rating mr-1"
            onChange={handleChange}
          />
        </Box>
      ) : (
        <Box component="fieldset" mb={3} className="mt-1" borderColor="transparent">
          <Rating name="read-only" value={value} className="rating mr-1" readOnly />
          <button type="button" className="btn btn-trash" onClick={handleDelete}>
            <i className="far fa-trash-alt text-center" />
          </button>
        </Box>
      )}
    </div>
  );
}

SimpleRating.propTypes = {
  currentUser: PropTypes.object.isRequired,
  setRating: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  deleteRating: PropTypes.func.isRequired,
  ratingArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};
