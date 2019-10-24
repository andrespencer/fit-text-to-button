import React, {PureComponent} from 'react'
import './App.css';
import InputText from '../InputText/InputText'
import InputRange from '../InputRange/InputRange'
import OutputView from '../OutputView/OutputView'
import translations from '../../translationsMockService'

class App extends PureComponent {
  constructor (props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this);
    this.fitText = this.fitText.bind(this);
    this.changeFontSize = this.changeFontSize.bind(this);

    this.defaultSliderValue = 375
    let sliderValue = this.defaultSliderValue

    // If the window is particularly small (old mobiles mostly, render a smaller slider)
    if (window.innerWidth < this.defaultSliderValue + 20) {
      sliderValue = Math.round(window.innerWidth * 0.9)
    }

    this.state = {
      textValue: translations.defaultText,
      sliderValue: sliderValue,
      textFontSize: 45,
      showError: false
    }
  }

  componentDidMount () {
    this.textObj = document.getElementById("OutputView__box-text")

    // If we have saved the state locally, let's load it now
    if (localStorage.getItem("state")) {
      this.setState(
        JSON.parse(localStorage.getItem("state")),
        ()=>{this.fitText()}
      )
    // If the window is particularly small, we probably need to fit the text already on mount
    } else if (this.state.sliderValue < this.defaultSliderValue) {
      this.fitText()
    }
  }

  componentDidUpdate () {
    // The state has changed, so let's save it locally
    localStorage.setItem('state', JSON.stringify(this.state))
  }

  handleInputChange (type, value) {
    let stateObj = {}
    stateObj[type] = value
    this.setState(
      stateObj,
      () => {this.fitText()}
    )
  }

  fitText () {
    let fontSize = this.state.textFontSize
    let textWidth = this.textObj.scrollWidth
    let boxWidth = this.state.sliderValue
    // If the diference is too small, the function can be stuck in a loop trying to fix it, so let's prevent that
    let difference = textWidth - boxWidth

    if (fontSize > 5 && textWidth > boxWidth && difference > 9) {
      this.changeFontSize(fontSize - 1)
    } else if (fontSize < 45 && textWidth < boxWidth && difference < -9) {
      this.changeFontSize(fontSize + 1)
    } else if (fontSize === 5 && textWidth > boxWidth) {
      this.setState({
        showError: true
      })
    }
  }

  changeFontSize (newFontSize) {
    this.setState({
        textFontSize: newFontSize,
        showError: false
      },
        () => {
          this.textObj.style.fontSize = newFontSize + 'px'
          /* We'll rerun fit text until we're sure we'ce reached the perfect font-size.
          requestAnimationFrame makes sure to wait for the previous DOM operation to complete */
          requestAnimationFrame(this.fitText)
        }
      )
  }

  render () {
    return (
      <div className="App">
        <section className="App__Controls">
          <InputText
            value={this.state.textValue}
            onChange={this.handleInputChange}
            label={translations.inputTextLabel}
          />
          <InputRange
            value={this.state.sliderValue}
            onChange={this.handleInputChange}
            label={translations.inputRangeLabel}
          />
        </section>
        <main className="App__Output">
          <OutputView
            text={this.state.textValue}
            width={this.state.sliderValue}
            visible={!this.state.showError}
          />
          {this.state.showError && (
            <div className="App__Output--error">
              <img className="App__Output--error__Image" src={translations.errorImg} alt="" />
              <h2>{translations.errorMessage}</h2>
            </div>
          )}
        </main>
      </div>
    )
  }
}

export default App