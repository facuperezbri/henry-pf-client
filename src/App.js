import style from "./App.module.css";
import Nav from "./components/Nav/Nav"
import AccountDetail from './components/AccountDetail/AccountDetail';
import { Route, Routes } from 'react-router-dom'
import SignIn from "./components/account/signin";
import Login from "./components/account/login";
import CryptoMarket from './components/CryptoInfo/CryptoMarket'
import NewsComponent from "./components/News/NewsComponent";
import Landing from "./components/Landing/Landing";


function App() {

  return (
    <div className={style.container}>
      <Routes>
        <Route path="/account/signin" element={<SignIn />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={
          <div className={style.app_container}>
            <Nav />
            <AccountDetail />
          </div>
        } />
        <Route path="/cryptosmarket" element={<CryptoMarket />} />
        <Route path="/news" element={
          <div className={style.app_container}>
            <Nav />
            <NewsComponent />
        </div>
        } />

      </Routes>
    </div>
  );
}

export default App;
