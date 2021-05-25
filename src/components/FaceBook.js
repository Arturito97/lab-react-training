import React from 'react';
import profiles from '../data/berlin.json';

class FaceBook extends React.Component {
    render() {
        const facebookList = profiles.map((profile) => {
            return (
                <>
                    <img src={profile.img} />
                    <div>
                        <p>First name: {profile.firstName}</p>
                        <p>Last name: {profile.lastName}</p>
                        <p>Country: {profile.country}</p>
                        <p>Type: {profile.isStudent ? 'Student' : 'Teacher'}</p>
                    </div>
                </>
            )
        })
        return (
            <div>
                {facebookList}
            </div>
        )
    }
}

export default FaceBook;