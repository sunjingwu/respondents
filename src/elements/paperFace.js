import React, {Component} from 'react';

class PaperFace extends Component {


  render() {
    const { node } = this.props
    const pageWidth = node.data.get('pageWidth')
    const pageHeight = node.data.get('pageHeight')
    const pageMargin = node.data.get('pageMargin')

    const pageStyle = {
      position: 'relative',
      backgroundColor: '#fff',
      margin: '1px auto',
      width: pageWidth,
      height: pageHeight,
      padding: pageMargin.join(" ")
    }

    return (

      <div className="page" style={pageStyle} {...this.props.attributes}>

        {this.props.children}
      </div>

    )
  }

}


export default PaperFace;