// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import reactLogo from './assets/react.svg'
// import './App.css'
import { LoginView } from './views/loginView'
import { AdminView } from './views/adminView'
import { AdminViewUsers } from './views/adminViewUsers';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginView />} />
          <Route path='/admin-products' element={<AdminView />} />
          <Route path='/admin-users' element={<AdminViewUsers />} />
        </Routes>
      </BrowserRouter>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
