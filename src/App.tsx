import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SideNavbar } from './components/SideNavbar'
import { HomeContainer } from './pages/HomeContainer'
function App() {

  return (
       <BrowserRouter>
        <div className="flex h-screen w-screen ">
          <div className="bg-primary h-screen bg-gray-800">
            <SideNavbar />
          </div>
          <div className="bg-slate-200 flex-1 ">
            <Routes>
              <Route path="/" element={<HomeContainer />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  )
}

export default App
