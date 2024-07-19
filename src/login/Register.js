import React,{useState,useEffect} from 'react'
import { useForm } from 'react-hook-form'

function Register() {
const[name, setName] = useState([{firstName:"",lastName:"",email:"",password:""}])
const{
    register,
    handleSubmit,
    formState:{errors},
    reset,
    setFocus
}=useForm()

const onSubmit =(data) =>{
   console.log(data);
   setName(data);
   reset();
}
useEffect(()=>{
    setFocus('firstName')
},[setFocus])
  return (
    <div className='login-box'>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className='name'>
              <label>First Name</label>
              <input type="text" name="firatName" {...register('firstName',{required:'enter the data'})}/>
          </div>
          <div className='name'>
              <label>Last Name</label>
              <input type="text" name="lastName" {...register('lastirstName',{required:'enter the data'})}/>
          </div>
      <div className='email'>
       <label>Email:</label>
       <input clasName='input-container' type='text' name='email' {...register('email',{required:'Email is required'})} />
      </div>
      <div className='pass'>
          <label>Password:</label>
          <input clasName='input-container' type='text' name='password' {...register('password',{required:'Password is required'})} />
          {errors.password && <span>Enter password</span>}
      </div>
      <div className='submit'>
          <button type='Submit' name='Submit'>Register</button>
      </div>
      </form>
      <p>Login details: {name.email} {name.password}</p>
    </div>
  )
}

export default Register
