import React from 'react'
import {createContext,useState} from 'react'
import ReactDOM from 'react-dom'
import {v4 as uuidv4} from 'uuid'
const FeedbackContext = createContext()


export const FeedbackProvider = ({children})=>{
    const [feedback,setFeedback] = useState([{id:1,text:'this item is from context',rating:10},
    {id:2,text:'this item is from context 2',rating:7},
    {id:3,text:'this item is from context 3',rating:8}])

    const deleteFeedback=(id)=>{
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item)=>{return item.id !== id}))
           // setFeedback(console.log('lo'))
        }
    
    }
    const addFeedback=(newFeedback)=>{
        newFeedback.id = uuidv4()
       console.log(newFeedback)
       setFeedback([...feedback,newFeedback])
    
    }
    const updateFeedbackItem=(id,updatedItem)=>{
           setFeedback(feedback.map((item)=>item.id===id? {...item,...updatedItem}:item))
    }
    const [feedbackEdit,setFeedbackEdit]=useState({item:{},edit:false})
    const editFeedback=(item)=>{
        setFeedbackEdit({item,edit:true})
    }
    return <FeedbackContext.Provider value={{feedback:feedback,deleteFeedback:deleteFeedback,updateFeedbackItem,addFeedback:addFeedback,editFeedback,feedbackEdit}}>
    {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext