import {ADD_LIST , ADD_PERSON} from '../constants/actionTypes';

const initialState = {
   listPeople: [],
}

const listPeopleReducer = (state = initialState, action)=>{
   switch(action.type){
      case ADD_LIST:
         return {
            ...state,
            listPeople: [...state.listPeople, ...action.payload]
         };
      case ADD_PERSON: 
         return {
            ...state,
            listPeople: [...state.listPeople, action.payload]
         };
        default: return state; 
   }
}

export default listPeopleReducer;