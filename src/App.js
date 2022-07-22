import style from "./App.module.css";
import Landing from "./components/Landing/Landing";
import Nav from "./components/Nav/Nav"
import AccountDetail from './components/AccountDetail/AccountDetail';
import {Routes,Route} from 'react-router-dom'
import Profile from "./components/Profile/Profile";
import DetailProfile from "./components/Profile/DetailProfile";
import SignIn from "./components/account/signin";
import Login from "./components/account/login";
import Cryptos from './pages/Cryptos/Cryptos'
import Home from './pages/Home/Home';
import Wallet from './pages/Wallet/Wallet';
import Settings from "./pages/Settings/Settings";
import News from "./pages/News/News";
import Faq from "./pages/Faq/Faq";
import EditProfile from "./components/Profile/EditProfile";



function App () {

  return (
    <div className={style.container}>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/perfil" element={<Profile/>}/>
        <Route path="/perfil/detail" element={<DetailProfile/>}/>
        <Route path="/account/signin" element={<SignIn />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/perfil/detail/editProfile/:id" element={<EditProfile/>}/>
        <Route path="/home" element={
          <div className={style.app_container}>
            <Home />
          </div>
        } 
        />
        <Route path="/wallet" element={
          <div className={style.app_container}>
            <Wallet />
          </div>
        } 
        />
        <Route path="/settings" element={
          <div className={style.app_container}>
            <Settings />
          </div>
        } 
        />
        <Route path="/cryptosmarket" element={
          <div className={style.app_container}>
            <Cryptos />
          </div>
        } />
        <Route path="/news" element={
          <div className={style.app_container}>
            <News />
          </div>
        } />
        <Route path="/faq" element={
          <div className={style.app_container}>
            <Faq />
          </div>
        } />

      </Routes>
    </div>
  );
}

export default App;
