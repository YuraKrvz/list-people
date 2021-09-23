import React, {useState} from 'react';
import Modal from '../Modal';
import Form from 'react-bootstrap/Form';
import {add_person} from '../../store/actions';
import {useSelector, useDispatch} from 'react-redux';


const Addition = ()=> {
  const [valueInput, setValueInput] = useState({name: '', email: '', website: '', company: {name: ''}});
  const dispatch = useDispatch();
  const listPeople = useSelector(state => state.listPeopleReducer);

  const handlerInput = ()=>{
   dispatch(add_person({
      ...valueInput, 
      id: `${listPeople.listPeople.name}`,
   }))
   setValueInput({...valueInput , name: '', email: '', website: '', company: {name: ''}});
}
  return (
    <>
    <Modal close="close" save="Add" type="Add person" action={handlerInput}>
      <Form.Control 
        value={valueInput.name} 
        onChange={(e)=> e.target.value.length > 0 ? setValueInput({...valueInput, name: e.target.value}) : 'name1'} 
        type="name" placeholder="name" 
      />
      <Form.Control value={valueInput.email} onChange={(e)=> setValueInput({...valueInput, email: e.target.value})} type="email" placeholder="name@example.com" />
      <Form.Control value={valueInput.website} onChange={(e)=> setValueInput({...valueInput, website: e.target.value})} type="website" placeholder="www.website.com" />
      <Form.Control value={valueInput.company.name} onChange={(e)=> setValueInput({...valueInput, company: {name: e.target.value}})} type="company" placeholder="company" />
    </Modal>
    </>
  );
}

export default Addition;