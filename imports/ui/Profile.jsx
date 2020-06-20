import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <h1 className="profile-name">Unblast</h1>
                <p className="profile-id">@unblast</p>
                <div className="profile-info">
                    <p className="description">Daily resources for designersmockups, icons &amp; graphics blugraphic.com</p>
                    <p className="location">Namur, Belgium</p>
                    <p className="web-site">blugraphic.com</p>
                    <p className="join-date">Joined May 2009</p>
                    <p className="birthday">Born the 20th of June 1978</p>
                </div>

                <p className="followers">73 followers that you know</p>

                <div className="cicle-gallery">
                    <img src="followers-icon.png" alt="" className="circle-logo" />
                    <img src="followers-icon.png" alt="" className="circle-logo" />
                    <img src="followers-icon.png" alt="" className="circle-logo" />
                    <img src="followers-icon.png" alt="" className="circle-logo" />
                    <img src="followers-icon.png" alt="" className="circle-logo" />
                    <img src="followers-icon.png" alt="" className="circle-logo" />
                    <img src="followers-icon.png" alt="" className="circle-logo" />
                    <img src="followers-icon.png" alt="" className="circle-logo" />
                    <img src="followers-icon.png" alt="" className="circle-logo" />
                    <img src="followers-icon.png" alt="" className="circle-logo" />
                </div>


                <p className="gallery-amount">834 Photos and videos</p>

                <div className="gallery">
                    <img className="profile-gallery" src="1.png" alt="" />
                    <img className="profile-gallery" src="1.png" alt="" />
                    <img className="profile-gallery" src="1.png" alt="" />
                </div>
                <div className="gallery">
                    <img className="profile-gallery" src="1.png" alt="" />
                    <img className="profile-gallery" src="1.png" alt="" />
                    <img className="profile-gallery" src="1.png" alt="" />
                </div>

            </div>
        )
    }
}
