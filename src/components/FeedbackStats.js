import React from 'react'
import ReactDOM from 'react-dom'
import {useState} from 'react'
import { useContext } from 'react'
import FeedbackContext, { FeedbackProvider } from '../context/FeedbackContext'

const FeedbackStats=()=>{
    const {feedback}=useContext(FeedbackContext)
   //Calculate Ratings
   let average = feedback.reduce((total,curr)=>{return total+curr.rating},0) / feedback.length
   average=average.toFixed(1).replace(/[.,]0$/,'')
   console.log(average);
    return(
        <div className='feedback-stats'>
          <h4> {feedback.length} Reviews </h4>
          <h4>Average Rating: {isNaN(average)?0:average}
          </h4>
        </div>
    )
}

export default FeedbackStats

