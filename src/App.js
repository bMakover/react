import './App.css';
import Counter from './counter';
import Toggle from './toggle';
import AppDate from './appDate';
import {BrowserRouter,Routes,Route , Link} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <header>

      <h2>My logo</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Home</Link>
          </li>  
           <li>
            <Link to="/employee">Home</Link>
          </li>
          <li>
            <Link to="/form">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
    <Routes>
<Route index element={<Toggle/>}/>
<Route path="/about" element={<Toggle/>}/>
<Route path="/employee"element={<AppDate/>}/>
<Route path="/employee/:company" element={<Counter/>}/>
{/* <Route path="/form" element={<Form/>}/> */}
<Route path="*" element={<h2>Page not found</h2>}/>


    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
