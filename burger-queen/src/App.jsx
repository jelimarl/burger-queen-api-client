import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginView } from './views/loginView'
import { AdminView } from './views/adminView'
import { AdminViewUsers } from './views/adminViewUsers';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WaiterView } from './views/waiterView';
import { ChefView } from './views/chefView'
import { WaiterViewStatusOrders } from './views/waiterViewStatusOrders'

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginView />} />
          <Route path='/admin-products' element={<AdminView />} />
          <Route path='/admin-users' element={<AdminViewUsers />} />
          <Route path='/waiter' element={<WaiterView />} />
          <Route path='/waiter-orders' element={<WaiterViewStatusOrders />} />
          <Route path='/chef' element={<ChefView />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
