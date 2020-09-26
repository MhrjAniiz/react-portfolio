import React from 'react'
import {Data} from '../data';
import Skills from '../components/Skills'
import Title from '../components/title'
import "./skillsPage.css"

export default function SkillsPage() {
    return (
        <div>
            <Title title="Programming Languages I worked with"/>
            <div>
                <p className="desc">Although, I have worked with several programming languages during my college time, I mostly use javascript, html, css and react. With the motive of being a front-end developer i mostly use javascript library React. I also find myself very comfortable using it.Another strength of mine would be django which is a python framework. I have done several project using the python and its framework django. I have listed all the languages that i have worked with before and familiar to.</p>
            </div>
            <Skills data={Data}/>
        </div>
    )
}
