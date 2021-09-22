import {ADD_LIST , ADD_PERSON, DELETE_PERSON, EDIT_PERSON} from '../constants/actionTypes';

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
      case DELETE_PERSON:
         return {
            ...state,
            listPeople: state.listPeople.filter(item => item.id !== action.payload),
         }   
      case EDIT_PERSON:
         return {
            ...state,
            listPeople: state.listPeople.find(item => item.id == action.payload)
         };
        default: return state; 
   }
}

export default listPeopleReducer;