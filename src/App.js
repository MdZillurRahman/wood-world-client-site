import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import NotFound from './Components/Shared/Not Found/NotFound';
import Home from './Components/Headers Component/Home/Home/Home';
import ItemDetail from './Components/Inventory/Item Detail/ItemDetail';
import About from './Components/Headers Component/About/About';
import Collection from './Components/Headers Component/Collection/Collection/Collection';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import Profile from './Components/Headers Component/Profile/Profile';
import RequireAuth from './Components/Login/Require Auth/RequireAuth';
import AddItems from './Components/Headers Component/Add Items/AddItems';
import ManageItems from './Components/Headers Component/Manage Items/ManageItems';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-bootstrap';

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
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route> 
        <Route path="/inventory/:itemId" element={
          <RequireAuth>
            <ItemDetail></ItemDetail>
          </RequireAuth>
        }></Route>
        <Route path="/additems" element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>
        <Route path="/manageitems" element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>
        }></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
