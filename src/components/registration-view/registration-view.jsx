import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function RegistrationView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');

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
            <label>
                Email:
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
                Birthday:
                <input type='text' value={birthday} onChange={e => setBirthday(e.target.value)} />
            </label>
            <button onClick={(e) => props.clickHandler(e)}>Sign In</button>

        </form>
    );
}

RegistrationView.propTypes = {
    register: PropTypes.shape({
        Username: PropTypes.string.isRequired,
        Password: PropTypes.string.isRequired,
        Email: PropTypes.string.isRequired,
        Birthday: PropTypes.number.isRequired,
    }),
    onRegistration: PropTypes.func.isRequired,
};
