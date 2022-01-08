import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
const Header=({title,bgColor,textColor})=>{
    return(
        <header style={{backgroundColor:bgColor,color:textColor}}>
        <div className='container'>
            <h1>{title}</h1>
        </div>
        </header>
    )
}

Header.defaultProps={
    title:'Feedback UI',
    bgColor:'rgba(0,0,0,0.4)',
    textColor:'ff6a95'
}

Header.propTypes={
    title:PropTypes.string
}
export default Header



