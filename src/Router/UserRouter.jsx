import React from 'react'
import { Route,Routes} from 'react-router-dom'
import Signup from '../Pages/User/Signup'
const UserRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='signup' element={<Signup/>} />
      </Routes>
    </div>
  )
}

export default UserRouter
