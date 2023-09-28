import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className='root-layout'>
      <header>
        <nav>
            <h1>Climber Bimber</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="climbs">Climbs</NavLink>
            <NavLink to="techniques">Techniques</NavLink>
        </nav>
      </header>

      <main>
        <Outlet/>
      </main>
    </div>
  )
}
