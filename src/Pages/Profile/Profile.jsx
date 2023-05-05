import "./Profile.css"

const Profile = (props) => {

    return (
        <div>
            <h1>Profile</h1>
            <ul>
                <li><span className="logged-user"> logged in :{props.name} </span></li>
                <li><span className="logged-user"> Games Downloaded :{props.number} </span></li>
                <li><span className="logged-user"> Hours Played :{props.hours} </span>
                </li>
            </ul>

        </div>

    )
}

export default Profile