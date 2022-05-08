import './App.css';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import NotFound from './Components/Shared/Not Found/NotFound';
import Home from './Components/Headers Component/Home/Home/Home';
import About from './Components/Headers Component/About/About';
import Collection from './Components/Headers Component/Collection/Collection';
import Login from './Components/Headers Component/Login/Login';
import Register from './Components/Headers Component/Register/Register';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/collection" element={<Collection></Collection>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
