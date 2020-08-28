import React from 'react';

import MusicCard from './MusicCard';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectIsLoading,
  selectMusics,
  selectError,
} from '../redux/searchSelelctor';

import PaginationBox from './PaginationBox';

import { Row } from 'antd';

import WithSpinner from './WithSpinner';

const Musics = ({ musics, loading }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [musicCardPerPage] = React.useState(15);

  // Get current posts
  const indexOfLastMusicCard = currentPage * musicCardPerPage;
  const indexOfFirstMusicCard = indexOfLastMusicCard - musicCardPerPage;

  const handleChange = (page, pageSize) => {
    setCurrentPage(page);
  };
  return (
    <React.Fragment>
      <Row gutter={[16, 16]}>
        {' '}
        {musics &&
          musics
            .slice(indexOfFirstMusicCard, indexOfLastMusicCard)
            .map((album) => <MusicCard key={album.trackId} {...album} />)}
      </Row>
      <Row justify="center">
        {musics && (
          <PaginationBox
            defaultCurrent={currentPage}
            total={musics.length}
            defaultPageSize={musicCardPerPage}
            onChange={handleChange}
          />
        )}
      </Row>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  musics: selectMusics,
  loading: selectIsLoading,
  error: selectError,
});

const MusicsWithSpinnerHOC = WithSpinner(Musics);

export default connect(mapStateToProps)(MusicsWithSpinnerHOC);
