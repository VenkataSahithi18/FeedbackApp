import React from "react";
import ReactDOM from 'react-dom';
import {FaTimes,FaEdit} from 'react-icons/fa'
import {useState} from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem=({item})=>{
    //const [rating,setRating]=useState(7)
    //const [text,setText]=useState('This is an example of feedback item')
    const handleClick=(id)=>{
        console.log(id);
       // handleDelete(id)
       // setRating(6);
       /*   setRating((prev)=>{
              return prev+1
            })*/
    }
    const {deleteFeedback,editFeedback} = useContext(FeedbackContext)
    return(
       <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={()=>deleteFeedback(item.id)} className='close'><FaTimes color='purple' /></button>
            <button onClick={()=>editFeedback(item)} className='edit'><FaEdit color='purple' /></button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}


export default FeedbackItem