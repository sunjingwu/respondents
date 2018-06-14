import React from 'react'

/**
 * 客观题 选项填涂区域
 *
 * @type {Component}
 */

class Option extends React.Component {

  render() {

    let optionStyle = {
      width: '26px',
      display: 'inline-block'
    }

    //圆圈、括号、框？
    let opStyle = this.props.optionStyle

    if(opStyle === "Brackets"){

    }
    switch (opStyle){
      case "Circle":
        optionStyle = {
          width: '10px',
          borderRadius: '50%',
          height: '10px',
          margin: '0 4px',
          border: '1px solid #000',
          display: 'inline-block',
          lineHeight: '9px',
          textAlign: 'center'
        }

        return (
          <div style={{display:'inline-block'}} className={'option'}>
            <div style={optionStyle}></div>
            <span style={{padding:'0 1px'}}>{this.props.choice}</span>
          </div>
        )
        break;
      case "Box":
        optionStyle = {
          width: '18px',
          height: '10px',
          margin: '0 4px',
          border: '1px solid #000',
          display: 'inline-block',
          lineHeight: '9px',
          textAlign: 'center'
        }

        return (
          <div style={optionStyle} className={'option'}>
            <span style={{padding:'0 1px'}}>{this.props.choice}</span>
          </div>
        )
        break;
      case "Brackets":
      default:
        return (
          <div style={optionStyle} className={'option'}>
            [<span style={{padding:'0 1px'}}>{this.props.choice}</span>]
          </div>
        )
        break;
    }



  }
}

/**
 * Export.
 */

export default Option
