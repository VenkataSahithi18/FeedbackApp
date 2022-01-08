import React from 'react'
import ReactDOM from 'react-dom'
import {useState} from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'
const FeedbackList=()=>{
    const {feedback} = useContext(FeedbackContext)
    console.log(feedback);
    if(!feedback||feedback.length==0)
    {
        return <p>No feedback yet</p>
    }
    return(
    <div className='feedback-list'>
        {feedback.map((item)=>{
       return <FeedbackItem key={item.id} item={item} />})}
    </div>)
}
FeedbackList.propTypes={
    feedback:PropTypes.array.isRequired
}
export default FeedbackList