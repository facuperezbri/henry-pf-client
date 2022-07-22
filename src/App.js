import style from "./App.module.css";
import Landing from "./components/Landing/Landing";
import Nav from "./components/Nav/Nav"
import AccountDetail from './components/AccountDetail/AccountDetail';
import {Routes,Route} from 'react-router-dom'
import Profile from "./components/Profile/Profile";
import DetailProfile from "./components/Profile/DetailProfile";
import SignIn from "./components/account/signin";
import Login from "./components/account/login";
import EditProfile from "./components/Profile/EditProfile";
import CryptoMarket from './components/CryptoInfo/CryptoMarket'
import NewsComponent from "./components/News/NewsComponent";


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
        <>
          <Nav />
          <AccountDetail />
        </>
        } />
        <Route path="/cryptosmarket" element={<CryptoMarket />} />
        <Route path="/news" element={<NewsComponent />} />

      </Routes>
    </div>
  );
}

export default App;
