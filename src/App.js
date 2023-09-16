import './App.css';
import { Routes,Route } from 'react-router-dom'
import Home from './Component/Home';
import NavBar from './Component/NavBar';
import RocketPage from './Component/RocketPage';
// https://api.spacexdata.com/v3/rockets/{{rocket_id}}
function App() {
 
 
  return (
    <div className="app"> 
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/:rocket_id' element={<RocketPage />} />

      </Routes>
     
     
    

    </div>
  );
}

export default App;
  
  