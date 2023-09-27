import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Climbs from './components/Climbs';
import Home from './components/Home'
import Techniques from './components/Techniques'


function App() {
  return (
    <BrowserRouter>
      <header>

        <nav>
          <h1>Climber Bimber</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="climbs">Climbs</NavLink>
          <NavLink to="techniques">Techniques</NavLink>
        </nav>
      
      </header>
      <main>

        <Routes>

          <Route index element={<Home />}/>

          <Route path="climbs" element={<Climbs />}/>

          <Route path="techniques" element={<Techniques />}/>

        </Routes>

      </main>
    </BrowserRouter>
  )
}

export default App;
