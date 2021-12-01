import React from 'react'

const DevBox = (props) => {
    return (
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image} alt="stock figure"/>
            </div>

            <div claassName='a-b-text'>
                <h2>{props.title}</h2>
                <a href='/workers' type='button' className='devbox-button'>Hire now</a>
            </div>
        </div>
    )
}

export default DevBox
