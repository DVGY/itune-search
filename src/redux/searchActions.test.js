import Actions from './searchActions';

it('should create an action to start search', () => {
  const searchQuery = 'Michael Jackson';
  const expectionAction = {
    type: Actions.Types.SEARCH_START,
    searchQuery,
  };

  expect(Actions.Creators.searchStart(searchQuery)).toEqual(expectionAction);
});
