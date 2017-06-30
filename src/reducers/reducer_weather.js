import {FETCH_WEATHER} from '../actions/action_fetch_weather';

export default function(state=[], action){
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]);
      // the principle is: don't mutate the existing state, return a new one
      return [action.payload.data, ...state];
  }
  return state;
}
