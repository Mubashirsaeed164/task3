import './Style/App.css'
import './Style/NormalizeCss.css'
import DashBoard from './Pages/DashBoard';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import SearchBar from './Pages/SearchImages';
import SearchUser from './Pages/SearchUser';
import UserProfile from './Pages/UserProfile';
function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashBoard/>}></Route>
        <Route path='searchimage' element={<SearchBar/>}></Route>
        <Route path='searchuser' element={<SearchUser/>}></Route>
        <Route path='userprofile' element={<UserProfile/>}></Route>
        <Route path='userprofile/:username' element={<UserProfile/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
