import React, {PureComponent} from 'react'
import './OutputView.css';

class OutputView extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      boxStyle: {
        'width': this.props.width + 'px'
      }
    }
  }

  componentDidUpdate () {
    if (parseInt(this.props.width) !== parseInt(this.state.boxStyle.width)) {
      this.setState({
        boxStyle: {
          'width': this.props.width + 'px'
        }
      })
    }
  }

  render () {
    return (
      <div className={"OutputView" + (!this.props.visible && " OutputView--hidden")}>
        <div className="OutputView__box" style={this.state.boxStyle}>
          <span id="OutputView__box-text" className="OutputView__box-text">
            {this.props.text}
          </span>
        </div>
      </div>
    )
  }
}

export default OutputView