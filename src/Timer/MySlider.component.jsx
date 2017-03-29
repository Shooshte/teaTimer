// @flow

import React, {Component} from 'react';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './Slider.css';

class MySlider extends Component {
    props: {
        totalSeconds: number,
        sliderInput: Function,
        onSetCountdown: Function
    };

    handleChange() {
        this.props.onSetCountdown(parseInt(this.refs.seconds.value, 10));
    }
    handleButton(value : number) {
        this.props.onSetCountdown(parseInt(value, 10));
    }
    handleSlider(value : number) {
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

export default MySlider;
