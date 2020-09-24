import React from 'react'
import SingleProject from './SingleProject'

export default function Project({data}) {
    console.log(data)
        let singleProject = data.map((res)=>{
            return <SingleProject key={res} description={res.description} title={res.title} />
        })
        
   
  
    return (
        <div >
            {singleProject}
        </div>
    )
}
