import React, { useState } from 'react';
import PropTypes from 'prop-types';
/* import { Form, Button, Card, CardGroup, Row, Col, Container } from 'react-bootstrap'; */

/* import './registration-view.scss';
import axios from 'axios'; */

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  /* const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://movies-your-favorites.herokuapp.com/users', {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    })
      .then(response => {
        const data = response.data;
        console.log(data);
        window.open('/', '_self');
      })
      .catch(e => {
        console.log('error registering the user');
        alert('Something wasn\'t entered right');
      })
  } */

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
      <button type='submit' onClick={(e) => console.log('Submit Form')}>Submit</button>
      <button onClick={(e) => props.clickHandler(e)}>Go to Sign In</button>

    </form>
  );

  /* <Container>
  <Row>
    <Col>
      <CardGroup>
        <Card>
          <Card.Title>Please Register</Card.Title>
          <Form>
            <Form.Group>
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type='text'
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
                placeholder='Enter a username'
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                minLength='8'
                placeholder='Your password must be a minimum of 8 characters'
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type='text'
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder='Enter your email address'
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Birthday</Form.Label>
              <Form.Control
                type='text'
                value={Birthday}
                onChange={e => setBirthday(e.target.value)}
                required
                placeholder='Enter your birthday'
              />
            </Form.Group>
            <Button variant='primary'
              type='submit'
              onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Card>
      </CardGroup>
    </Col>
  </Row>
</Container>
); */
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

