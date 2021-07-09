import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

// const Hello = (props) => {
//   return (
//     <div className="container">
//       <h1> Hello, {props.name}</h1>
//     </div>
//   );
// }

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };
  }

  render() {
    return (
      <h1><strong>Hello, {this.props.name}</strong></h1>
    )
  }
}

const root = document.getElementById('root');

if (root) {
  ReactDOM.render(
    <Hello name="Cindy" />,
    root);
}