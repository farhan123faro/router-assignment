import Navbar from "./component/Navbar";
import{Routes,Route} from "react-router-dom";
import Login from "./component/Login";
import Main from "./component/Main";
import Secondpage from "./component/Secondpage";
import Mainchild from "./component/Mainchild"
import Mainchild2 from "./component/Mainchild2"
import Secondchild1 from "./component/Secondchild1"
import Secondchild2 from "./component/Secondchild2"


function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="main" element={<Main/>}>
         <Route path="mchild1" element={<Mainchild/>}/>
         <Route path="mchild2" element={<Mainchild2/>}/>
        </Route>
        <Route path="second" element={<Secondpage/>}>
         <Route path="schild1" element={<Secondchild1/>}/>
         <Route path="schild2" element={<Secondchild2/>}/>

        </Route>

      </Routes>

    </div>
  );
}

export default App;
