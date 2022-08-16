import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import ProtectedRoute from "./Pages/HOC"
import Dashboard from "./Pages/Dashboard"
import Detail from "./Pages/Detail"

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  // useEffect(() => {
  //   const checkIfLogin = () => {
  //     const token = localStorage.getItem("token")
  //     if (!token) {
  //       setIsLogin(false)
  //     } else {
  //       setIsLogin(true)
  //     }
  //   }
  //   checkIfLogin()
  // }, [])

  return ( 
    <div className="App"> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        {/* <Route path="login" element={<Login setIsLogin={setIsLogin} />} /> */}
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/detail/:id" element={<Detail />} />
        {/* <Route 
          path="dashboard" 
          element={
            <ProtectedRoute user={isLogin}>
              <Dasboard />
            </ProtectedRoute>
          } 
        /> */}
      </Routes>
    </div>
  )
}
 
export default App;
