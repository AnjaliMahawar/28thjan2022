//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Register from './page/Register';
import Login from './page/Login';
import Error404 from './page/Error404';

function App() {
//STATE




//FUNCTION




///RETURN TYPE
  return (
    <Router>
            <Routes>
               <Route path="/" element={ <Register/> }> </Route>
               <Route path="/register" element={ <Register/> }> </Route>
               <Route path="/Login" element={ <Login/> }> </Route>
               <Route path="*" element={ <Error404/> }> </Route>
            </Routes>
    </Router>
  );
}

export default App;
