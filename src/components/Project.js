import React from 'react'
import SingleProject from './SingleProject'

export default function Project({data}) {
   console.log(data)
    console.log(data)
        let singleProject = data.map((res,i)=>{
            return <SingleProject key={i} description={res.description} title={res.title} />
        })
        
   
  
    return (
        <div >
            {singleProject}
        </div>
    )
}
