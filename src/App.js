import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Pages/Shared/Header/Header'
import {Routes ,Route} from 'react-router-dom'
import Home from './Pages/Home/Home/Home'
import Blogs from './Pages/Blogs/Blogs'
import AboutMe from './Pages/AboutMe/AboutMe'
import LogIn from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import NotFound from './Pages/Shared/NotFound/NotFound'

function App() {

  return (
    <div>
         <Header></Header>
         <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/blogs' element={<Blogs></Blogs>}></Route>
                <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
                <Route path='/login' element={<LogIn></LogIn>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
         </Routes>
    </div>
  );
}

export default App;
