import React, { useRef, useState } from 'react'
import Card from './Card'

export const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      description: "While browsing, I found myself downloading a file named 'MysticalJourney.docx'",
      fileSize: "0.9mb",
      close: false,
      tag:{
        download: true
      }
    },
    {
      description: "Late at night, a mysterious file named 'CipheredSecrets.zip' began downloading.",
      fileSize: "0.3mb",
      close: false,
      tag:{
        download: false
      }
    },
    {
      description: "During the meeting, an unexpected file named 'ProjectX_Presentation.pdf' started downloading.'",
      fileSize: "67.9mb",
      close: false,
      tag:{
        download: false
      }
    },
    {
      description: "As the rain tapped on the window, 'Enigma_Encounter.mp4' downloaded quietly.",
      fileSize: "45.3mb",
      close: false,
      tag:{
        download: true
      }
    },
  ]
  return (
    <div ref={ref} className='h-full w-full z-[4] fixed px-10 py-20 flex flex-wrap gap-8'>
        {
          data.map((item)=> (
            <Card data={item} reference= {ref} />
          ))
        }
    </div>
  )
}
