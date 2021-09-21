import React, {useState, useEffect} from 'react';
import {Box} from './ElementsPeopleList.js';


const PeopleList = ()=> {
   const [list, setList] = useState([]);

   useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => setList(res))
   }, [])
 
  console.log(list)
  return (
    <>
      <ul>
         {list.map(item => <li onClick={()=> console.log('click')} key={item.id}>{item.name} <strong>{item.phone}</strong></li>)}
      </ul>
    </>
  );
}

export default PeopleList;