import { Fragment } from 'react';
//import ThemChange from './Hooks/useContext'; 
import Parent from './code/parent';
import App1 from './Hooks/useMemo';
import UseRef from './Hooks/useRef';
import Counter from './Hooks/useReducer';
import ContextData from './Hooks/useContext';
import Refe from './Hooks/useRef'
import Form from './form-rh';
import App11 from './form-rh/reactForm';
import Login from './login/Login';
import Register from './login/Register';
import {Routes, Route} from 'react-router-dom'
import Home from './router-components/Home';
import About from './router-components/About';
import Navbar from './router-components/Navbar';
import OrderSummary from './router-components/OrderSummary';
import Nomatch from './router-components/Nomatch';
import Product from './router-components/Product';
import FeaturedProd from './router-components/FeaturedProd';
import NewProd from './router-components/NewProd';
import Users from './Users';
import UserDetails from './UserDetails';
import Admin from './router-components/Admin';
import UseStateHook from './Hooks/useStateHook';
import UseEffectHook from './Hooks/useEffectHook';
import UseCallbackHook from './Hooks/useCallbackHook';
import UseRefHook from './Hooks/useRefHook';
import UseContextHook from './Hooks/useContextHook';
import UseReducerHook from './Hooks/useReducerHook';
import UseMemoHook from './Hooks/useMemoHook';

function App() {
  return (
    <>
    <UseStateHook />
   <UseEffectHook />
   <UseCallbackHook />
   <UseRefHook />
   <UseContextHook />
   <UseReducerHook />
    <UseMemoHook />
    {/* <Navbar /> */}

  {/* <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='about' element={<About />}></Route>
    <Route path='order-summary' element={<OrderSummary/>}></Route>
    <Route path='product' element={<Product />}>
      <Route index element={<FeaturedProd />}></Route>
      <Route path ='featured' element={<FeaturedProd/>} />
      <Route path='new' element={<NewProd />} />
    </Route>
    <Route path='user' element={<Users />}>
      <Route path=':userId' element={<UserDetails />}></Route>
      <Route path='admin' element={<Admin />}></Route>
    </Route>
    
    <Route path='*' element={<Nomatch/>}></Route>
  </Routes> */}
  </>
  );
}

export default App;
