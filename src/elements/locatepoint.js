import React, {Component} from 'react';

class LocatePoint extends Component {


  render() {
    const { node } = this.props
    const width = node.data.get('width')
    const pageHeight = node.data.get('pageHeight')
    const pageMargin = node.data.get('pageMargin')

    const locatePointStyle = {
      backgroundColor: '#000',
      width: "5mm",
      height: "5mm",
      position: "absolute",
      top: "10mm",
      left: "5mm"
    }

    return (

      <div className="locatePoint" style={locatePointStyle}>

      </div>

    )
  }




}


export default LocatePoint;