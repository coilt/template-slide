import React from 'react'
import Pixels from '../../components/Layout/Pixels'
import Inner from '@/components/Layout/Inner'

export default function Projects() {
  return (
    <Pixels>
      <div className='wrapper'>
        <h1>This page transition is messed up</h1>
        <div className='body'>
          <p>
            There's two transition effects on top of each other. Because I want
            this project to combine a few different types of transitions. I'm
            using the Pages router, which means I'm rendering index.jsx through
            _app.js. This makes tricky it to render a different wrapper on
            different pages, I don't want to create a mess in the structure, so
            I'm choosing the mess in the presentation since this is just a
            template.
          </p>
        </div>
      </div>
    </Pixels>
  )
}
