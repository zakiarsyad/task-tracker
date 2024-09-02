import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About } from './pages/AboutPage'
import { Home } from './pages/HomePage'

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App;
