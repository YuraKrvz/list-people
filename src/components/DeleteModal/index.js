import React, {useState} from 'react';
import {Button} from '../ElementsButtons';
import {WrapperModal, BodyModal, Input} from './ElementsDeleteModal';
//
import {useDispatch} from 'react-redux';
import { delete_person } from '../../store/actions';
// import {add_person} from '../../store/actions';
// import {useSelector, useDispatch} from 'react-redux';

const DeleteModal = ({person})=> {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
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
      <Button onClick={()=> setShowModal(true)}>delete</Button>
      {showModal && 
         <WrapperModal>
            <BodyModal>
               <h3>Are you sure you want to delete the {person.name}?</h3>
               <div>
                  <button onClick={()=> dispatch(delete_person(person))}>Yes, delete</button>
                  <button onClick={()=> setShowModal(false)}>No, close</button>
               </div>
            </BodyModal>
         </WrapperModal>
      }
    </>
    
  );
}

export default DeleteModal;