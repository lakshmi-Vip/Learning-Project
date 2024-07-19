import React,{useState} from 'react'

const Form = () => {

    const[state,setState] = useState({email:"",password:""})

  function  handelInput(event){
     const{name,value} = event.target;
     setState((prevProp) =>({
         ...prevProp,
         [name]:value
     }))
  }

  const handelSubmit = (e) =>{
   e.preventDefault();
   console.log(state);
  }
  return (
    <div>
      <div className="App">
      <form onSubmit={handelSubmit}>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handelInput}
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handelInput}
          />
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Form
