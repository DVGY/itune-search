import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  searchStart: ['searchQuery'],
  searchSuccess: ['searchResult'],
  searchFail: ['error'],
});

const Actions = { Types, Creators };

export default Actions;
