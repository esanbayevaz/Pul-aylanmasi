import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"
import ProtektedRoutes from "./routes/ProtektedRoutes"
import { Context } from "./context/context"
import { useEffect, useReducer, useState } from "react"
import {tokenInitialeState,tokenReducer} from "./reducer/TokenReducer/tokenReducer"


function App() {
  const [tokenState,tokenDispatch] = useReducer(tokenReducer,tokenInitialeState)
  const [price,setPrice]=useState(JSON.parse(localStorage.getItem('price'))||0)
  const [history,setHistory]=useState(JSON.parse(localStorage.getItem('history'))||[])
  useEffect(()=>{
    localStorage.setItem("token",JSON.stringify(tokenState.token))
    localStorage.setItem("history",JSON.stringify(history))
    localStorage.setItem("price",JSON.stringify(price))
  },[tokenState.token,history,price])
  return (

    <Context.Provider value={{tokenState,tokenDispatch,price,setPrice,history,setHistory}}>
      <div className="flex">

      <Routes>
        <Route path="login" element={<Login />} />
        <Route element={<ProtektedRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
      </div>
    </Context.Provider>
  )
}

export default App
