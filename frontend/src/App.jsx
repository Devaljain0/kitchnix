


import { Route, Routes } from 'react-router-dom'
import Login from './routes/Login'
import Signup from './routes/Signup'
import Otp from './routes/Otp'
import { ProtectedRoute } from "./components/ProtectedRoute"; // Import the ProtectedRoute component
import Dashboarded from './routes/Dashboard';
import LandingPage from './components/LandingPage'
function App() {
  

  return (
  <div>
    <Routes> 
      <Route path='/landing' element={<LandingPage/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/verify" element={<Otp/>} />
      <Route path="/dashboard" element={<ProtectedRoute> <Dashboarded/>  </ProtectedRoute>} />
    </Routes>
   
  </div>
  )
}

export default App
