import React, {PureComponent} from 'react'
import './InputRange.css';

class InputRange extends PureComponent {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange () {
    this.props.onChange('sliderValue', this.input.value)
  }

  render () {
    return (
      <div className="InputRange">
        <label
          className="InputRange__label"
          htmlFor="slider"
        >
          {this.props.label}
        </label>
        <input
          className="InputRange__input"
          ref={el => {
            this.input = el
          }}
          type="range"
          value={this.props.value}
          name="slider"
          min="30"
          max={window.innerWidth - 20}
          onChange={this.handleChange}
        />
        <span className="InputRange__label-value">
          {this.props.value} px
        </span>
      </div>
    )
  }
}

export default InputRange