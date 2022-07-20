
import style from "./App.module.css";
import Nav from "./components/Nav/Nav"
import AccountDetail from './components/AccountDetail/AccountDetail';


function App () {
  
  return (

    <div className={style.container}>
      <Nav/>
      <AccountDetail />
      Henry PF
    </div>
  );
}

export default App;
