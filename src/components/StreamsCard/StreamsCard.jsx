import "../GamingLibraryCard/GamingLibraryCard.css"
import { ButtonLiveStream } from "../index"
const StreamsCard = (props) => {
    return (
        <div className="gaming-library-card">
            <ul>
                <li><img className="gaming-library-image" src={props.image} alt="" /></li>
                <li><h4>{props.title} Livestream</h4><span>{props.category} </span></li>
                <li><h4>Stream Date</h4><span>{props.date_added}</span></li>
                <li><h4>Stream Time</h4><span>{props.hours_played}</span></li>
                <li><h4>Available</h4><span>{props.online}</span></li>
                <ButtonLiveStream />
            </ul>
        </div>
    )
}

export default StreamsCard