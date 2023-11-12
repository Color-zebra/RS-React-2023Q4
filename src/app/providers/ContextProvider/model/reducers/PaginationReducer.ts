import {
  PaginationAction,
  PaginationActionKinds,
  PaginationState,
} from '../types';

export const paginationReducer = (
  state: PaginationState,
  action: PaginationAction
): PaginationState => {
  switch (action.type) {
    case PaginationActionKinds.SET_CURR:
      return { ...state, currPage: action.payload };
    case PaginationActionKinds.SET_LAST:
      return { ...state, lastPage: action.payload };
    case PaginationActionKinds.SET_LIMIT:
      return { ...state, currPage: 1, limit: action.payload };
    default:
      throw new Error('No such action type in Pagination Reducer');
  }
};
