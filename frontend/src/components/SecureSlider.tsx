import * as React from 'react';
import './SecureSlider.scss';

interface IProps {
}

interface IState {
  progress: number;
  validated: boolean;
}

class SecureSlider extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = { progress: 0.0, validated: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event)
  {
    if (parseInt(event.target.value) >= this.state.progress)
    {
      this.setState({ progress: event.target.value });
    }

    if (this.state.progress >= 100)
    {
      this.setState({ validated: true });
    }
  }

  render() {
    let content;

    if (this.state.validated) {
      content =
        <div className="validated">
          Looking good!
        </div>;
    }
    else
    {
      content =<div>
          <div className="question">
            I’m not a brain eating bastard?
          </div>
          <div className="instruction">
            Slide to prove it!
          </div>
          <input type="range" value={this.state.progress} onChange={this.handleChange} min="0" max="101" className="slider" id="myRange" />
          <div className="powered">
            powered by INABEB
          </div>
        </div>;
     }

    return (
      <div className="wrapper">
        {content}
      </div>
    );
  }
}

export default SecureSlider;
