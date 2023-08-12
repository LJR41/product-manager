import logo from './logo.svg';
import './App.css';
import FormProduct from './components/FormProduct';
import {Routes,Route,Link, Form} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import AllProduct from './components/AllProduct';
import ViewProduct from './components/ViewProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/product/form' element ={<FormProduct/>}/>
        <Route path='/product/all' element={<AllProduct/>}/> 
        <Route path='/product/view/:id' element={<ViewProduct/>}/>
        <Route path='/product/edit/:id' element={<EditProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
