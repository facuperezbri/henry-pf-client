import {Routes,Route, useParams} from "react-router-dom";
import style from "./App.module.css";
import Nav from "./components/Nav/Nav"
function App () {
  
  return (
    <div className={style.container}>
      <Nav/>
    </div>
  );
}

export default App;
