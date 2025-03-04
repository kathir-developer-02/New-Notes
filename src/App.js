import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignIn from './components/sign-In';
import SignUp from './components/Sign-Up';
import Home from './components/home';
import { AuthProvider } from './components/AuthContext';


function App() {

  return(
    <>

      <div className='position-relative'>

        <AuthProvider>
          <Router>
              <Routes>
                  <Route path='/' element={<SignIn />} />
                  <Route path='/SignUp' element={<SignUp />} />
                  <Route path='/Home' element={<Home />} />               
              </Routes>
          </Router>
        </AuthProvider>
        
      </div>
    </>

  )
    
}

export default App;
