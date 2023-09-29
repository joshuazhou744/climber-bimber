import React, { useState } from 'react'

const climbs = []

export default function AddClimb() {

    const [data, setData] = useState({
        name: "",
        link: "",
        date: "",
        grade: ""
    })

    function handle(e) {
        e.preventDefault()
        const newData={...data}
        newData[e.target.id] = e.target.value
        setData(newData)
    }
    climbs.push(data)
    console.log(climbs)

  return (
    <div className='formDiv'>
      <form className='form' onSubmit={(e)=>handle(e)}>

        <label>Name: </label>
        <input onChange={(e)=>handle(e)} value={data.name} type="text" id="name" name="name" placeholder='Name of Climb'/> <br/>

        <label>Link: </label>
        <input onChange={(e)=>handle(e)} value={data.link} type="text" id="link" name="link" placeholder='Video Link'/>

        <label>Date: </label>
        <input onChange={(e)=>handle(e)} value={data.date} type="date" id="date" name="date"/> <br/>

        <label>Grade: </label>
        <select onChange={(e)=>handle(e)} value={data.grade} id="grade" name="grade">
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
        </select> <br/>

        <input type="submit" value="Submit"/>

      </form>
    </div>
  )
}
