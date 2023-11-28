import { Button } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Routes, Route } from "react-router-dom"
import UserPage from './pages/UserPage'
import PostPage from './pages/PostPage'
import Header from './components/Header'
function App() {

  return (
    <>
      <Header />
      <Container maxW='620px'>
        <Routes>
          <Route path="/:username" element={<UserPage />} />
          <Route path="/:username/post/:pid" element={<PostPage />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
