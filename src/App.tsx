import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Room from './pages/Room'
import Victory from './pages/Victory'
import NotFound from './pages/NotFound'
import Navigation from './components/Navigation'
import Inventory from './components/Inventory'

function App() {
  return (
    <>
      <Navigation />
      <Inventory />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomPath" element={<Room />} />
        <Route path="/victory" element={<Victory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App