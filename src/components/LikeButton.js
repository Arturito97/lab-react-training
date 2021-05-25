import React from 'react'

class LikeButton extends React.Component {
    state = {
        likes: 0
    }

    incrementLikes = () => {
        this.setState({
            likes: this.state.likes + 1
        })
    }

    render() {
        const {likes} = this.state;
        return (
            <div>
                <button onClick={this.incrementLikes}>{likes} Likes</button>
            </div>
        )
    }
}

export default LikeButton