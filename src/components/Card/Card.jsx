import "./Card.css"
import { FaStar, FaDownload } from "react-icons/fa"

const Card = (props) => {

    return (

        <div className="most-popular-item">
            <div className="card-wrapper">
                <img className="most-popular-item-image" src={props.image} />
                <div className="most-popular-item-content">
                    <div className="most-popular-item-row">
                        <h4 className="most-popular-item-title">
                            {props.title}
                        </h4>
                        <span>{props.category}</span>
                    </div>
                    <ul>
                        <li><FaStar className="star" />  <span>{props.rate}</span></li>
                        <li><FaDownload className="download" />  <span>{props.download}</span></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Card