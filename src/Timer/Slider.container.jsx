import React, {Component} from 'react';

class Slider extends Component {
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

    handleSlider() {
        this.props.sliderInput(parseInt(this.refs.seconds.value, 10));
    }

    render() {
        return(
            <div>
              <div className="ttSliderFrmCnt">
                <form ref="form" className="ttSliderForm">
                    <input max="480" min="30" name="slider" onChange={this.handleSlider} ref="seconds" type="range" value={this.props.totalSeconds}/>
                </form>
              </div>
                <div className="ttSliderBtnsContainer">
                  <div className="ttSliderBtnCnt">
                    <button className="ttButton ttSliderBtn" onClick={() => {
                      this.handleButton(-30)
                    }}>-</button>
                  </div>
                  <div className="ttSliderBtnCnt">
                    <button className="ttButton ttSliderBtn" onClick={() => {
                        this.handleButton(+30)
                    }}>+</button>
                  </div>
                </div>
            </div>
        )
    }
}

Slider.propTypes = {
    totalSeconds: React.PropTypes.number.isRequired,
    sliderInput: React.PropTypes.func.isRequired,
    onSetCountdown: React.PropTypes.func.isRequired
};

export default Slider;
