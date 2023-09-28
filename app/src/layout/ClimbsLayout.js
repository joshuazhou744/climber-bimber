import { NavLink, Outlet } from 'react-router-dom'

export default function ClimbsLayout() {
  return (
    <div className="climbs-layout">
      <h2>Climbs</h2>
      <p>Select a Grade lil bro</p>

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
