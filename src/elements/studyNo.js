import React, {Component} from 'react';


class StudyNo extends Component {


  render() {
    const { node } = this.props
    const count = node.data.get('count')

    const tableStyle = {
      borderCollapse: 'collapse',
      textAlign: 'center',
      lineHeight: '5mm'
    }

    const titleStyle = {
      width: '30mm',
      borderCollapse: 'collapse',
      border: 'solid 1px black',
      textAlign: 'center',
    }

    return (
      <div className="studyNo" {...this.props.attributes}>
        <table style={tableStyle} cellPadding="0" cellSpacing="0">
          <tbody>
          <tr height="6mm">
            <td colSpan={count} style={titleStyle}>准考证号
            </td>
          </tr>
          {this.renderFill(count)}
          {this.renderNo(count)}
          </tbody>
        </table>

      </div>
    )
  }


  renderFill = (count) => {

    const thStyle = {
      border: 'solid 1px #000000',
      borderCollapse: 'collapse',
    }

    var rows = [];
    for (var i = 0; i < count; i++) {
      rows.push(<th key={i} style={thStyle}>&nbsp;</th>);
    }
    return <tr height="6mm">{rows}</tr>;
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
    ;
  }
}

export default StudyNo;