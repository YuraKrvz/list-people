import { ADD_LIST, ADD_PERSON, DELETE_PERSON, EDIT_PERSON } from "../constants/actionTypes";

export const add_list = (obj) => ({
   type: ADD_LIST,
   payload: obj,
});

export const add_person = (obj) => ({
   type: ADD_PERSON,
   payload: obj,
});

export const delete_person = (obj)=>({
   type: DELETE_PERSON,
   payload: obj.id,
});

export const edit_person = (obj) => ({
   type: EDIT_PERSON,
   payload: obj,
})




















export const setName = (obj)=> ({
   type: 'ADD_NAME',
   payload: obj,
});
