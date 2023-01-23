import Navbar from "./component/Navbar";
import{Routes,Route} from "react-router-dom";
import Login from "./component/Login";
import Main from "./component/Main";
import Secondpage from "./component/Secondpage";
import Thirdpage from "./component/Thirdpage";
import Childofthird from "./component/Childofthird";
function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="main" element={<Main/>}>
          <Route path="second" element={<Secondpage/>}/>
        </Route>
        <Route path="third" element={<Thirdpage/>}>
          <Route path="thirdchild" element={<Childofthird/>}/>
        </Route>

      </Routes>

    </div>
  );
}

export default App;
