import React, {useState} from 'react';
import Modal from '../Modal';
import Form from 'react-bootstrap/Form';
import {edit_person} from '../../store/actions';
import {useDispatch} from 'react-redux';

const Editing = ({item})=> {
   const [valueInput, setValueInput] = useState({
      name: item.name, 
      email: item.email, 
      website: item.website, 
      company: {name: item.company.name}
   });
   const dispatch = useDispatch();

   const handlerInput = ()=>{
      dispatch(edit_person({
         ...valueInput, 
         id: `${item.id}`,
         changed: true,
      }))
   }

  return (
    <>
      <Modal close="close" save="Edit" type="Edit person" action={handlerInput} btnType="btn btn-warning">
         <Form.Control value={valueInput.name} onChange={(e)=> setValueInput({...valueInput, name: e.target.value})} type="name" placeholder="name" />
         <Form.Control value={valueInput.email} onChange={(e)=> setValueInput({...valueInput, email: e.target.value})} type="email" placeholder="name@example.com" />
         <Form.Control value={valueInput.website} onChange={(e)=> setValueInput({...valueInput, website: e.target.value})} type="website" placeholder="www.website.com" />
         <Form.Control value={valueInput.company.name} onChange={(e)=> setValueInput({...valueInput, company: {name: e.target.value}})} type="company" placeholder="company" />
      </Modal>   
    </>
  );
}

export default Editing;