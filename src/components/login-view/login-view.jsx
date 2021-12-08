import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function LoginView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        // Send a request to the server for authentication

        props.onLoggedIn(username);
    };

    return (
        <form>
            <label>
                Username:
                <input type='text' value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <button type='submit' onClick={handleSubmit}>Submit</button>
            <button onClick={(e) => props.clickHandler(e)}>Go to Register</button>
        </form>
    );
}

LoginView.propTypes = {
    login: PropTypes.shape({
        Username: PropTypes.string.isRequired,
        Password: PropTypes.string.isRequired,
    }),
    onLogin: PropTypes.func
};