import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {add_person} from '../../store/actions';

const useForm = ( validate ) => {
   const listPeople = useSelector(state => state.listPeopleReducer);
   const dispatch = useDispatch();
   const [values, setValues] = useState({
      name: '',
      email: '',
      website: '',
      company: {name: ''},
   });
   const [errors, setErrors] = useState({});
   const [isSubmitting, setIsSubmitting] = useState(false)
   
   const handleChange = e => {
      const {name, value} = e.target;
      if(name === 'company'){
         setValues({...values, company: {name: value}})
      } else {
         setValues({
            ...values,
            [name]: value,
         })
      }
   };
   const handleSubmit = e => {
      e.preventDefault();
      setErrors(validate(values));
      setIsSubmitting(true);

   }
   const dispatching = ()=> {
      dispatch(add_person({
      ...values, 
      id: values.name,
      }))
      setValues({...values , name: '', email: '', website: '', company: {name: ''}});
   }

   useEffect(()=>{
      if(Object.keys(errors).length === 0 && isSubmitting){
         dispatching();
      }
   }, [errors])

   return {handleChange, values, handleSubmit, errors}
}

export default useForm;
