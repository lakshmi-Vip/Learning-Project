import React, { useState ,useRef, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import './login.css'



const Login = () => {
    const[login,setLogin] = useState([{email:"",password:""}])
    const logDom = useRef();

    const{register,
        handleSubmit,
     formState:{errors},
     reset,
     setFocus
      } = useForm();

      useEffect(()=>{
        //logDom.current.focus()
        setFocus('email')
    },[setFocus])

   const onSubmit = (data) =>{
    console.log(data)
    setLogin(data)
    reset()
   }
  return (
    <div className='login-box'>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <p className="errorMsg">Email is required.</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className="errorMsg">Email is not valid.</p>
          )}
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: true,
              minLength: 6
            })}
          />
          {errors.password && errors.password.type === "required" && (
            <p className="errorMsg">Password is required.</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p className="errorMsg">
              Password should be at-least 6 characters.
            </p>
          )}
        </div>
      <div className='submit'>
          <button type='Submit' name='Submit'>Login</button>
      </div>
      </form>
      <p>Login details: {login.email} {login.password}</p>
    </div>
  )
}

export default Login
