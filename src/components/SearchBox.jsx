import React from 'react';

import { connect } from 'react-redux';

import { Row, Col } from 'antd';
import Actions from '../redux/searchActions';
import { RoundSearch } from './SearchBox-style';

const SearchBox = ({ searchStart }) => {
  // React.useEffect(() => {
  //   // console.log(Actions.Creators.searchStart());
  //   console.log(searchStart());
  //   // searchStart();
  //   return () => {};
  // }, []);

  const handleSearch = (searchQuery) => {
    searchStart(searchQuery);
  };
  //use wrapper.instance for testing
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
