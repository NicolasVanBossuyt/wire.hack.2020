import * as React from 'react';
import './SecureSlider.scss';

interface IProps {
}

interface IState {
  progress: number;
  validating: boolean;
  validated: boolean;
  mouse_record;
  position;
}

class SecureSlider extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = { progress: 0.0, validating: false, validated: false, mouse_record: [], position: [] };
    this.handleChange = this.handleChange.bind(this);

    let parent = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      parent.setState({ position: [position.coords.latitude, position.coords.longitude] });
    });
  }

  showPosition(position) {
    console.log([position.coords.latitude, position.coords.longitude]);
    this.setState({ position: [position.coords.latitude, position.coords.longitude]});
  }

  doValidation()
  {
    let parent = this;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://127.0.0.1:5000/validate', true);

    //Envoie les informations du header adaptées avec la requête
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () { //Appelle une fonction au changement d'état.
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        parent.setState({ validated: true });
        console.log(this.response);
      }
    }

    let payload = {
      "mouse": parent.state.mouse_record,
      "position": parent.state.position
    };

    xhr.send(JSON.stringify(payload));
  }

  handleChange(event)
  {
    if (parseInt(event.target.value) >= this.state.progress)
    {
      this.setState({ progress: parseInt(event.target.value) });
    }

    if (this.state.progress >= 98)
    {
      this.setState({ validating: true });
      this.doValidation();
    }
  }

  handleMouseMove(event)
  {
    this.setState({ mouse_record: this.state.mouse_record.concat([[event.nativeEvent.offsetX, event.nativeEvent.offsetY]]) });
  }

  render() {
    let content;

    if (this.state.validated) {
      content =
        <div className="validated">
          Looking good!
        </div>;
    }
    else if (this.state.validating)
    {
      content =
        <div className="validating">
          Validating...
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
        <input type="range" onMouseMove={this.handleMouseMove.bind(this)} value={this.state.progress} onChange={this.handleChange} min="0" max="101" className="slider" id="myRange" />
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
