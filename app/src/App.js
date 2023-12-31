import { 
  createBrowserRouter, 
  Route, 
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import Home from './components/Home'
import Techniques from './components/Techniques'
import RootLayout from './layout/RootLayout';
import ClimbsLayout from './layout/ClimbsLayout';
import Red from './components/grades/Red'
import Orange from './components/grades/Orange'
import Yellow from './components/grades/Yellow'
import Green from './components/grades/Green'
import AddClimb from './AddClimb';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>

          <Route index element={<Home />}/>

          <Route path="climbs" element={<ClimbsLayout/>}>
            <Route path="addclimb" element={<AddClimb/>}/>
            <Route path="red" element={<Red/>}/>
            <Route path="orange" element={<Orange/>}/>
            <Route path="yellow" element={<Yellow/>}/>
            <Route path="green" element={<Green/>}/>
          </Route>

          <Route path="techniques" element={<Techniques />}/>

    </Route>
  )
)

function App() {
  return (

      <RouterProvider router={router}/>
  )
}

export default App;
