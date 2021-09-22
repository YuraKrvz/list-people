import React from 'react';
import Modal from '../Modal';
import {useDispatch} from 'react-redux';
import { delete_person } from '../../store/actions';

const Deleting = ({item})=> {
   const dispatch = useDispatch();
   const handlerDelete = ()=> dispatch(delete_person(item));
   // const handlerDelete = ()=> console.log('del');
   ;
   
  return (
    <>
      <Modal close="close" save="Delete" type="Delete" action={handlerDelete} btnType="btn btn-danger">
         <strong>Are you sure you want to delete the {item.name}?</strong>
      </Modal>     
    </>
  );
}

export default Deleting;