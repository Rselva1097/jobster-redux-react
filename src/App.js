import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { Landing, Error, Register,ProtectedRoute} from './pages'
import {
    AddJob,
    AllJob,
    Profile,
    SharedLayOut,
  States,
    
} from './pages/dashBoard'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <SharedLayOut />
          </ProtectedRoute>
        }>
          <Route index element={ <States/>} />
          <Route path='all-jobs' element={<AllJob />}/>
          <Route path='add-job' element={<AddJob />}/>
          <Route path='profile' element={<Profile />}/>
        </Route>
        
        <Route path='landing' element={<Landing/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
      <ToastContainer position='top-center'/>
    </BrowserRouter>
  )
}

export default App;
