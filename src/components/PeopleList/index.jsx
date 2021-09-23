import React, {useEffect} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import {useSelector, useDispatch} from 'react-redux';
import {add_list} from '../../store/actions';
import Editing from '../Editing';
import Deleting from '../Deleting';

const PeopleList = ()=> {
  const listPeople = useSelector(state => state.listPeopleReducer);
  const dispatch = useDispatch();

   useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => dispatch(add_list(res)))
   }, [])
   console.log(listPeople);
   
  return (
    <div >
      <ListGroup style={{width: '700px'}}>
         {listPeople.listPeople.map(item => {
           return <ListGroup.Item key={item.id}>
           <ListGroup>
             <ListGroup.Item className="bg-secondary fw-bold">Name: {item.name}</ListGroup.Item>   
             <ListGroup.Item className="bg-light">e-mail: {item.email}</ListGroup.Item>   
             <ListGroup.Item className="bg-light">website: {item.website}</ListGroup.Item>   
             <ListGroup.Item className="bg-light">company: {item.company.name}</ListGroup.Item>  
             {item.changed ? <ListGroup.Item className="text-danger">was changed <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span></ListGroup.Item>  : null}   
           </ListGroup>

           

           <div className="btn-group" role="group" aria-label="Basic example">
            <Editing item={item} />
            <Deleting item={item} />
           </div>
           </ListGroup.Item>
         } )}
      </ListGroup>
    </div>
  );
}

export default PeopleList;