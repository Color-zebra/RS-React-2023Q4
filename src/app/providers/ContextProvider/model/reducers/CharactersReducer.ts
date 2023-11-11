import {
  CharactersAction,
  CharactersActionKinds,
  CharactersState,
} from '../types';

export const charactersReducer = (
  state: CharactersState,
  action: CharactersAction
): CharactersState => {
  switch (action.type) {
    case CharactersActionKinds.SET:
      return { ...state, characters: action.payload };
    default:
      throw new Error('No such action type in Characters Reducer');
  }
};
