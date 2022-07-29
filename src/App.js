import style from "./App.module.css";
import Landing from "./components/Landing/Landing";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/account/signin";
import Login from "./components/account/login";
import Cryptos from "./pages/Cryptos/Cryptos";
import Home from "./pages/Home/Home";
import Wallet from "./pages/Wallet/Wallet";
import Settings from "./pages/Settings/Settings";
import News from "./pages/News/News";
import Faq from "./pages/Faq/Faq";
import Profile from "./pages/Profile/Profile";
import Favorites from "./components/Favourites/Favourites";
import CryptoDetails from "./pages/CryptosDetails/CryptosDetails";
import LoginSignIn from './pages/LoginSignin/LoginSignIn';
import Admin from "./pages/Admin/Admin";
import News2 from './components/News/News2';

import Charge from "./pages/Charge/Charge";

import AuthProvider from "./components/auth/AuthProvider";



function App () {

  return (
    <div className={style.container}>
      <Routes>
        {/* <Route path="/account/signin" element={<SignIn />} /> */}
        <Route path="/" element={<Landing />} />
        <Route path="/account/login" element={<LoginSignIn />} />
        <Route
          path="/profile"
          element={

            <div className={style.app_container}>
              <Profile />
            </div>

          }
        />
        <Route
          path="/home"
          element={
            <AuthProvider>
              <div className={style.app_container}>
                <Home />
              </div>
            </AuthProvider>
          }
        />
        <Route
          exact
          path="/wallet"
          element={
            <AuthProvider>
              <div className={style.app_container}>
                <Wallet />
              </div>
            </AuthProvider>
          }
        />
        <Route
          exact
          path="/settings"
          element={
            <AuthProvider>
              <div className={style.app_container}>
                <Settings />
              </div>
            </AuthProvider>
          }
        />
        <Route
          exact
          path="/cryptosmarket"
          element={

            <div className={style.appcontainer}>
              <Cryptos />
            </div>

          }
        />
        <Route
          exact
          path="/news"
          element={
            <AuthProvider>
              <div className={style.app_container}>
                <News />
              </div>
            </AuthProvider>
          }
        />
        <Route
          exact
          path="/faq"
          element={
            <AuthProvider>
              <div className={style.app_container}>
                <Faq />
              </div>
            </AuthProvider>
          }
        />
        <Route
          exact
          path="/fav"
          element={
            <AuthProvider>
              <div>
                <Favorites />
              </div>
            </AuthProvider>
          }
        />
        <Route
          exact
          path="/cryptosmarket/:id"
          element={

            <div className={style.appcontainer}>
              <CryptoDetails />
            </div>

          }
        />

        <Route exact path="/cryptosmarket" element={
          <div className={style.appcontainer}>
            <Cryptos />
          </div>
        } />
        <Route exact path="/news" element={
          <div className={style.app_container}>
            <News />
          </div>
        } />
        <Route exact path="/news2" element={
          <div className={style.app_container}>
            <News2 />
          </div>
        } />
        <Route exact path="/faq" element={
          <div className={style.app_container}>
            <Faq />
          </div>
        } />
        <Route exact path="/charge" element={
          <div className={style.app_container}>
            <Charge />
          </div>
        } />
        <Route exact path="/fav" element={
          <div>
            <Favorites />
          </div>
        }/>
        <Route exact path="/cryptomarket/:id" element={
          <div className={style.app_container}>
            <CryptoDetails />   
          </div>
        }/>


        <Route
          exact
          path="/dashboard/admin"
          element={
            <AuthProvider>
              <div className={style.app_container}>
                <Admin />
              </div>
            </AuthProvider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
