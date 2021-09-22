import React, {useState, useEffect} from 'react';
import {Button} from '../ElementsButtons';
import {WrapperModal, BodyModal, Input} from './ElementsDefaultModal';

import {edit_person} from '../../store/actions';
import {/*useSelector,*/ useDispatch} from 'react-redux';

const DefaultModal = ({children, header, person})=> {
  const [showModal, setShowModal] = useState(false);
  const [valueInput, setValueInput] = useState({name: person.name, email: person.email, website: person.website, company: {name: person.company.name}});
  const dispatch = useDispatch();
//   const listPeople = useSelector(state => state.listPeopleReducer);

  const handlerInput = ()=>{
   dispatch(edit_person({
      ...valueInput, 
      id: `${person.id}`,
   }))
}
// useEffect(()=>{
//    console.log('use effect')
// }, [])

  return (
    <>
      <Button onClick={()=> setShowModal(true)}>{header}</Button>
      {showModal && 
         <WrapperModal>
            <BodyModal>
               <h3>{header}:</h3>
               <h4>{person.name}</h4>
               <Input value={valueInput.name} onChange={(e)=> setValueInput({...valueInput, name: e.target.value})} placeholder="name" />
               <Input value={valueInput.email} onChange={(e)=> setValueInput({...valueInput, email: e.target.value})} placeholder="e-mail" />
               <Input value={valueInput.website} onChange={(e)=> setValueInput({...valueInput, website: e.target.value})} placeholder="website" />
               <Input value={valueInput.company.name} onChange={(e)=> setValueInput({...valueInput, company: {name: e.target.value}})} placeholder="company" />

               <div>
                  <button onClick={()=> console.log(valueInput)}>show</button>
                  <Button onClick={handlerInput}>{header}</Button>
                  <Button onClick={()=> setShowModal(false)}>close</Button>
               </div>
            </BodyModal>
         </WrapperModal>
      }
    </>
    
  );
}

export default DefaultModal;