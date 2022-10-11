import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import WhatsNewPage from "./whatsnew"
import FightersPage from "./fighters/index"
import Kof15 from "./fighters/kof15"
import Sf5 from "./fighters/sf5"
import Home from "./home"
import Contact from "./contact"
import { FourOhFour } from "./404"
import Sf6 from "./fighters/sf6"


// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const App = () => (
  <>
    <Routes>
      <Route index={false} path="/" element={<Home />} />
      <Route path="/fighters" element={<FightersPage />} />
      <Route path="/fighters/kof15" element={<Kof15 />} />
      <Route path="/fighters/sf5" element={<Sf5 />} />
      <Route path="/fighters/sf6" element={<Sf6 />} />
      <Route path="/whatsnew" element={<WhatsNewPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<FourOhFour />} />
    </Routes>
  </>


)

export default App

