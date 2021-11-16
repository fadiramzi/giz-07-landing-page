import './BodyStyle.css'
import BodyPart1 from "./BodyPart1"
import BodyPart2 from "./BodyPart2"
import BodyPart3 from "./BodyPart3"
import BodyPart4 from './BodyPart4'
import Bodypart5 from './Bodypart5'


const Body = () => {
    return (
        <div>
           <BodyPart1 /> 
           <BodyPart2 />
           <BodyPart3 />
           <BodyPart4 />
           <br />
           <BodyPart3 />
           <Bodypart5 />
           <br />
           <BodyPart3 />
        </div>
    )
}

export default Body
