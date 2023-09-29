import { NavLink, Outlet } from 'react-router-dom'

export default function ClimbsLayout() {

  const climbs = [
    {
      grade: 'red',
      date: '09/29',
      link: 'https://www.youtube.com/watch?v=QjRFZWLl5-A',
      name: 'name'
    }
  ]

  return (
    <div className="climbs-layout">

      <div className="container">
        <h2>Select a grade</h2>
        <NavLink to="addclimb">Add Climb</NavLink>
      </div>

      <nav>
        <NavLink to="red">Red</NavLink>
        <NavLink to="orange">Orange</NavLink>
        <NavLink to="yellow">Yellow</NavLink>
        <NavLink to="green">Green</NavLink>
      </nav>

      <Outlet/>
    </div>
  )
}
