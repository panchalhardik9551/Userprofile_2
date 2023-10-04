import React from 'react'

export default function Navbar(props) {
    return (
        <>
            <div id="main">
                <div id='name'><b> {props.Name}</b></div><br />
                <div><img src={props.image} alt="" /></div><br />
                <div id="bio"> {props.bio}</div>
            </div>
        </>
    )
}



