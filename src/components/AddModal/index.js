import React, {useState} from 'react';
import {Button} from '../ElementsButtons';
import {WrapperModal, BodyModal, Input} from './ElementsAddModal';

import {add_person} from '../../store/actions';
import {useSelector, useDispatch} from 'react-redux';

const AddModal = ()=> {
  const [showModal, setShowModal] = useState(false);
  const [valueInput, setValueInput] = useState({name: '', email: '', website: '', company: {name: ''}});
  const dispatch = useDispatch();
  const listPeople = useSelector(state => state.listPeopleReducer);

  const handlerInput = ()=>{
   dispatch(add_person({
      ...valueInput, 
      id: `${listPeople.listPeople.length + 1}`,
   }))
   setValueInput({...valueInput , name: '', email: '', website: '', company: {name: ''}});
}

  return (
    <>
      <Button onClick={()=> setShowModal(true)}>Add</Button>
      {showModal && 
         <WrapperModal>
            <BodyModal>
               <h3>Add person:</h3>
               <Input value={valueInput.name} onChange={(e)=> setValueInput({...valueInput, name: e.target.value})} placeholder="name" />
               <Input value={valueInput.email} onChange={(e)=> setValueInput({...valueInput, email: e.target.value})} placeholder="e-mail" />
               <Input value={valueInput.website} onChange={(e)=> setValueInput({...valueInput, website: e.target.value})} placeholder="website" />
               <Input value={valueInput.company.name} onChange={(e)=> setValueInput({...valueInput, company: {name: e.target.value}})} placeholder="company" />

               <div>
                  <button onClick={()=> console.log(valueInput)}>show</button>
                  <Button onClick={handlerInput}>Add</Button>
                  <Button onClick={()=> setShowModal(false)}>close</Button>
               </div>
            </BodyModal>
         </WrapperModal>
      }
    </>
    
  );
}

export default AddModal;