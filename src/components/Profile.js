import React from "react";
import { connect } from "react-redux";

const Profile = (props) => {
    const { profile } = props;
    const firstName = profile.firstName;
    const lastName = profile.lastName;
    return (
        <div className="container">
            <div className="card center">
                <h1 className="card-title">My Profile</h1>
                <div className="card-content">
                    <p>Name: {firstName + " " + lastName}</p>
                    <p>Joined: </p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Profile);