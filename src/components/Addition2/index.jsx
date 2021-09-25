import React from 'react';
import Modal from '../Modal';
import Form from 'react-bootstrap/Form';
import useForm from '../useForm/useForm';
import validateInfo from '../useForm/validateInfo';

const Addition = ()=> {
  
  const {handleChange, handleSubmit, values, errors} = useForm(validateInfo)

  return (
    <>
    <Modal close="close" save="Add" type="Add person" action={handleSubmit}>
        <Form.Control 
          value={values.name} 
          onChange={handleChange} 
          name="name"
          type="name" placeholder="name" 
        />
        {errors.name && <p className="text-danger">{errors.name}</p>}
        <Form.Control 
          value={values.email} 
          onChange={handleChange} 
          name="email"
          type="email" placeholder="name@example.com" 
        />
        {errors.email && <p className="text-danger">{errors.email}</p>}
        <Form.Control 
          value={values.website} 
          onChange={handleChange} 
          name="website"
          type="website" placeholder="www.website.com" 
        />
        {errors.website && <p className="text-danger">{errors.website}</p>}
        <Form.Control 
          value={values.company.name} 
          onChange={handleChange} 
          name="company"
          type="company" placeholder="company" 
        />
        {errors.company && <p className="text-danger">{errors.company}</p>}
    </Modal>
    </>
  );
}

export default Addition;