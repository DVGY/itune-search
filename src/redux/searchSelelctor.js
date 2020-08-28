import { createSelector } from 'reselect';

const search = (state) => state.search;

export const selectMusics = createSelector(
  [search],
  (search) => search.searchResult
);

export const selectIsLoading = createSelector(
  [search],
  (search) => search.loading
);

export const selectError = createSelector([search], (search) => search.error);
