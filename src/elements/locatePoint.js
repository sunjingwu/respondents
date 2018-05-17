import React, {Component} from 'react';

class LocatePoint extends Component {

  render() {

    const locatePointStyle1 = {
      backgroundColor: '#000',
      width: "5mm",
      height: "5mm",
      position: "absolute",
      top: "11mm",
      left: "6mm"
    }

    const locatePointStyle2 = {
      backgroundColor: '#000',
      width: "5mm",
      height: "5mm",
      position: "absolute",
      top: "10mm",
      right: "5mm"
    }

    const locatePointStyle3 = {
      backgroundColor: '#000',
      width: "5mm",
      height: "5mm",
      position: "absolute",
      bottom: "10mm",
      right: "5mm"
    }
    const locatePointStyle4 = {
      backgroundColor: '#000',
      width: "5mm",
      height: "5mm",
      position: "absolute",
      bottom: "10mm",
      left: "5mm"
    }

    const leftLocatePointStyle1 = {
      backgroundColor: '#000',
      width: "2mm",
      height: "5mm",
      position: "absolute",
      top: "49.5mm",
      left: "6mm"
    }

    const leftLocatePointStyle2 = {
      backgroundColor: '#000',
      width: "2mm",
      height: "5mm",
      position: "absolute",
      top: "99mm",
      left: "6mm"
    }
    const leftLocatePointStyle3 = {
      backgroundColor: '#000',
      width: "2mm",
      height: "5mm",
      position: "absolute",
      top: "148.5mm",
      left: "6mm"
    }
    const leftLocatePointStyle4 = {
      backgroundColor: '#000',
      width: "2mm",
      height: "5mm",
      position: "absolute",
      top: "198mm",
      left: "6mm"
    }
    const leftLocatePointStyle5 = {
      backgroundColor: '#000',
      width: "2mm",
      height: "5mm",
      position: "absolute",
      top: "247.5mm",
      left: "6mm"
    }

    return (
      <div>
        <div key={1} index="1" contentEditable={false} className="locatePoint" style={locatePointStyle1}/>
        <div key={2} index="2" contentEditable={false} className="locatePoint" style={locatePointStyle2}/>
        <div key={3} index="3" contentEditable={false} className="locatePoint" style={locatePointStyle3}/>
        <div key={4} index="4" contentEditable={false} className="locatePoint" style={locatePointStyle4}/>
        <div key={5} index="5" contentEditable={false} className="locatePoint" style={leftLocatePointStyle1}/>
        <div key={6} index="6" contentEditable={false} className="locatePoint" style={leftLocatePointStyle2}/>
        <div key={7} index="7" contentEditable={false} className="locatePoint" style={leftLocatePointStyle3}/>
        <div key={8} index="8" contentEditable={false} className="locatePoint" style={leftLocatePointStyle4}/>
        <div key={9} index="9" contentEditable={false} className="locatePoint" style={leftLocatePointStyle5}/>
      </div>

    )
  }
}


export default LocatePoint;