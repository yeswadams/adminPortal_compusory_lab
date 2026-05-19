import { Routes, Route } from 'react-router-dom'
import RootLayout from './_root/RootLayout.jsx'
import HomePage from './_root/pages/HomePage.jsx'
import Shop from './_root/pages/Shop.jsx'
import AdminPortal from './_root/pages/AdminPortal.jsx'
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
