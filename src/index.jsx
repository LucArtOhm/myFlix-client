import React from 'react';
import ReactDOM from 'react-dom';
import { MainView } from './components/main-view/main-view';
/* import Container from 'react-bootstrap/Container'; */

// This statement indicates that I need to bundle './index.scss'
import './index.scss';

// This will become the main component
class MyFlixApplication extends React.Component {
  render() {
    return (
      /* {<Container>} */
      <MainView />
      /* {</Container>} */
    );
  }
}

// Finds the root of my app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render my app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);