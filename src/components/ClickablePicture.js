import React from 'react';

class ClickablePicture extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            img: props.img
        }
    }

    clickedImage = () => {
        this.setState((state, props) => ({
            img: props.imgClicked
        }))
    }

    render() {
        return (
            <div>
                <img onClick={this.clickedImage} src={this.state.img} alt="ClickablePicture"/>
            </div>
        )
    }
}

export default ClickablePicture