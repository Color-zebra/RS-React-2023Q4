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
    case PaginationActionKinds.SET:
      return action.payload;
    default:
      throw new Error('No such action type in Pagination Reducer');
  }
};
