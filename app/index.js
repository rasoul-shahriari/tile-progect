import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WidgetsHeader from './react/components/widgetsHeader';
import Widget from './react/components/Widget';
import reviews from './reviews';

require('./scss/index.scss');

class App extends Component {

    render() {
      return (
          <div>
              <WidgetsHeader reviews={reviews} />
              <Widget reviews={reviews}/>
          </div>
      )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
