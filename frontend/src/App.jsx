import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './compoonents/HomePage'
import AddBook from './compoonents/AddBook'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/create-book" element={<AddBook />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
