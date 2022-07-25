import style from "./App.module.css";
import Landing from "./components/Landing/Landing";
import {Routes,Route} from 'react-router-dom'
import SignIn from "./components/account/signin";
import Login from "./components/account/login";
import Cryptos from './pages/Cryptos/Cryptos'
import Home from './pages/Home/Home';
import Wallet from './pages/Wallet/Wallet';
import Settings from "./pages/Settings/Settings";
import News from "./pages/News/News";
import Faq from "./pages/Faq/Faq";
import Profile from "./pages/Profile/Profile";
<<<<<<< HEAD
import Favorites from "./components/Favourites/Favourites"
=======
import CryptoDetails from "./pages/CryptosDetails/CryptosDetails";

>>>>>>> a6690d7afa5a29da9832d2c3330e1e46fb04bafb

function App () {

  return (
    <div className={style.container}>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/profile" element={
          <div className={style.app_container}>
            <Profile />
          </div>
        } 
        />
        <Route path="/account/signin" element={<SignIn />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/home" element={
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
<<<<<<< HEAD
        <Route exact path="/fav" element={
          <div>
            <Favorites />
          </div>
          
=======
        <Route exact path="/cryptomarket/:id" element={
          <div className={style.app_container}>
          <CryptoDetails />
        </div>
>>>>>>> a6690d7afa5a29da9832d2c3330e1e46fb04bafb
        }/>

      </Routes>
    </div>
  );
}

export default App;
