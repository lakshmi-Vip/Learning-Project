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
function App() {
  return (
    <Fragment>
     <Login />
     <Register />
    </Fragment>
  );
}

export default App;
