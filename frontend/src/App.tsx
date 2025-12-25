import { Routes, Route } from 'react-router-dom'
import  Login  from './pages/auth/login'
import AuthStart from './pages/auth/start'
import SignUp from './pages/auth/signup'
import Home from './pages/home/main'
import { PopupProvider } from './components/popup/PopupProvider'
import AuthGuard from './components/auth/AuthGuard'

function App() {
  return (
    <PopupProvider>
      <Routes>
        <Route path="/" element={<AuthStart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* 認証必須 */}
        <Route element={<AuthGuard />}>
          <Route path="/home" element={<Home />} />
          {/* ここに他の認証必須ページを追加 */}
          {/* <Route path="/profile" element={<Profile />} /> */}
        </Route>
      </Routes>
    </PopupProvider>
  )
}

export default App
