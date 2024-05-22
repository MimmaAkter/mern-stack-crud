import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import UserList from './components/UserList'
import UserCreate from './components/UserCreate'
import UserUpdate from './components/UserUpdate'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList></UserList>}></Route>
          <Route path='/create' element={<UserCreate></UserCreate>}></Route>
          <Route path='/update/:id' element={<UserUpdate></UserUpdate>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
