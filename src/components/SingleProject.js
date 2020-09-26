import React from 'react'
import Card from './card'
import './card.css'


export default function SingleProject({title,url,image}) {
    return (
    <div><Card title={title} url={url} image={image} />
    </div>
)
}
