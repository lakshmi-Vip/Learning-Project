import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ReactForm = () => {

     const[formData,setFormData] = useState([{email:"",password:""}]);
    const{
        register,
        handleSubmit,
        formState:{errors}, reset
    } = useForm();

    const onSubmit = (data) =>{
   console.log(data)
   setFormData(data);
   reset();
    }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
       <div className="form-control">
        <label>Email</label>
        <input 
        {...register("email", {required:"Email required"})} />
        {errors.email && <span>{errors.email.message}</span>}
       </div>
       <div className="form-control">
          <label>Password</label>
          <input type="password" 
          name="password" 
          {...register("password")} />
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
      <p>Check the data :{formData.email} and {formData.password}</p>
    </div>
  )
}

export default ReactForm
