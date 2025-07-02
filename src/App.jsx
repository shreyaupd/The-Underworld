import { useState } from 'react'
import Home from './pages/Home'
import Loading from './components/Loading'

function App() {
  const [showLoading, setShowLoading] = useState(true)

  return (
    <>
      {showLoading ? (
        <Loading onComplete={() => setShowLoading(false)} />
      ) : (
        <Home />
      )}
    </>
  )
}

export default App




