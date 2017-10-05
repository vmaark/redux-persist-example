
import { Actions } from '../actions';
import { StoreState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';
import { REHYDRATE } from 'redux-persist/constants';

export function enthusiasm(state: StoreState, action: Actions): StoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    case REHYDRATE:
      const incoming = action.payload.myReducer;
      if (incoming) {
        return {
          ...state,
          ...incoming
        };
      }
      return state
    default:
      return state;
  }
}
