import { Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Signup  from"./Signup";
import Thank from "./Thank"
export default function App(){
  return (
    <>
      <Router>
        <Routes>
          <Route path='/Thank' element={<Thank/>}/>
          <Route path='/' element={<Signup/>}/>
        </Routes>
      </Router>
    </>
  );
}

