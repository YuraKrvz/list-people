import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { add_list, add_person } from '../../store/actions';

const PeopleList = ()=> {
  const listPeople = useSelector(state => state.listPeopleReducer);
  const dispatch = useDispatch();

   useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => dispatch(add_list(res)))
   }, [])
 
  console.log(listPeople)
  return (
    <>
      <ul>
         {listPeople.listPeople.map(item => {
           return <li key={item.id}>
           Name:{item.name}, e-mail:{item.email}, website:{item.website}, company:{item.company.name}
           <div>
            <button>Edit</button>
            <button>Delete</button>
            <button>Add</button>
           </div>
           </li>
         } )}
      </ul>
    </>
  );
}

export default PeopleList;