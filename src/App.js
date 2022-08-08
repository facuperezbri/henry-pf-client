import { useEffect } from "react";
import Landing from "./components/Landing/Landing";
import { Routes, Route } from "react-router-dom";
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

import AuthProvider from "./components/auth/AuthProvider";
import Charge from "./pages/Charge/Charge";

import ResetPassword from "./components/account/ResetPassword";

import UseDarkMode from "./hooks/useDarkMode";



function App () {
  const { setDarkMode } = UseDarkMode()

  useEffect(() => {
    setDarkMode((window.localStorage.getItem('darkmode') === 'true'))
  }, [])
  

  return (
    <div className="dark:bg-slate-800 dark:text-red-50">
      <Routes>
        <Route path="/" element={<Landing />} />
         <Route path="/reset/:id" element={<ResetPassword />} />
        <Route path="/account" element={<LoginSignIn />} />
        <Route
          path="/profile"
          element={
            <AuthProvider>
              <Profile />
            </AuthProvider>}
        />
        <Route
          path="/home"
          element={
            <AuthProvider>
              <Home />
            </AuthProvider>
          }
        />
        <Route
          exact
          path="/wallet"
          element={
            <AuthProvider>
              <Wallet />
            </AuthProvider>
          }
        />
        <Route
          exact
          path="/settings"
          element={
            <AuthProvider>
              <Settings />
            </AuthProvider>
          }
        />
        <Route
          exact
          path="/cryptosmarket"
          element={
            <AuthProvider>
              <Cryptos />
            </AuthProvider>
          }
        />
        <Route
          exact
          path="/news"
          element={
            <AuthProvider>
              <News />
            </AuthProvider>
          }
        />
        <Route
          exact
          path="/faq"
          element={
            <AuthProvider>
              <Faq />
            </AuthProvider>
          }
        />
        <Route
          exact
          path="/fav"
          element={
            <AuthProvider>
              <Favorites />
            </AuthProvider>
          }
        />
        <Route 
          exact 
          path="/charge" 
          element={
            <AuthProvider>  
              <Charge /> 
            </AuthProvider>
            }
          />
        <Route
          exact
          path="/cryptosmarket/:id"
          element={
            <AuthProvider>
              <CryptoDetails />
            </AuthProvider>
          }
        />
        <Route
          exact
          path="/dashboard/admin"
          element={
            <AuthProvider>
              <Admin />
            </AuthProvider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
