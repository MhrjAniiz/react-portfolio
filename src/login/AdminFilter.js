import Title from '../components/title'


import { useContext } from "react";
import {portfolioContext } from "../login/context";

import React from 'react'
import AdminDelete from './AdminDelete'


const AdminFilter =() => {
        const content = useContext(portfolioContext);
        const {handleRemove} = content;

        const filterResults = content.results.map(res=>{
            return <div>
                <AdminDelete key={res.id} id={res.id} title={res.title} image={res.image} handleRemove={handleRemove}/>
              
            </div>
        })
    return (
            <>
            <Title title="projects !!"/>
            
            <hr className="hr"/>
            <div className="adminbody">
                {filterResults}
            </div>
            </>
        )
    }
export default AdminFilter;

