import React, { useState }  from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import About from './about'

export default function AppRoutes(){
const [number,setNumber]=useState(4);
const [coins,setcoins]=useState(6)

    return(<BrowserRouter>
<AppContext.provider value={{
    val:"ggg",
    number,setNumber,
    coins,setCoins
}}>

    <header className="p-2 container bg-info">
       < div className='float-end h5'>Coins:
       {/* {coins} */}
       </div>
       <Link to="/">Home</Link>
       <Link to="/about">about</Link>
       <Link to="/vip">Vip</Link>

    </header>
    <Routes>
        <Route index element ={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        {/* <Route path="/vip" element={<VipList/>}></Route> */}

    </Routes>
    <footer className='p-2 container bg-danger'>footer</footer>
    </AppContext>
    </BrowserRouter>
    )
}