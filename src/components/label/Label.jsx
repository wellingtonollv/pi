import React from 'react'
import './Label.scss'

export default function Label(props){
    return( 

        <h1>{props.name} <span>{props.number}</span>:</h1>

    )
}