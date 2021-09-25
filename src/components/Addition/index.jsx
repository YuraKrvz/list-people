import React, {useState} from 'react';
import Modal from '../Modal';
import Form from 'react-bootstrap/Form';
import {add_person} from '../../store/actions';
import {useSelector, useDispatch} from 'react-redux';

const Addition = ()=> {
  const [valueInput, setValueInput] = useState({name: '', email: '', website: '', company: {name: ''}});
  const dispatch = useDispatch();
  const listPeople = useSelector(state => state.listPeopleReducer);

  // const [disabled, setDisabled] = useState(true);

  const handlerInput = ()=>{
   dispatch(add_person({
      ...valueInput, 
      id: parseFloat(listPeople.listPeople.length) + 1,
   }))
   setValueInput({
     ...valueInput , 
     name: '', 
     email: '', 
     website: '', 
     company: {name: ''}}
   );
  }
  const validation = (e)=> {
    let input = e.target.dataset.input;
    console.log(input)
    if(input === 'company'){
      setValueInput({...valueInput, company: {name: e.target.value}})
      setDisabled(false);
    } if(input) {
      setValueInput({...valueInput, [input]: e.target.value})
      setDisabled(true);
    }  
  }

  return (
    <>
    <Modal close="close" save="Add" type="Add person" action={handlerInput} disabled={disabled}>
      <Form.Control 
        value={valueInput.name} 
        onChange={validation} 
        type="name" placeholder="name"
        data-input="name"
      />
      <Form.Control 
        value={valueInput.email} 
        onChange={validation} 
        type="email" placeholder="name@example.com" 
        data-input="email"
      />
      <Form.Control 
        value={valueInput.website} 
        onChange={validation} 
        type="website" placeholder="www.website.com" 
        data-input="website"
      />
      <Form.Control 
        value={valueInput.company.name} 
        onChange={validation} 
        type="company" placeholder="company" 
        data-input="company"
      />
    </Modal>
    </>
  );
}

export default Addition;