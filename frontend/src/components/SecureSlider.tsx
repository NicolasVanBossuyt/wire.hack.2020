import * as React from 'react';
import './SecureSlider.scss';

class SecureSlider extends React.Component {
  render() {
    return (<input type="range" min="1" max="100" className="slider" id="myRange"/>);
  }
}

export default SecureSlider;
