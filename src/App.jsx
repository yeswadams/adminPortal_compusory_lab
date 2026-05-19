import { Routes, Route } from 'react-router-dom'
import RootLayout from './root/RootLayout.jsx'
import HomePage from './root/pages/HomePage.jsx'
import Shop from './root/pages/Shop.jsx'
import AdminPortal from './root/pages/AdminPortal.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="admin" element={<AdminPortal />} />
      </Route>
    </Routes>
  )
}

export default App
