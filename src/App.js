import style from "./App.module.css";
import Nav from "./components/Nav/Nav"
import AccountDetail from './components/AccountDetail/AccountDetail';
import { Route, Routes } from 'react-router-dom'
import SignIn from "./components/account/signin";
import Login from "./components/account/login";
function App () {

  return (
    <div className={style.container}>
      <Routes>
      <Route path="/account/signin" element={<SignIn />} />
      <Route path="/account/login" element={<Login />} />
        <Route path="/" element={
        <>
          <Nav />
          <AccountDetail />
        </>
        } />
      </Routes>
    </div>
  );
}

export default App;
