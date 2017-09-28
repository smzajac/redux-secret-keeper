import * as ActionTypes from '../actions';

export default (state = {photos:[]} ,action) =>{

  switch(action.type){
    case ActionTypes.SET_PHOTO:
      return {
        photos: action.payload
      };
    default:
      return state;
  }
}
