
import './App.css';
import Dashboard from './components/Dashboard';
import Reviews from './components/Reviews';
import Rating from './components/Rating';
import Analysis from './components/Analysis';
import Visitors from './components/Visitors';

function App(){
  return(
    <div className= 'App'>
    <div className= 'Dashboard'>
      <Dashboard />
    </div>
    <div className= 'Reviews'>
    <Reviews />
    </div>
    <div className= 'Rating'>
    <Rating />
    </div>
    <div className = 'Analysis'>
      <Analysis />
    </div>
    <div className = 'Visitors'>
      <Visitors />
    </div>
    </div>

  )
}

export default App;
