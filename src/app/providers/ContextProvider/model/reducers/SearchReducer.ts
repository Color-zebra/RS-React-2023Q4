import { SearchAction, SearchActionKinds, SearchState } from '../types';

export const searchReducer = (
  state: SearchState,
  action: SearchAction
): SearchState => {
  switch (action.type) {
    case SearchActionKinds.SET:
      return { ...state, searchTerm: action.payload };
    default:
      throw new Error('No such action type in Search Reducer');
  }
};
