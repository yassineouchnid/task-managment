import React from 'react'
import { BrowserRouter as Router, Routes, Route } from'react-router-dom'
import { Header, Footer } from '../Components'
import { Home, Contact, AddTask, Tasks } from '../Pages'

const Navigation = () => {
  return (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tache" element={<Tasks />} />
            <Route path="/ajouter-tache" element={<AddTask />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<p clasName="py-12 text-center font-semibold">Error not found</p>} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default Navigation