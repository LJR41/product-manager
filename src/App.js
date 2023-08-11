import logo from './logo.svg';
import './App.css';
import FormProduct from './components/FormProduct';
import {Routes,Route,Link, Form} from 'react-router-dom'
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/api/product/form' element ={<FormProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
