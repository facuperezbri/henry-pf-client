import style from "./App.module.css";
import Landing from "./components/Landing";
import Nav from "./components/Nav/Nav"
import AccountDetail from './components/AccountDetail/AccountDetail';
import {Routes,Route} from 'react-router-dom'
import Profile from "./components/Profile/Profile";
import DetailProfile from "./components/Profile/DetailProfile";

function App () {

  return (

    <div className={style.container}>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Nav/>}/>
        <Route path="/account" element={<AccountDetail/>}/>
        <Route path="/perfil" element={<Profile/>}/>
        <Route path="/detail" element={<DetailProfile/>}/>
      </Routes>
    </div>
  );
}

export default App;
