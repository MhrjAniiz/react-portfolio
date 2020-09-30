
import Title from './title'
import '../pages/skillsPage.css'
import { useContext } from "react";
import {portfolioContext } from "../login/context";
import ProjectPage from './ProjectPage'
import React from 'react'
import './projectPage.css'


const Project =() => {
        const content = useContext(portfolioContext);

        const filterResults = content.results.map(res=>{
            return <div>
                <ProjectPage  id={res.id} title={res.title} description={res.description} url={res.url} image={res.image} />
              
            </div>
        })
    return (
            <>
            <Title title="projects !!"/>
            <div>
            <p className="desc">These are the projects I have done so far using the programming languages i have learned. It includes from basic projects to advanced ones.</p>
            </div>
            <hr className="hr"/>
            <div className="p-body">
                {filterResults}
            </div>
            </>
        )
    }
export default Project;

