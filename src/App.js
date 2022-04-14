import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Hero2 from './components/Hero2'
import Whychooseus from './components/Whychooseus';
import Ourworks from './components/Ourworks';
import Whoweare from './components/Whoweare';
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Hero2/>
     <Whychooseus/>
     <Ourworks/>
     <Whoweare/>
    </div>
  );
}

export default App;
