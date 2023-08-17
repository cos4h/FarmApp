import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/registerPage';
import { AuthProvider } from './context/authContext.jsx';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path= "/" element={<h1>HOME page</h1>}/>
          <Route path= "/login" element={<LoginPage />}/>
          <Route path= "/register" element={<RegisterPage/>}/>
          <Route path= "/bills" element={<h1>bills page</h1>}/>
          <Route path= "/add-bill" element={<h1>new bill page</h1>}/>
          <Route path= "/bill/:id" element={<h1>update bill page</h1>}/>
          <Route path= "/profile" element={<h1>profile page</h1>}/>
        </Routes>  
      </BrowserRouter>
    </AuthProvider>
  )
}
