
import Footer from "./assets/components/Footer/Footer"
import Hero from "./assets/components/Hero/Hero"
import Stack from "./assets/components/Main/Stack"
import Nav from "./assets/components/Nav/nav"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
 
  return (
    <>
     <Nav />
     <Hero />

    <Stack />
     <Footer />
       <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default App
