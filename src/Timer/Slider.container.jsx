import React, {Component} from 'react';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './Slider.css';

class MySlider extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleButton = this.handleButton.bind(this);
        this.handleSlider = this.handleSlider.bind(this);
    }

    handleChange() {
        this.props.onSetCountdown(parseInt(this.refs.seconds.value, 10));
    }

    handleButton(value) {
        this.props.onSetCountdown(parseInt(value, 10));
    }

    handleSlider(value) {
        this.props.sliderInput(parseInt(value, 10));
    }

    render() {
        return(
            <div>
                <div className="slider-container">
                    <Slider
                      ref="seconds"
                      name="slider"
                      min={30}
                      max={480}
                      step={30}
                      value={this.props.totalSeconds}
                      defaultValue={300}
                      onChange={this.handleSlider}
                    />
                </div>
                <div className="button-container slider-buttons">
                    <button className="button" onClick={() => {
                      this.handleButton(-30)
                    }}>-</button>
                    <button className="button" onClick={() => {
                        this.handleButton(30)
                    }}>+</button>
                </div>
            </div>
        )
    }
}

MySlider.propTypes = {
    totalSeconds: React.PropTypes.number.isRequired,
    sliderInput: React.PropTypes.func.isRequired,
    onSetCountdown: React.PropTypes.func.isRequired
};

export default MySlider;
