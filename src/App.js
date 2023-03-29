import './App.css';
import Navbar from './Component/Navbar';
import { Route, Routes } from 'react-router-dom';
import View from './Component/View';
import Addstud from './Component/Addstud';




function App() {
  return (
    <div className='App'>
      <Navbar/>
        <Routes>
          <Route path='/' element={<View/>} />
          <Route path='/Add' element={<Addstud data={{id:'',name:'',gender:''}} method="post" ></Addstud>}></Route>
        </Routes>
     
      
    </div>
  );
}

export default App;
