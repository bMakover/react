import './App.css';
import './global.css';
 import { configureStore } from "@reduxjs/toolkit";
 import { Provider } from "react-redux";
import Counter from './redux/counter';
import Toggle from './toggle';
import AppDate from './appDate';
import {BrowserRouter,Routes,Route , Link} from "react-router-dom"
import counterSlice from "./features/counterSlice";
import todosSlice from "./features/todosSlice";
import AppTodo from "./todoRedux_comps/appTodo";
import CreateCV from './comp/createCV';
const myStore = configureStore({
  reducer: {
    counterSlice,
    todosSlice
  }
})
function App() {
  return (
<CreateCV/>
  );
}

export default App;
