import { Routes, Route } from 'react-router-dom'
import  Login  from './pages/auth/login'
import AuthStart from './pages/auth/start'
import SignUp from './pages/auth/signup'

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthStart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}

export default App
