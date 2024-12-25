import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import MyList from './pages/mylist/MyList'
import { HOME, MOVİE_DETAİLS, MY_LİST } from './components/constasts/path'
import MovieDetails from './pages/movieDetails/MovieDetails'

function App() {
 

  return (
    <div className='app'>
      <Navbar />
      <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={MY_LİST} element={<MyList />}/>
          <Route path={MOVİE_DETAİLS} element={<MovieDetails />}/>
      </Routes>
    </div>
  )
}

export default App
