import './App.css';
import Counter from './counter';
import Toggle from './toggle';
import AppDate from './appDate';
import Favorite from './Favorite'
import AppTv from './apicomps/AppTv';
import AppCoins from './hw2/AppCoins'
import AppRoutes from './compsRoutes/appRoutes.js'

function App() {
  return (
    <div className="App">
{/* <AppTv/>
    <Favorite/> */}
    {/* <AppCoins/> */}
    <AppRoutes/>
    </div>
  );
}

export default App;
