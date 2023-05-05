import "./Button.css"

const Button = () => {
    return (
        <div className="main-button">
            <a href="browse.html">Browse Now </a> <i className="fas fa-arrow-right"></i>
        </div>
    )
}
const ButtonDownload = () => {
    return (
        <div className=" library_card_button">
            <a href="/#">Download </a> <i className="fas fa-arrow-right"></i>
        </div>
    )
}
const ButtonLiveStream = () => {
    return (
        <div className=" library_card_button">
            <a href="/#" className="live-btn">Watch Live </a> <i className="fas fa-arrow-right"></i>
        </div>
    )
}


export default Button
export { ButtonDownload, ButtonLiveStream }