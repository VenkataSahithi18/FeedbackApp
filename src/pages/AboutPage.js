import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'

function AboutPage() {
    return (
       <Card>
           <div>
               <p>This is React App to leave feedback for product</p>
               <p>
                   <Link to='/'>Back to home</Link>
               </p>
           </div>
       </Card>
    )
}

export default AboutPage
