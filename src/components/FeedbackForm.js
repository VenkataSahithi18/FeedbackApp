import React from 'react'
import ReactDOM from 'react-dom'
import {useState} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import {useContext,useEffect} from 'react'
import FeedbackContext from '../context/FeedbackContext'
const FeedbackForm=()=>{
    const {addFeedback,feedbackEdit,updateFeedbackItem} = useContext(FeedbackContext)
    const [text,setText]=useState('')
    const [btnDisabled,setBtnDisabled]=useState(true)
    const [message,setMessage]=useState('')
    const [rating,setRating]=useState(10)
    useEffect(()=>{
        if(feedbackEdit.edit===true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    console.log("hello")
    },[feedbackEdit])

    const handleTextChange=(e)=>{
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        //setText(e.target.value)
    }
else if(text!== '' && text.trim().length < 10){
    setBtnDisabled(true)
    setMessage('Text must be atleast 10 characters')
}
else{
    setBtnDisabled(false)
    setMessage(null)
   
}
setText(e.target.value)
    }
const handleSubmit=(e)=>{
        e.preventDefault();
        if(text.trim().length>10){
            const newFeedback={
                text:text,
                rating:rating
            }
            if(feedbackEdit.edit===true){
                updateFeedbackItem(feedbackEdit.item.id,newFeedback)
            }
            else{
                addFeedback(newFeedback)
            }
         
            setText('')
        }
    }
    return(
       <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would your rate your service?</h2>
            <RatingSelect select={(rating)=>setRating(rating)} />
            <div className='input-group'>
                <input onChange={handleTextChange} type='text' placeholder='Write a review' value={text}>
                </input>
                <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
    )

}
export default FeedbackForm