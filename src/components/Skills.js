import React from 'react'
import SingleData from './SingleData'
import './singledata.css'

export default function Skills({data}) {
    const filterData= data.map((items,i)=>{
        return <SingleData  key = {i} title={data[i].name} image={data[i].image} url={data[i].url}/>
    })
    return (
        <div className="skills-body">
            {filterData}
        </div>
    )
}
