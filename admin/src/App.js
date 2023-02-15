import React from 'react'
import { 
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Menu from './components/Menu/index.js'
import Home from './pages/Home/index.js'


const App = ()  => {
  return (
    <>
      <BrowserRouter>
        <Menu/>
        <div className='container mt-3'>
          <Routes>
            <Route path='/'>
              <Route index element={<Home/>}/>

              <Route path='departamentos'>
                <Route index element={<h1>Listagem de Deparetamentos</h1>}/>
                <Route path='new' element={<h1>Cadastra Deparetamentos</h1>}/>
                <Route path=':idDepartamento' element={<h1>Editar Deparetamentos</h1>}/>
              </Route>
            </Route>
          </Routes>
        </div>

      </BrowserRouter>
    </>
  )
}

export default App
