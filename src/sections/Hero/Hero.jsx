
import "./Hero.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Button from "../../components/Button/Button"
const Hero = () => {
    return (
        <div className="hero-main">
            <div className="hero-text">
                <h6 className="hero-subtitle">Welcome To Cyborg</h6>
                <h4 className="hero-title"><em>Browse</em> Our Popular Games Here</h4>
                <Button />

            </div>
        </div>
    )
}

export default Hero