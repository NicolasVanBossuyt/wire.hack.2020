import * as React from 'react';
import './SecureSlider.scss';

interface IProps {
}

interface IState {
  progress: number;
}

class SecureSlider extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = { progress: 0.0 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event)
  {
    if (parseInt(event.target.value) >= this.state.progress)
    {
      this.setState({ progress: event.target.value });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="question">
          I’m not a brain eating bastard?
        </div>
        <div className="instruction">
          Slide to prove it!
        </div>
        <input type="range" value={this.state.progress} onChange={this.handleChange} min="0" max="100" className="slider" id="myRange" />
        <div className="powered">
          powered by INABEB
        </div>
      </div>
    );
  }
}

export default SecureSlider;
