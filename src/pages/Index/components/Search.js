import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import PropTypes from 'proptypes';

const Search = ({ search }) => {
  const handleSearchTag = e => {
    search(e.currentTarget.value);
  };

  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        onChange={handleSearchTag}
      />
    </Form>
  );
};

Search.propTypes = {
  search: PropTypes.func.isRequired,
};

export default Search;
