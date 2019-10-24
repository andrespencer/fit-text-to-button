import React, {PureComponent} from 'react'
import './InputText.css';

class InputText extends PureComponent {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange () {
    this.props.onChange('textValue', this.input.value)
  }

  render () {
    return (
      <div className="InputText">
        <label
          className="InputText__label"
          htmlFor="text"
        >
          {this.props.label}
        </label>
        <input
          className="InputText__input"
          ref={input => {
            this.input = input
          }}
          type="text"
          value={this.props.value}
          name="text"
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default InputText