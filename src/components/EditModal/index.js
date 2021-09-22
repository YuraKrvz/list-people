import React, {useState} from 'react';
import {Button} from '../ElementsButtons';
import {WrapperModal, BodyModal, Input} from './ElementsEditModal';
//
import {useDispatch} from 'react-redux';
import { delete_person } from '../../store/actions';
// import {add_person} from '../../store/actions';
// import {useSelector, useDispatch} from 'react-redux';

const EditModal = ({person})=> {
  const [showModal, setShowModal] = useState(false);
//   const dispatch = useDispatch();
//   const [valueInput, setValueInput] = useState({name: '', email: '', website: '', company: {name: ''}});
//   const dispatch = useDispatch();
//   const listPeople = useSelector(state => state.listPeopleReducer);

//   const handlerInput = ()=>{
//    dispatch(add_person({
//       ...valueInput, 
//       id: `${listPeople.listPeople.length + 1}`,
//    }))
//    setValueInput({...valueInput , name: '', email: '', website: '', company: {name: ''}});
// }
   console.log(person);
   
  return (
    <>
      <Button onClick={()=> setShowModal(true)}>edit</Button>
      {showModal && 
         <WrapperModal>
            <BodyModal>
               <h3>Are you sure you want to delete the {person.name}?</h3>
               <div>
                 edit
               </div>
               <button onClick={()=> setShowModal(false)}>close</button>
            </BodyModal>
         </WrapperModal>
      }
    </>
    
  );
}

export default EditModal;