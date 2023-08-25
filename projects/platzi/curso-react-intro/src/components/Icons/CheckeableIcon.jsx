import React from 'react'

function CheckeableIcon(props) {
    const {color} = props;
    
    return (
        <>
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 29C22.9558 29 29 22.9558 29 15.5C29 8.04416 22.9558 2 15.5 2C8.04416 2 2 8.04416 2 15.5C2 22.9558 8.04416 29 15.5 29Z" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        </>
    )
}

export default CheckeableIcon