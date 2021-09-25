export default function validateInfo(values){
   let errors = {};

   if(!values.name.trim()){
      errors.name = 'name required';
   }

   if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
   if(!values.website.trim()){
      errors.website = 'website id required';
   } 

   return errors;

}