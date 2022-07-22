import style from "./App.module.css";
import Landing from "./components/Landing/Landing";
import {Routes,Route} from 'react-router-dom'
import Profile from "./components/Profile/Profile";
import SignIn from "./components/account/signin";
import Login from "./components/account/login";
import Cryptos from './pages/Cryptos/Cryptos'
import Home from './pages/Home/Home';
import Wallet from './pages/Wallet/Wallet';
import Settings from "./pages/Settings/Settings";
import News from "./pages/News/News";
import Faq from "./pages/Faq/Faq";

function App () {

  return (
    <div className={style.container}>
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path="/account/signin" element={<SignIn />} />
        <Route exact path="/account/login" element={<Login />} />
        <Route exact path="/home" element={
          <div className={style.app_container}>
            <Home />
          </div>
        } 
        />
        <Route exact path="/wallet" element={
          <div className={style.app_container}>
            <Wallet />
          </div>
        } 
        />
        <Route exact path="/settings" element={
          <div className={style.app_container}>
            <Settings />
          </div>
        } 
        />
        <Route exact path="/cryptosmarket" element={
          <div className={style.app_container}>
            <Cryptos />
          </div>
        } />
        <Route exact path="/news" element={
          <div className={style.app_container}>
            <News />
          </div>
        } />
        <Route exact path="/faq" element={
          <div className={style.app_container}>
            <Faq />
          </div>
        } />

      </Routes>
    </div>
  );
}

export default App;
