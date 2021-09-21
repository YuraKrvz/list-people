import { ADD_LIST, ADD_PERSON } from "../constants/actionTypes";

export const add_list = (obj) => ({
   type: ADD_LIST,
   payload: obj,
});

export const add_person = (obj) => ({
   type: ADD_PERSON,
   payload: obj,
});





















export const setName = (obj)=> ({
   type: 'ADD_NAME',
   payload: obj,
});
