
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fetch from './Components/fetch'

function App() {
 

  return (
    <div>
      <a href="https://vitejs.dev" rel='noreferrer' target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" rel='noreferrer' target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <Fetch />
    </div>
    
  )
}

export default App
