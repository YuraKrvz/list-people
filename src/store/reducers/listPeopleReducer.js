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
         const index = state.listPeople.findIndex(item => item.id == action.payload.id)
         if(index >= 0){
            state.listPeople[index] = action.payload;
         }
         return {
            ...state,
            listPeople: [...state.listPeople]
         };
        default: return state; 
   }
}

export default listPeopleReducer;