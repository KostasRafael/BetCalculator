import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home'
import Leagues from './pages/Leagues/Leagues'
import Fixtures from './pages/Fixtures/Fixtures'
import Analysis from './pages/Analysis/Analysis'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="leagues" element={<Leagues />} />
        <Route path="fixtures" element={<Fixtures />} />
        <Route path="analysis" element={<Analysis />} />
      </Route>
    </Routes>
  )
}

export default App


