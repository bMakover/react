import './App.css';
import './global.css';
 import { configureStore } from "@reduxjs/toolkit";
 import { Provider } from "react-redux";
import Counter from './counter';
import Toggle from './toggle';
import AppDate from './appDate';
import {BrowserRouter,Routes,Route , Link} from "react-router-dom"
import counterSlice from "./features/counterSlice";

const myStore = configureStore({
  reducer: {
    counterSlice
  }
})
function App() {
  return (
    <BrowserRouter>
    <Provider store={myStore}>
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
            <Link to="/counter">counter</Link>
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
{/* <Route path="/employee/:company" element={<Counter/>}/> */}
{/* <Route path="/form" element={<Form/>}/> */}
<Route path="/counter" element={<Counter />} />
<Route path="*" element={<h2>Page not found</h2>}/>


    </Routes>
    </Provider >
    </BrowserRouter>
  );
}

export default App;
