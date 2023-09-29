import React from 'react'

const Climbs = () => {

  const climbs = [
    {
      grade: 'red',
      date: '09/29',
      link: 'https://www.youtube.com/watch?v=QjRFZWLl5-A'
    },
    {
      grade: 'green',
      date: '09/28',
      link: 'hi'
    }
  ]

  return (
    <div className='main'>
      Climbs
      <h1>{climbs[0].grade}</h1>
    </div>
  )
}

export default Climbs
