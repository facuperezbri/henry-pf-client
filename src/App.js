import {Routes,Route, useParams} from "react-router-dom";
import style from "./App.module.css";
import Nav from "./components/Nav/Nav";
import Landing from "./components/Landing";
function App () {
  
  return (
    <div className={style.container}>
      <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route exact path="/home" element={<Nav/>}/>
      </Routes>
    </div>
  );
}

export default App;
