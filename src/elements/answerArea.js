import React, {Component} from 'react';


/**
 * 作答区
 */
class AnswerArea extends Component {


  render() {

    //作答区高度
    const height = 8;

    const titleStyle = {
      width: '30mm',
      borderCollapse: 'collapse',
      border: 'solid 1px black',
      textAlign: 'center',
    }

    return (
      <div className="answerArea" {...this.props.attributes}>


      </div>
    )
  }


  renderNo = (count) => {

    const noColStyle = {
      border: 'solid 1px #000000',
      borderCollapse: 'collapse',
      paddingTop: '1mm',
      borderLeftColor: '#000000',
      borderBottomColor: '#000000',
    }

    const noStyle = {
      padding: '0px 1px',
    }

    var rows = [];
    for (var i = 0; i < count; i++) {
      rows.push(<td key={i} style={noColStyle}>
        [<span style={noStyle}>0</span>]<br/>
        [<span style={noStyle}>1</span>]<br/>
        [<span style={noStyle}>2</span>]<br/>
        [<span style={noStyle}>3</span>]<br/>
        [<span style={noStyle}>4</span>]<br/>
        [<span style={noStyle}>5</span>]<br/>
        [<span style={noStyle}>6</span>]<br/>
        [<span style={noStyle}>7</span>]<br/>
        [<span style={noStyle}>8</span>]<br/>
        [<span style={noStyle}>9</span>]
      </td>);
    }
    return <tr>{rows}</tr>;
  }
}

export default AnswerArea;