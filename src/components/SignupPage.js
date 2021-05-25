import React from 'react';

class SignupPage extends React.Component {
    greetings = {en: 'Hello', de: 'Hallo', fr: 'Bonjour'}
    state = {
        email: '',
        password: '',
        nationality: '',
    };
    handleChange = (event) => {
        let {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.setState({
            email: '',
            password: '',
            nationality: ''
        })
    }

    render() {
        const {email, password, email} = this.state;
        const greeting = this.greetings[nationality];

        return (
            <>
                <form>
                    <label>Email</label>
                    <input type="email" name="email" onChange={this.handleChange} value={email} />
                </form>
            </>
        )
    }
}

export default SignupPage;