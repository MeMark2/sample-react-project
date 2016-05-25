import React from 'react'
import ReactDOM from 'react-dom'

export default React.createClass({
  focusText() {
    ReactDOM.findDOMNode(this.refs.textArea).focus()
  },

  render() {
    let type = 'text'
    if (this.props.password) {
      type = 'password'
    }

    return (
      <div className='textInput' onClick={this.focusText}>
        <img className='textInput__icon' src={this.props.iconSrc}/>
        <input ref='textArea' type={type} placeholder={this.props.placeholder} className='textInput__input' 
          onBlur={this.props.onLoseFocus} onChange={this.props.onTextChange}/>
      </div>
      )
  }
})