import { useState } from 'react'
import Header from './components/layout/header'
import Hero from './components/hero'
import Products from './components/products'
import Footer from './components/layout/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <main>
      <Hero />
      <Products />
    </main>
    <Footer />
    </>
  )
}

export default App
