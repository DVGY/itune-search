import React from 'react';

import { connect } from 'react-redux';

import Actions from '../redux/searchActions';
import { RoundSearch } from './SearchBox-style';

const SearchBox = ({ searchStart }) => {
  const handleSearch = (searchQuery) => {
    searchStart(searchQuery);
  };

  return (
    <React.Fragment>
      <RoundSearch
        placeholder="Artist Name ........"
        onSearch={(searchQuery) => handleSearch(searchQuery)}
        enterButton
        id="search-box"
      />
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  searchStart: (searchQuery) =>
    dispatch(Actions.Creators.searchStart(searchQuery)),
});

export default connect(null, mapDispatchToProps)(SearchBox);
export { SearchBox };
