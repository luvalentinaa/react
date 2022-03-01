import React from 'react'
import './text.css'


class ColoredText extends React.Component {
  render() {
    return (
      <div className="colored-text">
        <p style={{ color: 'DeepPink' ,textTransform: 'uppercase' }}>{this.props.text}</p>
      </div>
    )
  }
}
export default ColoredText
