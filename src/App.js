import { Fragment } from 'react';
import UseSateHook from './Hooks/useSate';
import UseEffectHook from './Hooks/useEffect';
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
function App() {
  return (
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='about' element={<About />}></Route>
  </Routes>
  );
}

export default App;
