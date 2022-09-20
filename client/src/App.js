import "./App.css"
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Dashbord from "./pages/Dashbord"

function App() {
  const user = localStorage.getItem("jwtToken")
  console.log("user", user)
  return (
    <div className="App">
      <Routes>
        {user ? (
          <>
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashbord />} />
          </>
        ) : (
          <Route path="/" element={<Home />} />
        )}
      </Routes>
    </div>
  )
}

export default App
